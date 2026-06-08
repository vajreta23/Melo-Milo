import React from "react";

function Review() {
  return (
    <section className="section Review">
      <h2>What Our Customers Say</h2>

      <div className="Review-container">
        <div className="Review-card">
          <h3>⭐⭐⭐⭐⭐</h3>
          <p>
            Amazing quality products and super fast delivery.
          </p>
          <span>- Priya</span>
        </div>

        <div className="Review-card">
          <h3>⭐⭐⭐⭐⭐</h3>
          <p>
            The best fashion shopping experience I've had.
          </p>
          <span>- Rahul</span>
        </div>

        <div className="Review-card">
          <h3>⭐⭐⭐⭐⭐</h3>
          <p>
            Stylish collection and affordable prices.
          </p>
          <span>- Ananya</span>
        </div>
      </div>
    </section>
  );
}

export default Review;