import { faHouse, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FilterBar } from "../filter/FilterBar";
import style from "./Hero.module.scss";

type HeroProps = {
  onNavigate: (section: "catalog") => void;
};

export const Hero = ({ onNavigate }: HeroProps) => {
  return (
    <section className={style.hero_section}>
      <div className={style.overlay} />
      <div className={style.hero_content}>
        <div className={style.hero_grid}>
          <div className={style.grid_main}>
            <h1>Residencias</h1>
            <h1 data-color="gold">que definen un estilo de vida</h1>
            <p>
              Una selección curada de casas, departamentos y penthouses en las
              colonias más exclusivas de la capital.
            </p>
            <div>
              <button onClick={() => onNavigate("catalog")}>
                Ver propiedades
              </button>
            </div>
          </div>
          <div className={style.grid_services}>
            <div className={style.grid_card}>
              <div className={style.card_header}>
                <span>
                  <FontAwesomeIcon icon={faHouse} />
                </span>
                <h1>Propiedades</h1>
              </div>
              <p>6 casas | 6 departamentos | 6 penthouses</p>
            </div>
            <div className={style.grid_card}>
              <div className={style.card_header}>
                <span>
                  <FontAwesomeIcon icon={faKey} />
                </span>
                <h1>Venta y Renta</h1>
              </div>
              <p>Propiedades de lujo en renta</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.filter_wrapper}>
        <FilterBar onNavigate={onNavigate} />
      </div>
    </section>
  );
};
