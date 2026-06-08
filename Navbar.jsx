function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Melo-Milo</h2>

      <ul className="nav-links">
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button className="nav-btn">
        Explore
      </button>
    </nav>
  );
}

export default Navbar;