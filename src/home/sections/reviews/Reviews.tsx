import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Reviews.module.scss";

const reviews = [
  {
    name: "Andrea Martínez",
    role: "Compradora",
    stars: 5,
    comment:
      "Excelente servicio, encontraron exactamente lo que buscaba en menos de un mes. El equipo es muy profesional y atento.",
  },
  {
    name: "Roberto Sánchez",
    role: "Arrendatario",
    stars: 5,
    comment:
      "Renté mi departamento en Roma Norte gracias a Altura Realty. El proceso fue rápido, transparente y sin complicaciones.",
  },
  {
    name: "Valentina Cruz",
    role: "Compradora",
    stars: 4,
    comment:
      "Muy buena atención y amplio catálogo de propiedades. Me asesoraron muy bien en todo momento. Lo recomiendo.",
  },
];

export const Reviews = () => {
  return (
    <section className={style.reviews_section}>
      <div className={style.reviews_container}>
        <div className={style.reviews_wrapper}>
          <div className={style.reviews_header}>
            <h2>Lo que dicen nuestros clientes</h2>
            <p>La confianza de quienes ya encontraron su hogar con nosotros</p>
          </div>
          <div className={style.reviews_grid}>
            {reviews.map((item) => (
              <div className={style.review_card} key={item.name}>
                <div className={style.stars}>
                  {Array.from({ length: item.stars }, (_, i) => (
                    <FontAwesomeIcon icon={faStar} key={i} />
                  ))}
                </div>
                <p className={style.comment}>"{item.comment}"</p>
                <div className={style.reviewer}>
                  <div className={style.avatar}>{item.name.charAt(0)}</div>
                  <div>
                    <p className={style.name}>{item.name}</p>
                    <p className={style.role}>{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
