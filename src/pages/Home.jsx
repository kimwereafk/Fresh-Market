import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to Fresh Market</h1>
      <p className="mb-6">The best place to shop for fresh groceries.</p>
      <Link to="/products" className="bg-green-500 text-white px-4 py-2 rounded">Shop Now</Link>
    </div>
  );
};

export default Home;
