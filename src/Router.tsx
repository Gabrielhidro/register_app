import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";
import Supplier from "./pages/supplier";
import DefaultLayout from "./layouts/DefaultLayout";
import { SupplierProfile } from "./pages/SupplierProfile";
import { ProductDetails } from "./pages/ProductDetails";

export default function Router() {
    return (
      <Routes>
        <Route path="/" element={<DefaultLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/supplier" element={<Supplier />} />
          <Route path="/product/:nome" element={<ProductDetails />} />
          <Route path="/supplier/:nome" element={<SupplierProfile />} />
        </Route>
      </Routes>
      )
}