import React from "react";
import ProductGrid from './ProductGrid.js';
import ProductViewLabel from './ProductViewLabel.js'
import ProductFilterHeader from './ProductFilterHeader.js'
import useGetCards from '../Hooks/useGetCards.js';
import ProductFilter from './ProductFilter.js'
import '../Styles/GridStyles.css'
import '../Hooks/useGetCards.js'
import '../Styles/ProductViewPageStyles.css'
import SiteHeader from "./SiteHeader.js";
import SiteFooter from "./SiteFooter.js";

export default function ProductViewPage() {
  let products = useGetCards();  
  window.scrollTo({top: 0, left: 0, behavior: "instant"})
  return (
      <div>
      <SiteHeader />
      <ProductViewLabel/>
      <ProductFilterHeader/>
        <div className="product-viewpage-body">
          <ProductFilter/>
          <ProductGrid products={products}/>
        </div>
        <SiteFooter />
      </div>
    );
  }
  