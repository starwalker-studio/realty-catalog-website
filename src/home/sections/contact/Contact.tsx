import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './Contact.module.scss';

export const Contact = () => {
  return (
    <section className={style.contact_section}>
      <div className={style.contact_container}>
        <div className={style.contact_wrapper}>
          <div className={style.contact_header}>
            <h2>Contáctanos</h2>
            <p>Estamos listos para ayudarte a encontrar tu propiedad ideal</p>
          </div>
          <div className={style.contact_grid}>
            <div className={style.contact_info}>
              <div className={style.info_item}>
                <span><FontAwesomeIcon icon={faPhone} /></span>
                <div>
                  <p className={style.label}>Teléfono</p>
                  <p>55 1234 5678</p>
                </div>
              </div>
              <div className={style.info_item}>
                <span><FontAwesomeIcon icon={faEnvelope} /></span>
                <div>
                  <p className={style.label}>Correo</p>
                  <p>contacto@alturarealty.mx</p>
                </div>
              </div>
              <div className={style.info_item}>
                <span><FontAwesomeIcon icon={faLocationDot} /></span>
                <div>
                  <p className={style.label}>Oficina</p>
                  <p>Av. Presidente Masaryk 123, Polanco, CDMX</p>
                </div>
              </div>
            </div>
            <div className={style.contact_form}>
              <div className={style.form_group}>
                <label>Nombre</label>
                <input type="text" placeholder="Tu nombre completo" />
              </div>
              <div className={style.form_group}>
                <label>Correo</label>
                <input type="email" placeholder="correo@ejemplo.com" />
              </div>
              <div className={style.form_group}>
                <label>Mensaje</label>
                <textarea rows={4} placeholder="¿En qué podemos ayudarte?" />
              </div>
              <button className={style.submit_btn}>Enviar mensaje</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};