function Header(){
	return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/header-logo.png" alt="logo" />
        <div>
          <h3 className="text-uppercase">REACT SNEAKERS</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="d-flex align-center mr-30">
          <img
            width={18}
            height={18}
            className="mr-10"
            src="/img/cart.svg"
            alt="cart"
          />
          <span>1205 руб.</span>
        </li>
        <li className="d-flex align-center">
          <img width={18} height={18} src="/img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}

export default Header;