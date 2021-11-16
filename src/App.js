import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './App/Layouts/Footer/Footer';
import Navbar from './App/Layouts/Navbar/Navbar';
import HomePage from './App/Pages/HomePage/HomePage';
import LoginScreen from './App/Pages/LoginScreen/LoginScreen';
import ProductDetailedPage from './App/Pages/ProductDetailedPage/ProductDetailedPage';
import RegisterPage from './App/Pages/ RegisterPage/RegisterPage';
import ProfilePage from './App/Pages/ProfilePage/ProfilePage';
import PlaceOrderPage from './App/Pages/PlaceOrderPage/PlaceOrderPage';
import OrderPage from './App/Pages/OrderPage/OrderPage';
function App() {
  return (
    <div>
      {/* <ResponsiveHeader/> */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search/:keyword" component={HomePage} />
        <Route path="/page/:pageNumber" component={HomePage} />
        <Route path="/search/:keyword/page/:pageNumber" component={HomePage} />

        <Route path="/placeOrder" component={PlaceOrderPage} />
        <Route path="/orders/:id" component={OrderPage} />
        <Route path="/product/:id" component={ProductDetailedPage} />
        <Route path="/cart/:id?" component={CartPage} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
