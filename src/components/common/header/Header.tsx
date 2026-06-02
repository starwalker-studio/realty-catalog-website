import {
  faBars,
  faBriefcase,
  faBuilding,
  faHouse,
  faStar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMobileScreen } from "../../../hooks/useMobileScreen";
import style from "./Header.module.scss";

export const Header = () => {
  const { isMobileScreen, handleClick, nav_transition } = useMobileScreen();
  const isMobile = isMobileScreen();

  return (
    <>
      <div className={style.navbar}>
        <div className={style.navbar_wrapper}>
          <div className={style.nav_logo_wrapper}>
            <div className={style.logo}>
              <img src="/logo/altura-realty-logo.svg" alt="Altura Realty" />
            </div>
          </div>

          {isMobile ? (
            <div className={style.mobile_icon} onClick={handleClick}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          ) : (
            <>
              <div className={style.header_content}>
                <ul>
                  <li>Nosotros</li>
                  <li>Propiedades</li>
                  <li>Servicios</li>
                  <li>Testimonios</li>
                </ul>
              </div>
              <div className={style.button_wrapper}>
                <button>Contacto</button>
              </div>
            </>
          )}
        </div>
      </div>

      {isMobile && (
        <nav className={style.nav_mobile} style={nav_transition}>
          <div className={style.nav_mobile_container}>
            <div className={style.display_pages}>
              <h2>Secciones</h2>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faBuilding} /> Nosotros
                </li>
                <li>
                  <FontAwesomeIcon icon={faHouse} /> Propiedades
                </li>
                <li>
                  <FontAwesomeIcon icon={faBriefcase} /> Servicios
                </li>
                <li>
                  <FontAwesomeIcon icon={faStar} /> Testimonios
                </li>
              </ul>
              <button className={style.close_btn} onClick={handleClick}>
                <FontAwesomeIcon icon={faXmark} /> Cerrar Menú
              </button>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};
