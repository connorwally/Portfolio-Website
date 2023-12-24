import "../assets/css/Navbar.css";

export default function Navbar() {
  return (
    <nav className="wally-games-navbar">
      <div className="nav-left">
        <ul>
          <li>
            <img
              id="logo"
              src="./src/assets/images/logo.png"
              alt="Wally Games"
              className="logo"
            ></img>
          </li>
          <li className="logo-line">
            <hr />
          </li>
          <li>
            <h3>
              WALLY
              <br />
              GAMES
            </h3>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
          <li className="menu-item">
            <img src="./src/assets/icons/menu-selector.png" alt="Menu" className="menu" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
