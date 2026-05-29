import {
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePropertyStore } from "../../../../../api/store";
import style from "./Paginator.module.scss";

export const Paginator = () => {
  const {
    filteredProperties,
    currentPage,
    itemsPerPage,
    setPage,
    resetFilters,
  } = usePropertyStore();

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);

  return (
    <>
      {totalPages > 1 ? (
        <div className={style.pagination}>
          <button
            onClick={() => setPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>

          <div className={style.page}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setPage(page)}
                data-color={`${currentPage === page ? "gold" : "white"}`}
                data-active={currentPage === page}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      ) : (
        <div className={style.pagination}>
          <button onClick={resetFilters}>Ver todo</button>
        </div>
      )}
    </>
  );
};
