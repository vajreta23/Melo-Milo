import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Style That Speaks For You</h1>

        <p>
          Discover the latest fashion trends and premium
          collections only at Melo-Milo.
        </p>

        <button>Shop Now</button>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900"
          alt="Fashion"
        />
      </div>
    </section>
  );
}

export default Hero;