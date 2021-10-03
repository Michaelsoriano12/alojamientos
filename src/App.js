import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { hotelsData } from "./components/hotel/data.js";
import Header from "./components/header/Header.js";
import Filter from "./components/Filter/Filter.js";
import ShowHotels from "./components/hotel/showHotels.js";
import Error from "./components/Error/Error";

function App() {
  const [hotels, setHotels] = useState(hotelsData);
  const [userDate, setUserDate] = useState({
    from: "",
    to: "",
  });

  const [filteredHotels, setFilteredHotels] = useState(hotels);
  const [country, setCountry] = useState("Todos los países");
  const [price, setPrice] = useState("Cualquier precio");
  const [size, setSize] = useState("Cualquier tamaño");
  const [error, setError] = useState(false);
  const tempFilterHotels = useRef();

  function transformDate(date) {
    // Transforma una fecha a las 0 horas de esa fecha
    const f = new Date(date).toLocaleDateString();
    const f1 = f.split("/");
    const myDate = new Date(f1[2], f1[1] - 1, f1[0]);
    return myDate.valueOf();
  }
  const filterHotels = () => {
    let newFilterHotels = [...hotels];

    if (userDate.from !== "" && userDate.to !== "") {
      newFilterHotels = hotels.filter((hotel) => {
        const hotelFrom =
          userDate.from.valueOf() >= transformDate(hotel.availabilityFrom);
        const hotelTo = userDate.to.valueOf() <= hotel.availabilityTo;
        return hotelFrom && hotelTo;
      });
    }

    if (country !== "Todos los países") {
      newFilterHotels = newFilterHotels.filter((hotel) => {
        const selection = hotel.country === country ? true : false;
        return selection;
      });
    }
    if (price !== "Cualquier precio") {
      newFilterHotels = newFilterHotels.filter((hotel) => {
        const selection = hotel.price === parseInt(price) ? true : false;
        return selection;
      });
    }

    if (size !== "Cualquier tamaño") {
      newFilterHotels = newFilterHotels.filter((hotel) => {
        const selection =
          size === "pequeño"
            ? hotel.rooms <= 10
            : size === "mediano"
            ? hotel.rooms > 10 && hotel.rooms <= 20
            : hotel.rooms > 20;
        return selection;
      });
    }
    setFilteredHotels(newFilterHotels);
  };

  tempFilterHotels.current = filterHotels;

  const handleCountry = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
  };
  const handlePrice = (e) => {
    const selectedPrice = e.target.value;
    setPrice(selectedPrice);
  };

  const handleSize = (e) => {
    const selectedSize = e.target.value;
    setSize(selectedSize);
  };

  const reset = () => {
    const userDateEmpty = {
      from: "",
      to: "",
    };
    setUserDate(userDateEmpty);
    setCountry("Todos los países");
    setPrice("Cualquier precio");
    setSize("Cualquier tamaño");
  };

  useEffect(() => {
    if (
      typeof userDate.to === "object" &&
      userDate.to.valueOf() < userDate.from.valueOf()
    ) {
      setError(true);
    } else {
      setError(false);
    }
    tempFilterHotels.current();
  }, [userDate.to, userDate.from, country, price, size]);

  return (
    <div className="pageBody">
      <Header userDate={userDate} country={country} price={price} size={size} />
      <Filter
        userDate={userDate}
        setUserDate={setUserDate}
        setFilteredHotels={setFilteredHotels}
        country={country}
        handleCountry={handleCountry}
        setCountry={setCountry}
        price={price}
        handlePrice={handlePrice}
        size={size}
        handleSize={handleSize}
        reset={reset}
      />
      {error ? <Error reset={reset} /> : null}
      <section className="hotelsList">
        {filteredHotels.length !== 0 && !error ? (
          <ShowHotels
            hotels={hotels}
            setHotels={setHotels}
            userDate={userDate}
            setUserDate={setUserDate}
            filteredHotels={filteredHotels}
          />
        ) : (
          <h1>No se encontraron coincidencias </h1>
        )}
      </section>
    </div>
  );
}

export default App;
