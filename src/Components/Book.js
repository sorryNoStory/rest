import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { motion } from 'framer-motion';

function Book() {
  function Alert() {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: "Looking forward",
      text: "To book a table please contact us by + 1 (217) 253-2565",
      imageUrl:
        "https://images.unsplash.com/photo-1599458252573-56ae36120de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  }

  return (
    <motion.button 
    initial={{ y: -15, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={
        {
          duration: 2,
          delay: 0.5
        }
      }
    className="btn" onClick={Alert}>
      Book now →
    </motion.button>
  );
}

export default Book;
