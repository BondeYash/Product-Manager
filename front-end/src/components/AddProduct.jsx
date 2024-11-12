import { useState } from 'react';

const AddProduct = () => {
  const [formData, setFormData] = useState({ productName: '', price: '', description: '', category: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/addproduct', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) 
      {
        alert('Product added successfully');
      }
      else
      {
         throw new Error('Failed to add product');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4 ">
      <input name="productName" placeholder="Product Name" onChange={handleChange} className="input" />
      <input name="price" type="number" placeholder="Price" onChange={handleChange} className="input" />
      <textarea name="description" placeholder="Description" onChange={handleChange} className="input"></textarea>
      <input name="category" placeholder="Category" onChange={handleChange} className="input" />
      <button type="submit" className="btn-primary">Add Product</button>
    </form>
  );
};

export default AddProduct;
