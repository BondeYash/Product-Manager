import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({ productName: '', price: '', description: '', category: '' });

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then(response => response.json())
      .then(data => setFormData(data.product))
      .catch(error => console.error('Error loading product:', error));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) alert('Product updated successfully');
      else throw new Error('Failed to update product');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <input name="productName" value={formData.productName} onChange={handleChange} className="input" />
      <input name="price" value={formData.price} onChange={handleChange} className="input" />
      <textarea name="description" value={formData.description} onChange={handleChange} className="input"></textarea>
      <input name="category" value={formData.category} onChange={handleChange} className="input" />
      <button type="submit" className="btn-primary">Update Product</button>
    </form>
  );
};

export default UpdateProduct;
