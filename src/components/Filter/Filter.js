import Dates from "./Dates";
import "./filters.css";

const Filter = (props) => {
  return (
    <section className="filters">
      <Dates
        userDate={props.userDate}
        setUserDate={props.setUserDate}
        setFilteredHotels={props.setFilteredHotels}
      />
      <Country country={props.country} handleCountry={props.handleCountry} />
      <Price price={props.price} handlePrice={props.handlePrice} />
      <Rooms size={props.size} handleSize={props.handleSize} />
      <button onClick={props.reset} className="reset-button">
        Reset
      </button>
    </section>
  );
};

export default Filter;

function Country(props) {
  return (
    <select
      value={props.country}
      onChange={props.handleCountry}
      className="select-country"
    >
      <option value="Todos los países"> Todos los países</option>
      <option value="Argentina">Argentina</option>
      <option value="Brasil">Brasil</option>
      <option value="Chile">Chile</option>
      <option value="Uruguay">Uruguay</option>
      {props.country}
    </select>
  );
}

function Price(props) {
  return (
    <select
      value={props.price}
      onChange={props.handlePrice}
      className="select-price"
    >
      <option value="Cualquier precio"> Cualquier precio</option>
      <option value="1">$</option>
      <option value="2">$$</option>
      <option value="3">$$$</option>
      <option value="4">$$$$</option>
    </select>
  );
}

function Rooms(props) {
  return (
    <select
      value={props.size}
      onChange={props.handleSize}
      className="select-size"
    >
      <option value="Cualquier tamaño">Cualquier tamaño</option>
      <option value="pequeño">Hotel pequeño</option>
      <option value="mediano">Hotel mediano</option>
      <option value="grande">Hotel grande</option>
    </select>
  );
}
