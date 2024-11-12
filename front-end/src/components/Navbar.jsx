import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="flex justify-around">
        <NavLink to="/" className="hover:underline">Home</NavLink>
        <NavLink to="/products" className="hover:underline">Products</NavLink>
        <NavLink to="/add-product" className="hover:underline">Add Product</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
