import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
    faBed,
    faCar,
    faLocationDot,
    faPhone,
    faShower,
    faStairs,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { usePropertyStore } from "../../api/store";
import style from "./PropertyDetail.module.scss";

export const PropertyDetail = () => {
  const { propertySlug } = useParams();
  const { findProperty, property } = usePropertyStore();
  console.log(property);
  useEffect(() => {
    if (propertySlug) findProperty(propertySlug);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [findProperty, propertySlug]);

  return (
    <>
      <section className={style.p_detail_section}>
        <div className={style.p_detail_container}>
          <div className={style.p_detail_wrapper}>
            <div className={style.p_detail_content}>
              <div className={style.p_detail_header}>
                <span><Link to={"/"}>{`Inicio > `}</Link>{`propiedades > ${property?.slug}`}</span>
                <h2>{property?.title}</h2>
                <div className={style.header_location}>
                  <span>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                  <p>{property?.location.colony}</p>
                </div>
              </div>
              <div className={style.p_detail_image}>
                <img src={property?.image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.p_detail_section_2}>
        <div className={style.p_detail_container_2}>
          <div className={style.p_detail_wrapper_2}>
            <div className={style.p_detail_content}>
              <div className={style.p_detail_grid}>
                <div className={style.p_description}>
                  <h4>Descripción</h4>
                  <p>{property?.description}</p>
                  <div className={style.top_border}></div>
                  <div className={style.p_specs}>
                    <ul>
                      <li>
                        <span>
                          <FontAwesomeIcon icon={faBed} />
                        </span>
                        {property?.specs.bedrooms} habitaciones
                      </li>
                      <li>
                        <span>
                          <FontAwesomeIcon icon={faShower} />
                        </span>
                        {property?.specs.bathrooms} baños
                      </li>
                      <li>
                        <span>
                          <FontAwesomeIcon icon={faCar} />
                        </span>
                        {property?.specs.parkingSpots} cajones
                      </li>
                      <li>
                        <span>
                          <FontAwesomeIcon icon={faStairs} />
                        </span>
                        {property?.specs.floors} pisos
                      </li>
                    </ul>
                  </div>
                  <div className={style.top_border}></div>
                  <div className={style.amenities}>
                    <div>
                      <h5>Amenidades</h5>
                      <ul>
                        {property?.amenities.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5>Ubicación</h5>
                      <ul>
                        <li>
                          <strong>Estado: </strong>
                          {property?.location.city}
                        </li>
                        <li>
                          <strong>Alcaldía: </strong>{" "}
                          {property?.location.borough}
                        </li>
                        <li>
                          <strong>Colonia: </strong> {property?.location.colony}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={style.action_box}>
                  <div className={style.price_detail}>
                    <h4>
                      {property?.price.toLocaleString("es-MX", {
                        style: "currency",
                        currency: "MXN",
                        maximumFractionDigits: 0,
                      })}
                    </h4>
                    <p>{`${property?.type} en ${property?.status}`}</p>
                  </div>
                  <div className={style.buttons}>
                    <button data-color="whats">
                      <span>
                        <FontAwesomeIcon icon={faWhatsapp} />
                      </span>
                      WhatsApp
                    </button>
                    <button data-color="call">
                      <span>
                        <FontAwesomeIcon icon={faPhone} />
                      </span>
                      Llamar Ahora
                    </button>
                  </div>
                  <div className={style.top_border}></div>
                  <div className={style.contact_form}>
                    <h4>Enviar mensaje</h4>
                    <div className={style.form_group}>
                      <label>Nombre</label>
                      <input type="text" placeholder="Tu nombre completo" />
                    </div>
                    <div className={style.form_group}>
                      <label>Teléfono</label>
                      <input type="tel" placeholder="55 0000 0000" />
                    </div>
                    <div className={style.form_group}>
                      <label>Mensaje</label>
                      <textarea
                        rows={4}
                        placeholder="Me interesa esta propiedad..."
                      />
                    </div>
                    <div className={style.top_border}></div>
                    <button className={style.submit_btn}>Enviar mensaje</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
