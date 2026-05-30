import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMobileScreen } from "../../../hooks/useMobileScreen";
import style from "./Header.module.scss";

export const Header = () => {
  const { isMobileScreen, handleClick, nav_transition } = useMobileScreen();
  return (
    <>
      <div className={style.navbar}>
        <div className={style.navbar_wrapper}>
          <div className={style.nav_logo_wrapper}>
            <div className={style.logo}>
              <img src="/logo/altura-realty-logo.svg" alt="" />
            </div>
          </div>
          {isMobileScreen() ? (
            <>
              <div className={style.mobile_icon}>
                <span onClick={() => handleClick()}>
                  <FontAwesomeIcon icon={faAlignJustify} />
                </span>
              </div>
            </>
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
      {/* {isMobileScreen() && (
        <div className={style.nav_overlay}>
          <nav className={style.nav_mobile} style={nav_transition}>
            <div className={style.nav_mobile_container}>
              <div className={style.display_pages}>
                <h2>Secciones</h2>
                <ul>
                  <li>
                    <span>
                      <p>Nosotros</p>
                    </span>
                  </li>
                  <li>
                    <span>
                      <p>Propiedades</p>
                    </span>
                  </li>
                  <li>
                    <span>
                      <p>Servicios</p>
                    </span>
                  </li>
                  <li>
                    <span>
                      <p>Testimonios</p>
                    </span>
                  </li>
                </ul>
                <div
                  className={style.button_wrapper_mobile}
                  onClick={() => handleClick()}
                >
                  <button>Cerrar Menú</button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )} */}
    </>
  );
};
