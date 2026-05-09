export const siteInfo = {
  name: "Juan Quindío Construcciones",
  shortName: "Juan Gabriel",
  serviceLabel: "Construcción y mantenimiento",
  phoneDisplay: "313 640 4735",
  phoneHref: "+573136404735",
  whatsappNumber: "573136404735",
  whatsappMessage:
    "Hola Juan, quiero cotizar un trabajo de construcción o mantenimiento.",
};

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Trabajos realizados", href: "#trabajos" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

export const whatsappUrl = `https://wa.me/${siteInfo.whatsappNumber}?text=${encodeURIComponent(
  siteInfo.whatsappMessage
)}`;

export const callUrl = `tel:${siteInfo.phoneHref}`;
