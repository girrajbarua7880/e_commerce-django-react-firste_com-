// import {Link, useNavigate} from 'react-router-dom';
// import {useCart} from '../context/CartContext.jsx';
// import { clearTokens, getAccessToken } from '../utils/auth.js';

// function Navbar() {
//     const {cartItems} = useCart();
//     const navigate = useNavigate();
    
//     const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    
//     const isLoggedIn = !!getAccessToken();

//     const handleLogout = () => {
//         clearTokens();
//         navigate('/login');
//     };
//     return (
//         <nav className='bg-white shadow-md px-6 py-6 flex justify-between items-center fixed w-full top-0 z-50'>
//             <Link to='/' className='text-2xl font-bold text-gray-800'>
//              🛍️ CyberX Cart
//             </Link>

//             <div className='flex items-center gap-6'>
//                 {/* Login/SignUp or Logout */}
//                 {!isLoggedIn ? (
//                     <>
//                         <Link to='/login' className='text-gray-800 hover:text-gray-600 font-medium'>
//                             Login
//                         </Link>
//                         <Link to='/signup' className='text-gray-800 hover:text-gray-600 font-medium'>
//                             Sign Up
//                         </Link>
//                     </>
//                 ) : (
//                     <button onClick={handleLogout} className='text-gray-800 hover:text-gray-600 font-medium'>
//                         Logout
//                     </button>
//                 )}
//             </div>

//             <Link to='/cart' className='relative text-gray-800 hover:text-gray-600 font-medium'>
//                 🛒 Cart
//                 {cartCount > 0 && (
//                     <span className='absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full px-2'>
//                         {cartCount}
//                     </span>
//                 )}
//             </Link>
//         </nav>
//     )
// }

// export default Navbar;






import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { clearTokens, getAccessToken } from "../utils/auth.js";

function Navbar() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const isLoggedIn = !!getAccessToken();

  const handleLogout = () => {
    clearTokens();
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:opacity-90 transition"
        >
          🛍️ CyberX Cart
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-6">
           
          {/* Auth Buttons */}
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition"
              >
                Login
              </Link>
              
              <Link
                to="/signup"
                className="px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition shadow"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg font-medium text-red-600 hover:bg-red-50 transition"
            >
              Logout
            </button>
          )}

          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-gray-100 transition font-medium text-gray-700"
          >
            🛒
            <span>Cart</span>

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 min-w-[20px] h-5 px-1 flex items-center justify-center bg-red-500 text-white text-xs font-bold rounded-full shadow">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
