import type { Property } from "../ts/propiedades.interface";

export interface FilterState {
  type: string;
  status: string;
  borough: string;
  maxPrice: string;
}

export interface PropertyStore {
  filters: FilterState;
  filteredProperties: Property[];
  currentPage: number;
  itemsPerPage: number;
  paginatedProperties: Property[];
  property: Property | null;
  setFilter: (key: keyof FilterState, value: string) => void;
  applyAllFilters: (filters: FilterState) => void;
  resetFilters: () => void;
  setPage: (page: number) => void;
  findProperty: (slug: string) => void;
}
