import { motion } from 'framer-motion';

function MenuList({ proFood }) {
    return (
      <div className="products">
        {proFood.map((element) => {
          const { name, image, price } = element;
          return (
            <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, duration: 2 }}
            className="productCard">
              <img className="productImage" src={image} alt="food" />
              <div className="productName">
                <p>{name}</p>
                <p className="price">{price}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    );
  }
  
  export default MenuList;
  