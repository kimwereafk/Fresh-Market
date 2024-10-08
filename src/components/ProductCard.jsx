import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-700">${product.price.toFixed(2)}</p>
      <Link to={`/product/${product.id}`} className="bg-green-500 text-white px-4 py-2 mt-4 inline-block rounded">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
