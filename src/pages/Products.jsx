import ProductCard from '../components/ProductCard';

const Products = () => {
  const products = [
    { id: 1, name: 'Apple', category: 'Fruits', price: 2.99, image: 'apple.jpg' },
    { id: 2, name: 'Carrot', category: 'Vegetables', price: 1.99, image: 'carrot.jpg' },
    // More products...
  ];

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
