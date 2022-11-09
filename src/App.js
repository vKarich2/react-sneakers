import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";


function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://636bf0faad62451f9fbfde01.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);


  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onCloseCart={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40 ml-15 mr-15">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex align-center">
            <img width={14} height={14} src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="cards">
          {items.map((obj) => (
            <Card
              title={obj.name}
              price={obj.price}
              imgUrl={obj.imgUrl}
              onClickPlus={() => console.log("Click on plus")}
              onClickFav={() => console.log("Add to favourites")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
