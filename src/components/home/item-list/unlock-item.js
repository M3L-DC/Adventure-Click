import React from 'react';

const UnlockNewItem = ({ items, money, setMoney }) => {
  let item = items.find((p) => !p.unlocked);

  const UnlockItem = () => {
    item.unlocked = true;
    setMoney(money - item.unlockedPrice);
    item = items.find((i) => !i.unlocked);
  };

  return (
    <div className="mt-5">
      <button
        disabled={money < item.unlockedPrice}
        type="button"
        className="btn btn-secondary btn-lg btn-block"
        onClick={UnlockItem}
      >
        {`Unlock new item ($${item.unlockedPrice})`}
      </button>
    </div>
  );
};

export default UnlockNewItem;
