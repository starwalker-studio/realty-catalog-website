import { create } from "zustand";
import { properties } from "../ts/propiedades";
import type { Property } from "../ts/propiedades.interface";
import type { FilterState, PropertyStore } from "./store.interface";

const initialFilters: FilterState = {
  type: "",
  status: "",
  borough: "",
  maxPrice: "",
};

const applyFilters = (filters: FilterState): Property[] => {
  return properties.filter((property) => {
    if (filters.type && property.type !== filters.type) return false;
    if (filters.status && property.status !== filters.status) return false;
    if (filters.borough && property.location.borough !== filters.borough)
      return false;
    if (filters.maxPrice && property.price > Number(filters.maxPrice))
      return false;
    return true;
  });
};

const paginate = (
  items: Property[],
  page: number,
  perPage: number,
): Property[] => {
  const start = (page - 1) * perPage;
  return items.slice(start, start + perPage);
};

const findSlug = (slug: string) => {
  return properties.find((property) => property.slug === slug);
};

export const usePropertyStore = create<PropertyStore>((set) => ({
  filters: initialFilters,
  filteredProperties: properties,
  currentPage: 1,
  itemsPerPage: 6,
  paginatedProperties: paginate(properties, 1, 6),
  property: null,

  setFilter: (key, value) =>
    set((state) => {
      const updatedFilters = { ...state.filters, [key]: value };
      return {
        filters: updatedFilters,
        filteredProperties: applyFilters(updatedFilters),
      };
    }),
  applyAllFilters: (filters) =>
    set({
      filters,
      paginatedProperties: paginate(applyFilters(filters), 1, 6),
      filteredProperties: paginate(applyFilters(filters), 1, 6),
    }),
  resetFilters: () =>
    set({
      filters: initialFilters,
      paginatedProperties: paginate(properties, 1, 6),
      filteredProperties: properties,
    }),
  setPage: (page) =>
    set((state) => ({
      currentPage: page,
      paginatedProperties: paginate(
        state.filteredProperties,
        page,
        state.itemsPerPage,
      ),
    })),
  findProperty: (slug) =>
    set({
      property: findSlug(slug),
    }),
}));
