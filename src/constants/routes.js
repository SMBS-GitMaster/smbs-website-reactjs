import { v4 } from "uuid";

export const routes = {
  home: "/",
  about: "/About",
  services: "/Services",
  blog: "Blog",
  careers: "Careers",
};

export const options = [
  { id: v4(), text: "About Us", url: routes.about },
  { id: v4(), text: "Services", url: routes.services },
  { id: v4(), text: "Blog", url: routes.blog },
  { id: v4(), text: "Careers", url: routes.careers },
];
