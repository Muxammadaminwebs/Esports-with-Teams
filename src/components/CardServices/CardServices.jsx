import React from 'react';
import "./CardServices.css"
const CardServices = ({ CardServicesTitle, CardServicesDeck ,CardServicesImg}) => {
  return (
    <div className="cardServices d-flex">
      <div className="services-img">
        <img src={CardServicesImg} alt="img" />
      </div>
      <div className="services-body">
        <h4>{CardServicesTitle}</h4>
        <p>{CardServicesDeck}</p>
      </div>
    </div>
  );
};

export default CardServices;