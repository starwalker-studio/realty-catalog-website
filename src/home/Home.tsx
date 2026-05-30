import { useRef } from "react";
import { Catalog, Contact, Hero, Reviews, WhyUs } from "./sections";

export const Home = () => {
  const catalog = useRef<HTMLDivElement>(null);

  const handleNavigate = (section: "catalog") => {
    const map = {
      catalog: catalog,
    };

    map[section].current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Hero onNavigate={handleNavigate} />
      <Catalog ref={catalog} />
      <WhyUs />
      <Reviews />
      <Contact />
    </>
  );
};
