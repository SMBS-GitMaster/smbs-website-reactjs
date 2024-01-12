import Image from "next/image";
import Button from "../Button";

const CardStack = () => {
    return (
        <article className="card card--stack">
            <div className="card--stack__content">
                <Image
                    src="/card_logo.png"
                    width={120}
                    height={120}
                    alt="card logo"
                />
                <div className="d-flex flex-column align-items-center">
                    <span className="text card--stack__title">John Doe</span>
                    <span className="text text--secondary card--stack__subtitle">
                        Front end developer
                    </span>
                </div>
                <p className="text card--stack__text">
                    Software Engineer with over 6 years of experience in Web development.
                    I enjoy practicing photography.
                </p>
                <Button customClass="button button--light" buttonText="Engage" />
                <div className="w-100 d-flex flex-column align-items-start gap-3">
                    <span className="text text--secondary card--stack__skills">
                        SKILLS:
                    </span>
                    <span className="text text--secondary card--stack__skills">
                        JavaScript, ReactJs, HTML, CSS
                    </span>
                </div>
            </div>
        </article>
    );
};

export default CardStack;
