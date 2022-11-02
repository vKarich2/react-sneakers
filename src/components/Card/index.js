import styles from './Card.module.scss'

function Card(props){
  const onClickPlusButton = () => {
    alert(props.title);
  }

  return (
    <div className={styles.card}>
      <div className={styles.favourite}>
        <img src="/img/btn-like.svg" alt="Like" />
      </div>
      <img width={133} height={112} src={props.imgUrl} alt="sneakers" />
      <h5 className={styles.cardTitle}>{props.title}</h5>
      <div className={styles.cardDown}>
        <div className={styles.cardPrice}>
          <span className={styles.sneakersPriceName}>Цена:</span>
          <b className={styles.sneakersPrice}>{props.price}</b>
        </div>
        <button className={styles.btn} onClick={onClickPlusButton}>
          <img width={11} height={11} src="/img/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;