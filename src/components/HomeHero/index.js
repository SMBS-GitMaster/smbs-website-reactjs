import Hero from "../Hero";
import CardStack from "../CardStack";
import Carousel from "react-multi-carousel";
import { heroCards, responsiveHero } from "@/constants/heroCards";

const HomeHero = () => {
  const renderHeroCars = () =>
    heroCards.map((heroCard) => (
      <CardStack
        key={heroCard.id}
        customClass="card--stack"
        image={heroCard.image}
        width={120}
        height={120}
        alt={heroCard.alt}
        name={heroCard.name}
        charge={heroCard.charge}
        text={heroCard.text}
        skills={heroCard.skills}
      />
    ));

  return (
    <Hero
      title="Boost your Software team with LATAM talent."
      subtitle="Staff augmentation made easy."
      text="Whether you need one developer or an entire team, we have the
      expertise to find the right fit for your project. Plus, with our
      flexible engagement models, you can choose the level of support that
      works best for your needs."
      buttonText="Get in Touch"
      isShowLogo
      logo="/image_2.png"
    >
      <div className="hero__stack">
        <Carousel
          autoPlay
          arrows={false}
          showDots={false}
          responsive={responsiveHero}
          autoPlaySpeed={4000}
          draggable
          infinite
        >
          {renderHeroCars()}
        </Carousel>
      </div>
    </Hero>
  );
};

export default HomeHero;
