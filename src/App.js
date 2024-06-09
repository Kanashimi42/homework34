import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Nav } from './components/Nav';
import { Index } from './components/Index';
import { NewProducts } from './components/NewProducts';
import { ProductInStock } from './components/ProductInStock';
import { DeliveryAndPayment } from './components/DeliveryAndPayment';
import { Forums } from './components/Forums';
import { AboutUs } from './components/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav/>}>
          <Route index element={<Index/>}/>
          <Route path="newProducts" element={<NewProducts/>} />
          <Route path="productInStock" element={<ProductInStock/>}/>
          <Route path="deliveryAndPayment" element={<DeliveryAndPayment/>}/>
          <Route path="forums" element={<Forums/>}/>
          <Route path="aboutUs" element={<AboutUs/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
