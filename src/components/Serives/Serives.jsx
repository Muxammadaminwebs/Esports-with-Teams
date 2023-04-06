import React from 'react';
import "./Services.css"
import servicesrasm1 from "../../images/iconcha1.svg" 
import servicesrasm2 from "../../images/iconcha2.svg" 
import servicesrasm3 from "../../images/iconcha3.svg" 
import servicesrasm4 from "../../images/iconcha4.svg"; 
import CardServices from '../CardServices/CardServices';
const Serives = () => {
    return (
      <>
        <section>
          <div className="container">
            <div className="wrapperServices">
              <CardServices
                CardServicesImg={servicesrasm1}
                CardServicesTitle="Tournament Esports"
                CardServicesDeck="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              />
              <CardServices
                CardServicesImg={servicesrasm2}
                CardServicesTitle="Serives"
                CardServicesDeck="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              />
              <CardServices
                CardServicesImg={servicesrasm3}
                CardServicesTitle="Prize pool"
                CardServicesDeck="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              />
              <CardServices
                CardServicesImg={servicesrasm4}
                CardServicesTitle="Events"
                CardServicesDeck="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              />
            </div>
          </div>
        </section>
      </>
    );
};

export default Serives;