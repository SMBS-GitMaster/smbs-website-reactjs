import Image from "next/image"
import Button from "../Button"
import Hero from "../Hero"
import CardStack from "../CardStack"

const HomeHero = () => {
    return (
        <Hero>
            <div className="hero__description">
                <h2 className="title hero__title">
                    Boost your Software team with LATAM talent.
                </h2>
                <h3 className="title title--primary hero__title">
                    Staff augmentation made easy.
                </h3>
                <p className="text hero__text">
                    Whether you need one developer or an entire team, we have the
                    expertise to find the right fit for your project. Plus, with our
                    flexible engagement models, you can choose the level of support
                    that works best for your needs.
                </p>
                <div className="hero__content__bottom">
                    <Button customClass="button " buttonText="Get in Touch" />
                    <Image
                        src="/image_2.png"
                        width={150}
                        height={162}
                        alt="Clutch logo"
                    />
                </div>
            </div>

            <div className="hero__stack">
                <CardStack />
            </div>
        </Hero>
    )
}

export default HomeHero