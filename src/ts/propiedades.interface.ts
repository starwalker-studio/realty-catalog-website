export interface Property {
  id: number;
  slug: string;
  title: string;
  type: "casa" | "departamento" | "penthouse";
  status: "venta" | "renta";
  price: number;
  currency: "MXN" | "USD";
  location: {
    colony: string;
    borough: string;
    city: string;
    state: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  specs: {
    bedrooms: number;
    bathrooms: number;
    halfBathrooms: number;
    parkingSpots: number;
    squareMetersBuilt: number;
    squareMetersLand: number | null;
    floors: number;
    age: number;
  };
  amenities: string[];
  image: string,
  description: string;
  featured: boolean;
  available: boolean;
  listedAt: string;
}