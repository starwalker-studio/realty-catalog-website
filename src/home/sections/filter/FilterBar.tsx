import { useState } from "react";
import { usePropertyStore } from "../../../api/store";
import { filterConfig } from "../../../ts/filters";
import style from "./FilterBar.module.scss";

type FilterBarProps = {
  onNavigate: (section: "catalog") => void;
};

export const FilterBar = ({ onNavigate }: FilterBarProps) => {
  const [type, setType] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [borough, setBorough] = useState<string>("");
  const [priceRange, setPriceRange] = useState<string>("");
  const { applyAllFilters } = usePropertyStore();
  return (
    <div className={style.filter_bar}>
      <div className={style.filter_container}>
        <div className={style.filter_header}>
          <h3>Busca tu lugar ideal</h3>
        </div>
        <div className={style.filter_group}>
          <label htmlFor="type">Tipo</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            {filterConfig.type.map((filter) => (
              <option key={filter.value} value={filter.value}>
                {filter.label}
              </option>
            ))}
          </select>
        </div>

        <div className={style.filter_group}>
          <label htmlFor="status">Operación</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            {filterConfig.status.map((filter) => (
              <option key={filter.value} value={filter.value}>
                {filter.label}
              </option>
            ))}
          </select>
        </div>

        <div className={style.filter_group}>
          <label htmlFor="borough">Alcaldía</label>
          <select value={borough} onChange={(e) => setBorough(e.target.value)}>
            {filterConfig.borough.map((filter) => (
              <option key={filter.value} value={filter.value}>
                {filter.label}
              </option>
            ))}
          </select>
        </div>

        <div className={style.filter_group}>
          <label htmlFor="price">Precio máx.</label>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            {filterConfig.priceRange.map((filter) => (
              <option key={filter.value} value={filter.value}>
                {filter.label}
              </option>
            ))}
          </select>
        </div>

        <button
          className={style.filter_btn}
          onClick={() => {
            applyAllFilters({
              type,
              status,
              borough,
              maxPrice: priceRange,
            });
            onNavigate("catalog");
          }}
        >
          Buscar
        </button>
      </div>
    </div>
  );
};
