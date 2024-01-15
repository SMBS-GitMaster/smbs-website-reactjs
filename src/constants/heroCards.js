import { v4 } from "uuid";

export const heroCards = [
  {
    id: v4(),
    image: "/card_logo.png",
    width: 120,
    height: 120,
    alt: "card logo",
    name: "John Doe",
    charge: "Front end developer",
    text: "Software Engineer with over 6 years of experience in Web development. I enjoy practicing photography.",
    skills: "JavaScript, ReactJs, HTML, CSS",
  },
];

export const responsiveHero = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
