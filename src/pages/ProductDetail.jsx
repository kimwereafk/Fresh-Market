import { useParams } from 'react-router-dom';
import { useState } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    id: 1,
    name: 'Apple',
    category: 'Fruits',
    price: 2.99,
    description: 'A fresh and juicy apple.',
    image: 'apple.jpg'
  });

  return (
    <div className="container mx-auto my-10">
      <div className="flex space-x-10">
        <img src={product.image} alt={product.name} className="w-1/3 h-96 object-cover" />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
          <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
