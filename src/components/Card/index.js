import React from 'react';
import styles from './Card.module.scss'

function Card(props){
  const [isAdded, setIsAdded] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);

  const handleClickPlus = () => {
    setIsAdded(!isAdded);
  };

  const handleClickFav = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favourite}>
        <img
          src={isLiked ? "/img/btn-like-active.svg" : "/img/btn-like.svg"}
          onClick={handleClickFav}
          alt="Like"
        />
      </div>
      <img width={133} height={112} src={props.imgUrl} alt="sneakers" />
      <h5 className={styles.cardTitle}>{props.title}</h5>
      <div className={styles.cardDown}>
        <div className={styles.cardPrice}>
          <span className={styles.sneakersPriceName}>Цена:</span>
          <b className={styles.sneakersPrice}>{props.price}</b>
        </div>
        <img
          className={styles.plus}
          src={isAdded ? "/img/btn-plus-active.svg" : "/img/btn-plus.svg"}
          onClick={handleClickPlus}
          alt="plus"
        />
      </div>
    </div>
  );
}

export default Card;