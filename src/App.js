import './App.css';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import { CartContextProvider } from "./context/cart-context";
// import Button from './components/UI/Button/Button';
// import Card from './components/UI/Card/Card';
// import CartIcon from './components/UI/CartIcon/CartIcon';

function App() {
  return (
    <CartContextProvider>
        <Header />
        <Layout />
    </CartContextProvider>
  );
}

export default App;
