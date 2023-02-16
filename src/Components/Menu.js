import { useState } from "react";
import Buttons from "./Buttons";
import { dataMenu } from "../dataMenu";
import MenuList from "./MenuList";

function Menu() {
  const [food, setFood] = useState(dataMenu);
  const [activeTab, setActiveTab] = useState(0);

  const chosenFood = (searchTerm) => {
    const newFood = dataMenu.filter(
      (element) => element.searchTerm.includes(searchTerm)
    );
    setFood(newFood);
  };

  return (
    <div className="mainMenu">
      <Buttons
        filterFood={chosenFood}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div>
        <MenuList proFood={food} />
      </div>
    </div>
  );
}



export default Menu;
