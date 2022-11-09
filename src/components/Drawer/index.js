import styles from './Drawer.module.scss'

function Drawer(props){
  

	return (
    <div className={styles.drawerOverlay}>
      <div className={styles.drawer}>
        <div className={styles.scrolling}>
          <h2 className={styles.cartUp}>
            Корзина{" "}
            <img
              className={styles.cartUp}
              src="/img/btn-remove.svg"
              onClick={props.onCloseCart}
              alt="Remove"
            />
          </h2>
          <div className={styles.items}>
            <div className={styles.cartItem}>
              <div
                style={{ backgroundImage: "url(/img/sneakers/2.jpg)" }}
                className={styles.cartItemImg}
              ></div>

              <div className={styles.cartItemText}>
                <p className={styles.cartItemParagraph}>
                  Мужские Кроссовки Nike Air Max 270
                </p>
                <b className={styles.cartItemPrice}>12 999 руб.</b>
              </div>
              <img
                className={styles.removeBtn}
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>

            <div className={styles.cartItem}>
              <div
                style={{ backgroundImage: "url(/img/sneakers/2.jpg)" }}
                className={styles.cartItemImg}
              ></div>

              <div className={styles.cartItemText}>
                <p className={styles.cartItemParagraph}>
                  Мужские Кроссовки Nike Air Max 270
                </p>
                <b className={styles.cartItemPrice}>12 999 руб.</b>
              </div>
              <img
                className={styles.removeBtn}
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
          </div>
        </div>
        <div className={styles.cartTotalBlock}>
          <ul className={styles.cartTotalUl}>
            <li className={styles.cartTotalLi}>
              <span>Итого:</span>
              <div className={styles.dots}></div>
              <b className={styles.cartTotalPrice}>21 498 руб.</b>
            </li>
            <li className={styles.cartTotalLi}>
              <span>Налог 5%:</span>
              <div className={styles.dots}></div>
              <b className={styles.cartTotalPrice}>1074 руб.</b>
            </li>
          </ul>
          <button className={styles.greenButton}>
            Оформить заказ
            <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;