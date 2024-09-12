import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">Fresh Market</Link>
        <ul className="flex space-x-4">
          <li><Link to="/products" className="hover:text-gray-300">Products</Link></li>
          <li><Link to="/cart" className="hover:text-gray-300">Cart</Link></li>
          <li><Link to="/checkout" className="hover:text-gray-300">Checkout</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
