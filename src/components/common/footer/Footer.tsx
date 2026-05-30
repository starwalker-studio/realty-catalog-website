import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Footer.module.scss";

const footerLinks = {
  propiedades: [
    "Casas en venta",
    "Departamentos en renta",
    "Penthouses",
    "Propiedades destacadas",
  ],
  empresa: [
    "Quiénes somos",
    "Nuestro equipo",
    "Trabaja con nosotros",
    "Aviso de privacidad",
  ],
  contacto: ["55 1234 5678", "contacto@alturarealty.mx", "Polanco, CDMX"],
};

export const Footer = () => {
  return (
    <section className={style.location_section}>
      <div className={style.location_container}>
        <div className={style.location_wrapper}>
          <div className={style.location_grid}>
            <div className={style.map_block}>
              <h3>Ubicación</h3>
              <div className={style.map_placeholder}>
                <FontAwesomeIcon icon={faMapLocationDot} />
                <p>Próximamente</p>
              </div>
            </div>

            <div className={style.footer_links}>
              <div>
                <h5>Propiedades</h5>
                <ul>
                  {footerLinks.propiedades.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5>Empresa</h5>
                <ul>
                  {footerLinks.empresa.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5>Contacto</h5>
                <ul>
                  {footerLinks.contacto.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={style.copyright}>
            <p>
              © {new Date().getFullYear()} Disenmix. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
