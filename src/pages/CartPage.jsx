import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center border p-4">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
              <div>
                <h2 className="text-xl">{item.name}</h2>
                <p>${item.price.toFixed(2)}</p>
              </div>
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
