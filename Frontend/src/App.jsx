import { useEffect, useState } from "react";
import "./App.css";
import MenuItems from "./components/menuitems/menuItems";
import axios from "axios";

function App() {
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

  useEffect(() => {
    axios
      .get("http://localhost:3000/getFood")
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
                  <span className="icon">+</span>
                  <p>1</p>
                  <span className="icon">-</span>
                </span>
                <h3>500Rs</h3>
              </div>
            </section>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
