import React from "react";

function Categories() {
  const categories = [
    {
      name: "Men Fashion",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500",
    },
    {
      name: "Women Fashion",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500",
    },
    {
      name: "Accessories",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500",
    },
  ];

  return (
    <section className="section">
      <h2>Trending Categories</h2>

      <div className="card-container">
        {categories.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;