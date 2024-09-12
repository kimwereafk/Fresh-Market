const CheckoutPage = () => {
    return (
      <div className="container mx-auto my-10">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium">Full Name</label>
            <input type="text" className="w-full border rounded p-2" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Address</label>
            <input type="text" className="w-full border rounded p-2" required />
          </div>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Place Order</button>
        </form>
      </div>
    );
  };
  
  export default CheckoutPage;
  