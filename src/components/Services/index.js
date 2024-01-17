import Image from "next/image";
import Button from "../Button";
import { services } from "@/constants/services";

const Services = () => {
  const renderServices = () =>
    services.map((service) => (
      <div className="services__item" key={service.id}>
        <Image
          className="services__icon"
          alt="service"
          width={78}
          height={78}
          src={service.image}
        />
        <h3 className="title title--secondary services__item__title">
          {service.title}
        </h3>
        <p className="text services__description">{service.description}</p>
        <Button customClass="button button--dark" buttonText="Learn more" />
      </div>
    ));
  return (
    <section className="services">
      <div className="container">
        <div className="services__content">
          <div className="services__text">
            <h2 className="title services__title">SERVICES</h2>
            <h3 className="title title--secondary services__subtitle">
              Empower your business with our software development services.
            </h3>
            <p className="text">
              Our expert team delivers solutions tailored to your needs, on time
              and on budget.
            </p>
          </div>
          <div className="services__images">
            <Image
              width={342}
              height={220}
              src="/services_image.png"
              alt="Services"
            />
          </div>
        </div>
        <div className="services__bottom">{renderServices()}</div>
      </div>
    </section>
  );
};

export default Services;
