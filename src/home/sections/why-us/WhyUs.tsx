import {
    faHandshake,
    faHeadset,
    faMapLocationDot,
    faMedal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./WhyUs.module.scss";

const reasons = [
  {
    icon: faHandshake,
    title: "Trato personalizado",
    desc: "Cada cliente es único. Te acompañamos en cada paso del proceso de compra o renta.",
  },
  {
    icon: faMedal,
    title: "Experiencia comprobada",
    desc: "Más de 15 años posicionando a familias y empresas en las mejores zonas de CDMX.",
  },
  {
    icon: faMapLocationDot,
    title: "Conocimiento local",
    desc: "Especialistas en el mercado inmobiliario de Ciudad de México y su zona metropolitana.",
  },
  {
    icon: faHeadset,
    title: "Asesoría 24/7",
    desc: "Estamos disponibles cuando nos necesitas. Tu tranquilidad es nuestra prioridad.",
  },
];

export const WhyUs = () => {
  return (
    <section className={style.whyus_section}>
      <div className={style.whyus_container}>
        <div className={style.whyus_wrapper}>
          <div className={style.whyus_header}>
            <h2>¿Por qué elegir Altura Realty?</h2>
            <p>
              Más de una década conectando personas con el hogar de sus sueños
            </p>
          </div>
          <div className={style.whyus_grid}>
            {reasons.map((item) => (
              <div className={style.whyus_card} key={item.title}>
                <span>
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
