import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';
import './Getproducts.css'; // We'll create a CSS file for styling

const GetProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const img_url = "https://brayemar.alwaysdata.net/static/images/";

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://brayemar.alwaysdata.net/api/get_products");
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products-page">
      <h2 className="page-title">Available Games</h2>

      {loading && <Loader />}
      {error && <p className="error-text">{error}</p>}

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card card" key={product.id}>
            <img
              src={img_url + product.product_photo}
              alt={product.product_name}
              className="product-image"
            />
            <div className="product-info">
              <h3 className="product-title">{product.product_name}</h3>
              <p className="product-desc">{product.product_description.slice(0, 60)}...</p>
              <p className="product-price">Ksh {product.product_cost}</p>
              <button
                className="buy-btn"
                onClick={() => navigate("/makepayment", { state: { product } })}
              >
                Purchase Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetProducts;