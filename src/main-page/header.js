import logo from "./GloboLogo.png";

// Below is an arrow function component
// To return a function component it must have a root note (Header)
const Header = ({ subtitle }) => (
  <header className="row">
    <div className="col-md-5">
      <img src={logo} className="logo" alt="logo" />
    </div>
    <div className="col-md-7 mt-5 subtitle">{subtitle}</div>
  </header>
);

export default Header;
