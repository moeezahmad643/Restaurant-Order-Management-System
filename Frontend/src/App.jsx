import { useEffect, useState } from "react";
import "./App.css";
import MenuItems from "./components/menuitems/menuItems";
import axios from "axios";
import { useParams } from "react-router";
// const link = "http://localhost:3000";
const link = "https://restaurant-order-management-system-mu.vercel.app";

function App() {
  const { "*": wildcardValue } = useParams(); // Get the value of *
  console.log(wildcardValue);

  const [quantity, setQuantity] = useState(1);

  const [items, setItems] = useState([]);
  const [fname, setFname] = useState("Loading....");
  const [price, setPrice] = useState("Loading....");
  const [img, setImg] = useState(
    "https://blog.teamtreehouse.com/wp-content/uploads/2015/05/InternetSlowdown_Day.gif"
  );

  const [showingPopUp, setShowingPopUp] = useState(false);

  const showPopUp = (detailsArray) => {
    setFname(detailsArray[0]);
    setPrice(detailsArray[1]);
    setImg(detailsArray[2]);
    setShowingPopUp(true);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    if (quantity != 1) {
      setQuantity(quantity - 1);
    }
  };

  const addOrder = () => {
    axios
      .post(`${link}/addOrder`, {
        fname: fname,
        quantity: quantity,
        price: price,
        tPrice: price * quantity,
        tableNo: wildcardValue,
        time: Date.now(),
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error adding order:", err);
      });
  };

  useEffect(() => {
    axios
      .get(`${link}/getFood`)
      .then((res) => {
        setItems(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []); // Dependency array added to avoid unnecessary API calls

  return (
    <main>
      {items.map((element, index) => (
        <MenuItems
          key={index} // Added key prop for list rendering optimization
          fname={element.fname}
          fprice={element.price}
          fimage={element.foodImg}
          handlePopup={showPopUp}
        />
      ))}

      {/* Conditionally rendering popup */}
      {showingPopUp && (
        <div className="popUpElement">
          <div className="crossicon" onClick={() => setShowingPopUp(false)}>
            X
          </div>

          <div className="card">
            <img src={img} alt="Food Item" />
            <section>
              <div>
                <h3>{fname}</h3>
                <p>Price per Piece {price}</p>
              </div>
              <div>
                <span>
                  <span className="icon" onClick={handleIncrement}>
                    +
                  </span>
                  <p>{quantity}</p>
                  <span className="icon" onClick={handleDecrement}>
                    -
                  </span>
                </span>
                <h5>Total: {price * quantity}Rs</h5>
              </div>
            </section>
            <button onClick={addOrder}>
              Order {fname} {quantity}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
