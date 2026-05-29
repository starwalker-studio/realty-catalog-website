import { forwardRef } from "react";
import { usePropertyStore } from "../../../api/store";
import style from "./Catalog.module.scss";
import { Card } from "./layout/card/Card";
import { Paginator } from "./layout/paginator/Paginator";

export const Catalog = forwardRef<HTMLDivElement>((_, ref) => {
  const { paginatedProperties } = usePropertyStore();
  return (
    <section className={style.catalog_section}>
      <div className={style.catalog_container}>
        <div className={style.catalog_wrapper}>
          <div className={style.catalog_content} ref={ref}>
            <div className={style.catalog_header}>
              <h2>Propiedades Destacadas</h2>
              <p>Conoce las mejores propiedades que tenemos para ti</p>
            </div>
            <Card properties={paginatedProperties} />
            <Paginator />
          </div>
        </div>
      </div>
    </section>
  );
});
