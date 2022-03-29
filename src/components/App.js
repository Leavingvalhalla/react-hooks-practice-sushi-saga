import React, { useState, useEffect } from 'react';
import SushiContainer from './SushiContainer';
import Table from './Table';

const API = 'http://localhost:3001/sushis';

function App() {
  const [sushiList, setSushiList] = useState([]);
  const [moneyLeft, setMoneyLeft] = useState(100);
  const [sushiToRender, setSushiToRender] = useState([]);
  const [start, setStart] = useState(4);
  const [plates, setPlates] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setSushiList(data));
  }, []);

  useEffect(() => {
    setSushiToRender(sushiList.slice(0, 4));
  }, [sushiList]);

  function onMoreSushi() {
    setStart((start) => start + 4);
    setSushiToRender(sushiList.slice(start, start + 4));
  }

  function onEatSushi(price) {
    setMoneyLeft((moneyLeft) => moneyLeft - price);
    setPlates((plates) => [...plates, price]);
  }

  return (
    <div className="app">
      <SushiContainer
        setMoneyLeft={setMoneyLeft}
        moneyLeft={moneyLeft}
        sushiList={sushiToRender}
        onMoreSushi={onMoreSushi}
        onEatSushi={onEatSushi}
      />
      <Table moneyLeft={moneyLeft} plates={plates} />
    </div>
  );
}

export default App;
