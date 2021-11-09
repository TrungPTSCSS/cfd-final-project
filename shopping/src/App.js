import { BrowserRouter } from 'react-router-dom';
import { Footer, Header, HeaderTop } from './components';
import Home from './page/Home';
import { Switch, Route } from 'react-router';
import Page404 from './page/Page404';
import About from './page/About';
import Authenticate from './page/Authenticate';
import Blog from './page/Blog';
import BlogDetails from './page/BlogDetails';
import Checkout from './page/Checkout';
import ComingSoon from './page/ComingSoon';
import Contact from './page/Contact';
import Faq from './page/Faq';
import OrderComplete from './page/OrderComplete';
import Product from './page/Product';
import ShippingReturn from './page/ShippingReturn';
import Shop from './page/Shop';
import ShoppingCart from './page/ShoppingCart';
import StoreLocator from './page/StoreLocator';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderTop />
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/authenticate" component={Authenticate} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog-details" component={BlogDetails} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/coming-soon" component={ComingSoon} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={Faq} />
          <Route path="/order-complete" component={OrderComplete} />
          <Route path="/product" component={Product} />
          <Route path="/shipping-return" component={ShippingReturn} />
          <Route path="/shop/?type=:type" component={Shop} />
          <Route path="/shopping-cart" component={ShoppingCart} />
          <Route path="/store-locator" component={StoreLocator} />
          <Route component={Page404} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
