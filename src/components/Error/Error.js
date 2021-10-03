import React from "react";
import "./error.css";

function Error({ reset }) {
  return (
    <div className="date-error">
      <h2 className="menssage">
        Hay un error, la fecha de salida no puede ser anterior a la fecha de
        entrada al hotel, por favor cambie la fecha de salida del hotel
      </h2>
      <button className="error-button" onClick={() => reset()}>
        click aquí para ingresar de nuevo los filtros de consulta
      </button>
    </div>
  );
}

export default Error;
