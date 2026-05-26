export interface FilterOption {
  value: string;
  label: string;
}

export interface FilterConfig {
  types: FilterOption[];
  statuses: FilterOption[];
  boroughs: FilterOption[];
  priceRanges: FilterOption[];
}

export const filterConfig: FilterConfig = {
  types: [
    { value: "", label: "Todos" },
    { value: "casa", label: "Casa" },
    { value: "departamento", label: "Departamento" },
    { value: "penthouse", label: "Penthouse" },
  ],
  statuses: [
    { value: "", label: "Todas" },
    { value: "venta", label: "Venta" },
    { value: "renta", label: "Renta" },
  ],
  boroughs: [
    { value: "", label: "Todas" },
    { value: "Miguel Hidalgo", label: "Miguel Hidalgo" },
    { value: "Cuajimalpa", label: "Cuajimalpa" },
    { value: "Cuauhtémoc", label: "Cuauhtémoc" },
    { value: "Coyoacán", label: "Coyoacán" },
    { value: "Álvaro Obregón", label: "Álvaro Obregón" },
    { value: "Benito Juárez", label: "Benito Juárez" },
    { value: "Xochimilco", label: "Xochimilco" },
  ],
  priceRanges: [
    { value: "", label: "Sin límite" },
    { value: "5000000", label: "$5M MXN" },
    { value: "10000000", label: "$10M MXN" },
    { value: "20000000", label: "$20M MXN" },
    { value: "35000000", label: "$35M MXN" },
    { value: "50000", label: "$50K MXN/mes" },
    { value: "90000", label: "$90K MXN/mes" },
  ],
};
