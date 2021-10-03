import "./headerStyle.css";

const Header = (props) => {
  return (
    <div className="header">
      <h1 className="principal-title">Hoteles </h1>
      <p className="dates">
        Busqueda para hoteles{" "}
        {props.size === "Cualquier tamaño"
          ? ""
          : props.size === "pequeño"
          ? "pequeños"
          : props.size === "mediano"
          ? "medianos"
          : "grandes"}{" "}
        {props.price === "Cualquier precio"
          ? ""
          : props.price === "1"
          ? "de precio barato"
          : props.price === "2"
          ? "de precio económico"
          : props.price === "3"
          ? "de precio costoso"
          : "de precio muy costoso"}{" "}
        {props.userDate.from
          ? changeDates(props.userDate.from)
          : " (Elegida su primer día de hospedaje)"}{" "}
        hasta el{" "}
        {props.userDate.to
          ? changeDates(props.userDate.to)
          : " (por favor defina un ultimo día de hospedaje)"}
        {props.country === "Todos los países"
          ? ""
          : props.country === "Argentina"
          ? " en Argentina."
          : props.country === "Brasil"
          ? " en Brasil."
          : props.country === "Chile"
          ? " en Chile."
          : " en Uruguay."}
      </p>
    </div>
  );
};
export default Header;

const changeDates = (date) => {
  const d = date;
  const y = date.getFullYear();
  const day = d.getDate();

  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  const days = [
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
  ];
  const monthName = months[d.getMonth()];
  const dayName = days[d.getDay()];

  return `${dayName}, ${day} de ${monthName} de ${y}`;
};
