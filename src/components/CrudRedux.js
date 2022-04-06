import React, { useEffect, useCallback, useMemo, useState } from "react";
import axios from "axios";
import {useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";

const CrudRedux = () => {

  //const [products, setProducts] = useState(null);

const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  ); 
  
  /*return (
        <div className="container">
        <div>CrudRedux </div>
        </div>
    );*/

};

export default CrudRedux;
    