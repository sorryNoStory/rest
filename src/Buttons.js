function Buttons({filterFood}) {
    return(
        <div className="menuFilter">
                <button className="btnMenu" onClick={() => filterFood("Pasta")}>Pasta</button>
                <button className="btnMenu" onClick={() => filterFood("Pizza")} >Pizza</button>
                <button className="btnMenu" onClick={() => filterFood("Oysters")}>Oysters</button>
                <button className="btnMenu" onClick={() => filterFood("Entree")}>Entree</button>
            </div>
    )
}

export default Buttons;