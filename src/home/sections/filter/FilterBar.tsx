import style from "./FilterBar.module.scss";

export const FilterBar = () => {
  return (
    <div className={style.filter_bar}>
      <div className={style.filter_group}>
        <label htmlFor="type">Tipo</label>
        <select id="type">
          <option value="">Todos</option>
          <option value="casa">Casa</option>
          <option value="departamento">Departamento</option>
          <option value="penthouse">Penthouse</option>
        </select>
      </div>

      <div className={style.filter_group}>
        <label htmlFor="status">Operación</label>
        <select id="status">
          <option value="">Todas</option>
          <option value="venta">Venta</option>
          <option value="renta">Renta</option>
        </select>
      </div>

      <div className={style.filter_group}>
        <label htmlFor="borough">Alcaldía</label>
        <select id="borough">
          <option value="">Todas</option>
          <option value="Miguel Hidalgo">Miguel Hidalgo</option>
          <option value="Cuajimalpa">Cuajimalpa</option>
          <option value="Cuauhtémoc">Cuauhtémoc</option>
          <option value="Coyoacán">Coyoacán</option>
          <option value="Álvaro Obregón">Álvaro Obregón</option>
          <option value="Benito Juárez">Benito Juárez</option>
          <option value="Xochimilco">Xochimilco</option>
        </select>
      </div>

      <div className={style.filter_group}>
        <label htmlFor="price">Precio máx.</label>
        <select id="price">
          <option value="">Sin límite</option>
          <option value="5000000">$5M MXN</option>
          <option value="10000000">$10M MXN</option>
          <option value="20000000">$20M MXN</option>
          <option value="35000000">$35M MXN</option>
          <option value="50000">$50K MXN/mes</option>
          <option value="90000">$90K MXN/mes</option>
        </select>
      </div>

      <button className={style.filter_btn}>Buscar</button>
    </div>
  );
};
