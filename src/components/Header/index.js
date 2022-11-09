import styles from './Header.module.scss'

function Header(props){
	return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img
          className={styles.headerLogo}
          width={40}
          height={40}
          src="/img/header-logo.png"
          alt="logo"
        />
        <div>
          <h3 className={styles.headerName}>REACT SNEAKERS</h3>
          <p className={styles.headerParagraph}>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li
          className="d-flex align-center mr-30 cu-p"
          onClick={props.onClickCart}
        >
          <img
            width={18}
            height={18}
            className="mr-10"
            src="/img/cart.svg"
            alt="cart"
          />
          <span className={styles.headerPrice}>1205 руб.</span>
        </li>
        <li className="d-flex align-center mr-30">
          <img width={18} height={18} src="/img/fav.svg" alt="favourites" />
        </li>
        <li className="d-flex align-center mr-30">
          <img width={18} height={18} src="/img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}

export default Header;