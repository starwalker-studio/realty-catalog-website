import {
    faBed,
    faCar,
    faShower,
    faVectorPolygon
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { properties } from "../../../ts/propiedades";
import style from "./Catalog.module.scss";

export const Catalog = () => {
  return (
    <section className={style.catalog_section}>
      <div className={style.catalog_container}>
        <div className={style.catalog_wrapper}>
          <div className={style.catalog_content}>
            <div className={style.catalog_header}>
              <h2>Propiedades Destacadas</h2>
              <p>Conoce las mejores propiedades que tenemos para ti</p>
            </div>
            <div className={style.catalog_grid}>
              {properties.map((item) => (
                <div className={style.catalog_card} key={item.id}>
                  <img src={item.image} alt="" />
                  <div className={style.card_description}>
                    <div className={style.card_price}>
                      <p data-color="price">${item.price}</p>
                      <p>{item.status}</p>
                    </div>
                    <div className={style.card_title}>
                      <h3>{item.title}</h3>
                    </div>
                    <div className={style.card_desc}>
                      <p>{item.description}</p>
                    </div>
                    <div className={style.card_specs}>
                      <ul>
                        <li>
                          <span>
                            <FontAwesomeIcon icon={faBed} />
                          </span>
                          {item.specs.bedrooms}
                           <p>Hab.</p>
                        </li>
                        <li>
                          <span>
                            <FontAwesomeIcon icon={faShower} />
                          </span>
                          {item.specs.bathrooms}
                           <p>Baños</p>
                        </li>
                        <li>
                          <span>
                            <FontAwesomeIcon icon={faCar} />
                          </span>
                          {item.specs.parkingSpots}
                           <p>Cajones</p>
                        </li>
                        <li>
                          <span>
                            <FontAwesomeIcon icon={faVectorPolygon} />
                          </span>
                          {item.specs.squareMetersBuilt}
                           <p>m²</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
