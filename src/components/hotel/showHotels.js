import Hotels from "./Hotel";

const ShowHotels = (props) => {
  return props.filteredHotels.map((hotel) => (
    <Hotels
      key={hotel.id}
      photo={hotel.photo}
      name={hotel.name}
      description={hotel.description}
      city={hotel.city}
      country={hotel.country}
      rooms={hotel.rooms}
      price={hotel.price}
    />
  ));
};
export default ShowHotels;
