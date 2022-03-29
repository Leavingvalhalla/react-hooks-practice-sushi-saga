import React from 'react';
import MoreButton from './MoreButton';
import Sushi from './Sushi';

function SushiContainer({
  sushiList,
  moneyLeft,
  setMoneyLeft,
  onMoreSushi,
  onEatSushi,
}) {
  return (
    <div className="belt">
      {sushiList
        ? sushiList.map((sushi) => (
            <Sushi
              key={sushi.id}
              moneyLeft={moneyLeft}
              setMoneyLeft={setMoneyLeft}
              info={sushi}
              onEatSushi={onEatSushi}
            />
          ))
        : null}
      <MoreButton onMoreSushi={onMoreSushi} />
    </div>
  );
}

export default SushiContainer;
