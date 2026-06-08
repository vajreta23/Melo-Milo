import React from "react";

function Product() {
  const products = [
    {
      name: "Premium Sneakers",
      price: "₹1999",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
    {
      name: "Casual T-Shirt",
      price: "₹799",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    },
    {
      name: "Stylish Jeans",
      price: "₹2499",
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
    },
  ];

  return (
    <section className="section">
      <h2>Featured Products</h2>

      <div className="card-container">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.image} alt={item.name} />

            <div className="product-info">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Product;