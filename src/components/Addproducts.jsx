import React, { useState } from 'react';
import Loader from './Loader';
import axios from 'axios';
import './Addproducts.css';
import Footer from './Footer';

const Addproducts = () => {
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formdata = new FormData();
      formdata.append("product_name", product_name);
      formdata.append("product_description", product_description);
      formdata.append("product_cost", product_cost);
      formdata.append("product_photo", product_photo);

      const response = await axios.post(
        "https://brayemar.alwaysdata.net/api/add_product",
        formdata
      );

      setLoading(false);
      setSuccess(response.data.message);

      setProductName("");
      setProductDescription("");
      setProductCost("");
      setProductPhoto("");
      e.target.reset();

      setTimeout(() => setSuccess(""), 5000);

    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return (
    <div className="addproduct-container">
      <form className="addproduct-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Add a Game</h2>

        {loading && <Loader />}
        {success && <p className="success-text">{success}</p>}
        {error && <p className="error-text">{error}</p>}

        <input
          type="text"
          placeholder="Enter the game name"
          required
          value={product_name}
          onChange={(e) => setProductName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter the game description"
          value={product_description}
          onChange={(e) => setProductDescription(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter the price of the game"
          required
          value={product_cost}
          onChange={(e) => setProductCost(e.target.value)}
        />

        <label className="file-label">Game Photo</label>
        <input
          type="file"
          required
          accept="image/*"
          onChange={(e) => setProductPhoto(e.target.files[0])}
        />

        <button type="submit" className="submit-btn">Add Game</button>
      </form>
    </div>
  );
};

export default Addproducts;