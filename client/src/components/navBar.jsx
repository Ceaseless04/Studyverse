function Navbar(prop){
    <nav className={prop.position}>
      <div className="logo">
        <img src={logo} alt="logo" id="logo" />
        <img id="letters" src={letters} />
      </div>

      <ul>
        <li>
          <Link to="/Home" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Name" className="link">
            Resources
          </Link>
        </li>
        <li>
          <Link to="/Jobs" className="link">
            Jobs
          </Link>
        </li>
        <li>
          <Link to="/About" className="link">
            About
          </Link>
        </li>
        <li>
          <Link to="/Login" className="link">
            Sign In
          </Link>
        </li>
      </ul>
    </nav>
}
