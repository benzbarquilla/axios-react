import React from "react";
import { useProducts } from "../hooks/useProducts";

const ProductsPage = () => {
  const { products, loading, error } = useProducts();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      {error !== "" && error}
      <h1>Fetch Product List from API</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td>Loading products.....</td>
            </tr>
          )}
          {error && (
            <tr>
              <td>{error}</td>
            </tr>
          )}
          {!loading &&
            !error &&
            products.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.title}</td>
                <td>{prod.description}</td>
                <td>{prod.price}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsPage;
