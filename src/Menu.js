import { useState } from "react";
import Buttons from "./Buttons";
import { dataMenu } from "./dataMenu";
import MenuList from "./MenuList";

function Menu() {
  const [food, setFood] = useState(dataMenu);

  const chosenFood = (searchTerm) => {
    const newFood = dataMenu.filter(
      (element) => element.searchTerm === searchTerm
    );
    setFood(newFood);
  };

  return (
    <div className="mainMenu">
      <Buttons filterFood={chosenFood} />

      <div>
        <MenuList proFood={food} />
      </div>
    </div>
  );
}

export default Menu;
