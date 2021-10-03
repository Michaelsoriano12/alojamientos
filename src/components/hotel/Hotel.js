import "./hotelStyle.css";
import location from "./images/location.jpg";
import rooms from "./images/rooms.jpg";
import price1 from "./images/price1.jpg";
import price2 from "./images/price2.jpg";
import price3 from "./images/price3.jpg";
import price4 from "./images/price4.jpg";

const location1 = location;
export default function Hotels(props) {
  return (
    <div className="hotel-presentation">
      <img src={props.photo} alt="La Bamba de Areco" className="image"></img>
      <div className="information">
        <h1 className="title">{props.name}</h1>
        <p>{props.description}</p>
        <div className="location-description">
          <img src={location1} alt="location" className="location-icon"></img>
          <span className="location">{`${props.city}, ${props.country}`}</span>
        </div>
        <div className="room-price">
          <img src={rooms} alt="rooms" className="rooms-icon"></img>
          <span className="rooms">{props.rooms} Habitaciones</span>
          <img
            src={`${
              props.price === 1
                ? price1
                : props.price === 2
                ? price2
                : props.price === 3
                ? price3
                : price4
            }`}
            alt="price"
            className="cost"
          ></img>
        </div>
      </div>
      <button className="button" type="button">
        Reservar
      </button>
    </div>
  );
}
