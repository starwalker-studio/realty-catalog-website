import {
  faBed,
  faCar,
  faHouseCircleXmark,
  faShower,
  faVectorPolygon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import type { Property } from "../../../../../ts/propiedades.interface";
import style from "./Card.module.scss";

type CardProps = {
  properties: Property[];
};

export const Card = ({ properties }: CardProps) => {
  return (
    <>
      {properties.length === 0 ? (
        <div className={style.no_property}>
          <span>
            <FontAwesomeIcon icon={faHouseCircleXmark} />
          </span>
          <h2>Sin resultados</h2>
        </div>
      ) : (
        <div className={style.catalog_grid}>
          {properties.map((item) => (
            <Link to={`/propiedades/detalle/${item.slug}`} key={item.id}>
              <div className={style.catalog_card}>
                <img src={item.image} alt="" />
                <div className={style.card_description}>
                  <div className={style.card_price}>
                    <p data-color="price">
                      {item?.price.toLocaleString("es-MX", {
                        style: "currency",
                        currency: "MXN",
                        maximumFractionDigits: 0,
                      })}
                    </p>
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
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
