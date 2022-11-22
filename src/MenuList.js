function MenuList ({proFood}) {
    return(

        <div className="products">

            {proFood.map((element) => {
                const {name, image, price} = element;
                return(
                    <div className="productCard">
                        <img className="productImage" src={image} alt="food" />
                        <div className="productName"><p>{name}</p>
                        <p className="price">{price}</p>
                        </div>
                    </div>
                )
            })}


        </div>
    )
}

export default MenuList;