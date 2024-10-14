import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "./cartSlice";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        if (window.confirm("Are you sure you want to clear the cart?")) {
            dispatch(clearCart());
        }
    };

    return (
        <div className="p-4">
            <h1 className="font-bold text-3xl mb-4">Cart Items - {cartItems.length}</h1>
            
            {cartItems.length === 0 ? (
                <p className="text-xl">Your cart is empty.</p>
            ) : (
                <>
                    <button
                        className="bg-red-500 text-white p-2 m-5 hover:bg-red-700 rounded-md"
                        onClick={handleClearCart}
                    >
                        Clear Cart
                    </button>
                    <div className="flex flex-wrap gap-4">
                        {cartItems.map(item => (
                            <FoodItem key={item.id} {...item} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
