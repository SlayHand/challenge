import Button from "./UI/Button";

const Header = () => {
    return (
      <header id="main-header">
        <div id="title">
          <img src="/assets/logo.jpg" alt="Logo" />
          <h1>React Food Order App</h1>
        </div>
        <nav>
        <Button textOnly onClick={() => console.log('Cart clicked')}>Cart (0)</Button>
        </nav>
      </header>
    );
  };
  
  export default Header;
  