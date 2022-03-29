import React, { useState } from 'react';

function Sushi({ info, moneyLeft, setMoneyLeft, onEatSushi }) {
  const [isEaten, setIsEaten] = useState(false);

  function handleEat() {
    if (moneyLeft < info.price) {
      console.log("You can't afford that!");
    } else {
      setIsEaten((isEaten) => !isEaten);
      onEatSushi(info.price);
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEat}>
        {isEaten ? null : (
          <img src={info.img_url} alt={info.name} width="100%" />
        )}
      </div>
      <h4 className="sushi-details">
        {info.name} - {info.price}
      </h4>
    </div>
  );
}

export default Sushi;
