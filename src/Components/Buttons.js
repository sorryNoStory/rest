function Buttons({ filterFood, activeTab, setActiveTab }) {
    return (
      <div className="menuFilter">
       <button
  className={`btnMenu ${activeTab === 0 ? "active" : ""}`}
  onClick={() => {
    setActiveTab(0);
    filterFood("All");
  }}
>
  All
</button>
<button
  className={`btnMenu ${activeTab === 1 ? "active" : ""}`}
  onClick={() => {
    setActiveTab(1);
    filterFood("Pasta");
  }}
>
  Pasta
</button>
<button
  className={`btnMenu ${activeTab === 2 ? "active" : ""}`}
  onClick={() => {
    setActiveTab(2);
    filterFood("Pizza");
  }}
>
  Pizza
</button>
<button
  className={`btnMenu ${activeTab === 3 ? "active" : ""}`}
  onClick={() => {
    setActiveTab(3);
    filterFood("Oysters");
  }}
>
  Oysters
</button>
<button
  className={`btnMenu ${activeTab === 4 ? "active" : ""}`}
  onClick={() => {
    setActiveTab(4);
    filterFood("Entree");
  }}
>
  Entree
</button>
      </div>
    );
  }
  

export default Buttons;