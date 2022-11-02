function Card(){
  return (
    <div className="card">
      <div className="favourite">
        <img src="/img/btn-like.svg" alt="Like" />
      </div>
      <img width={133} height={112} src="/img/sneakers/1.jpg" alt="sneakers" />
      <h5 className="mt-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center mt-15">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>12 999 руб.</b>
        </div>
        <button className="btn d-flex justify-center align-center">
          <img width={11} height={11} src="/img/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;