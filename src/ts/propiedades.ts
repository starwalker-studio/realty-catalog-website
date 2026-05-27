// src/data/properties.ts

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
    borough: string; // alcaldía
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
    age: number; // años de construcción
  };
  amenities: string[];
  image: string,
  description: string;
  featured: boolean;
  available: boolean;
  listedAt: string; // ISO date
}

export const properties: Property[] = [
  {
    id: 1,
    slug: "casa-polanco-herradura",
    title: "Casa Residencial en Polanco",
    type: "casa",
    status: "venta",
    price: 18500000,
    currency: "MXN",
    location: {
      colony: "Polanco V Sección",
      borough: "Miguel Hidalgo",
      city: "Ciudad de México",
      state: "CDMX",
      coordinates: { lat: 19.4328, lng: -99.1944 }
    },
    specs: {
      bedrooms: 4,
      bathrooms: 3,
      halfBathrooms: 1,
      parkingSpots: 2,
      squareMetersBuilt: 420,
      squareMetersLand: 380,
      floors: 3,
      age: 5
    },
    amenities: ["jardín privado", "roof garden", "cuarto de servicio", "cisterna", "alarma", "cocina integral", "estudio"],
    image: "/images/propiedades/property-1.jpg",
    description: "Residencia de lujo en una de las zonas más exclusivas de la ciudad. Acabados de primera, amplios espacios y excelente iluminación natural. A pasos de restaurantes, galerías y centros comerciales de alto nivel.",
    featured: true,
    available: true,
    listedAt: "2025-01-10T08:00:00Z"
  },
  {
    id: 2,
    slug: "penthouse-santa-fe-altitude",
    title: "Penthouse en Santa Fe",
    type: "penthouse",
    status: "venta",
    price: 24900000,
    currency: "MXN",
    location: {
      colony: "Santa Fe",
      borough: "Cuajimalpa",
      city: "Ciudad de México",
      state: "CDMX",
      coordinates: { lat: 19.3607, lng: -99.2617 }
    },
    specs: {
      bedrooms: 3,
      bathrooms: 3,
      halfBathrooms: 1,
      parkingSpots: 3,
      squareMetersBuilt: 310,
      squareMetersLand: null,
      floors: 1,
      age: 2
    },
    amenities: ["terraza privada", "jacuzzi exterior", "vista panorámica", "gimnasio en edificio", "concierge 24h", "lobby ejecutivo", "bodegas"],
    image: "/images/propiedades/property-2.jpg",
    description: "Penthouse con vista de 360° al skyline de Santa Fe. Torre de lujo con amenidades de clase mundial, seguridad perimetral y acabados europeos. Ideal para ejecutivos o familias que buscan lo mejor de la ciudad.",
    featured: true,
    available: true,
    listedAt: "2025-02-03T09:00:00Z"
  },
  {
    id: 3,
    slug: "departamento-condesa-parque",
    title: "Departamento Frente al Parque en Condesa",
    type: "departamento",
    status: "renta",
    price: 28000,
    currency: "MXN",
    location: {
      colony: "Hipódromo Condesa",
      borough: "Cuauhtémoc",
      city: "Ciudad de México",
      state: "CDMX",
      coordinates: { lat: 19.4117, lng: -99.1745 }
    },
    specs: {
      bedrooms: 2,
      bathrooms: 2,
      halfBathrooms: 0,
      parkingSpots: 1,
      squareMetersBuilt: 110,
      squareMetersLand: null,
      floors: 1,
      age: 15
    },
    amenities: ["balcón", "pet friendly", "roof garden compartido", "bicicleta incluida", "cuarto de lavado", "intercomunicador"],
    image: "/images/propiedades/property-3.jpg",
    description: "Luminoso departamento con vista directa al Parque México. Edificio art déco remodelado, zona caminable con los mejores cafés y restaurantes de la colonia. Contrato mínimo 12 meses.",
    featured: false,
    available: true,
    listedAt: "2025-03-15T10:00:00Z"
  },
  {
    id: 4,
    slug: "casa-coyoacan-colonial",
    title: "Casa Colonial en Coyoacán",
    type: "casa",
    status: "venta",
    price: 9800000,
    currency: "MXN",
    location: {
      colony: "Del Carmen",
      borough: "Coyoacán",
      city: "Ciudad de México",
      state: "CDMX",
      coordinates: { lat: 19.3467, lng: -99.1617 }
    },
    specs: {
      bedrooms: 3,
      bathrooms: 2,
      halfBathrooms: 1,
      parkingSpots: 2,
      squareMetersBuilt: 280,
      squareMetersLand: 320,
      floors: 2,
      age: 40
    },
    amenities: ["patio interior", "estudio", "chimenea", "vigas de madera", "cocina remodelada", "cisterna", "cuarto de servicio"],
    image: "/images/propiedades/property-4.jpg",
    description: "Casona colonial restaurada con todo el encanto del Coyoacán histórico. Techos altos, cantera rosa y patio interior con fuente. A dos cuadras del Jardín Centenario.",
    featured: true,
    available: true,
    listedAt: "2025-01-28T11:00:00Z"
  },
  {
    id: 5,
    slug: "departamento-roma-norte-moderno",
    title: "Departamento Moderno en Roma Norte",
    type: "departamento",
    status: "renta",
    price: 22000,
    currency: "MXN",
    location: {
      colony: "Roma Norte",
      borough: "Cuauhtémoc",
      city: "Ciudad de México",
      state: "CDMX",
      coordinates: { lat: 19.4189, lng: -99.1601 }
    },
    specs: {
      bedrooms: 1,
      bathrooms: 1,
      halfBathrooms: 0,
      parkingSpots: 1,
      squareMetersBuilt: 75,
      squareMetersLand: null,
      floors: 1,
      age: 3
    },
    amenities: ["terraza privada", "cocina abierta", "doble altura", "smart home", "bike parking", "seguridad 24h"],
    image: "/images/propiedades/property-5.jpg",
    description: "Departamento de diseño en edificio boutique de Roma Norte. Acabados minimalistas, ventanales de piso a techo y ubicación privilegiada a pasos del metro Insurgentes.",
    featured: false,
    available: true,
    listedAt: "2025-04-01T09:30:00Z"
  },
  {
    id: 6,
    slug: "casa-pedregal-jardines",
    title: "Residencia en Jardines del Pedregal",
    type: "casa",
    status: "venta",
    price: 32000000,
    currency: "MXN",
    location: {
      colony: "Jardines del Pedregal",
      borough: "Álvaro Obregón",
      city: "Ciudad de México",
      state: "CDMX",
      coordinates: { lat: 19.3231, lng: -99.1972 }
    },
    specs: {
      bedrooms: 5,
      bathrooms: 5,
      halfBathrooms: 2,
      parkingSpots: 4,
      squareMetersBuilt: 780,
      squareMetersLand: 900,
      floors: 3,
      age: 8
    },
    amenities: ["alberca climatizada", "cine privado", "cancha de pádel", "gimnasio privado", "jardín con riego automático", "cuartos de servicio", "generador de emergencia", "cava de vinos"],
    image: "/images/propiedades/property-6.jpg",
    description: "Residencia ultra-premium en la zona más exclusiva del sur de la ciudad. Arquitectura contemporánea con materiales importados, domótica integrada y seguridad privada las 24 horas.",
    featured: true,
    available: true,
    listedAt: "2024-12-05T08:00:00Z"
  },
  {
    id: 7,
    slug: "departamento-narvarte-familiar",
    title: "Departamento Familiar en Narvarte",
    type: "departamento",
    status: "venta",
    price: 4200000,
    currency: "MXN",
    location: {
      colony: "Narvarte Poniente",
      borough: "Benito Juárez",
      city: "Ciudad de México",
      state: "CDMX",
      coordinates: { lat: 19.3978, lng: -99.1583 }
    },
    specs: {
      bedrooms: 3,
      bathrooms: 2,
      halfBathrooms: 1,
      parkingSpots: 2,
      squareMetersBuilt: 145,
      squareMetersLand: null,
      floors: 1,
      age: 10
    },
    amenities: ["salón de usos múltiples", "roof garden compartido", "cuarto de lavado", "bodegas", "intercomunicador", "vigilancia"],
    image: "/images/propiedades/property-7.jpg",
    description: "Amplio departamento ideal para familias en la tranquila Narvarte. Excelente conectividad con Metrobús y Línea 3 del Metro. Zona segura con comercio local a pie de calle.",
    featured: false,
    available: true,
    listedAt: "2025-02-20T10:00:00Z"
  },
  {
    id: 8,
    slug: "penthouse-lomas-chapultepec",
    title: "Penthouse en Lomas de Chapultepec",
    type: "penthouse",
    status: "renta",
    price: 85000,
    currency: "MXN",
    location: {
      colony: "Lomas de Chapultepec IV Sección",
      borough: "Miguel Hidalgo",
      city: "Ciudad de México",
      state: "CDMX",
      coordinates: { lat: 19.4267, lng: -99.2089 }
    },
    specs: {
      bedrooms: 4,
      bathrooms: 4,
      halfBathrooms: 1,
      parkingSpots: 3,
      squareMetersBuilt: 380,
      squareMetersLand: null,
      floors: 2,
      age: 6
    },
    amenities: ["terraza doble nivel", "jacuzzi privado", "cocina gourmet", "sala de juntas", "concierge", "valet parking", "spa en edificio"],
    image: "/images/propiedades/property-8.jpg",
    description: "Penthouse de doble nivel con vista al Bosque de Chapultepec. Renta de larga estadía para ejecutivos internacionales. Torre de acceso controlado con amenidades de hotel cinco estrellas.",
    featured: true,
    available: true,
    listedAt: "2025-03-01T08:00:00Z"
  },
  {
    id: 9,
    slug: "casa-xochimilco-ecologica",
    title: "Casa Ecológica en Xochimilco",
    type: "casa",
    status: "venta",
    price: 6500000,
    currency: "MXN",
    location: {
      colony: "Barrio San Lucas",
      borough: "Xochimilco",
      city: "Ciudad de México",
      state: "CDMX",
      coordinates: { lat: 19.2572, lng: -99.1028 }
    },
    specs: {
      bedrooms: 3,
      bathrooms: 2,
      halfBathrooms: 0,
      parkingSpots: 2,
      squareMetersBuilt: 210,
      squareMetersLand: 450,
      floors: 2,
      age: 1
    },
    amenities: ["paneles solares", "captación de agua pluvial", "huerto orgánico", "composta", "calentador solar", "jardín nativo", "muro verde"],
    image: "/images/propiedades/property-9.jpg",
    description: "Casa de construcción sustentable en los límites de la Zona Patrimonio de la Humanidad. Materiales locales, diseño bioclimático y amplio terreno con vista a los canales. Perfecta para quienes buscan calidad de vida fuera del ritmo urbano.",
    featured: false,
    available: true,
    listedAt: "2025-04-10T08:00:00Z"
  }
];