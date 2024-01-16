import { clients } from "@/constants/clients";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Clients = () => {
  const renderClients = () => {
    return clients.map((client) => {
      return (
        <Image
          className="clients__image"
          key={client.id}
          src={client.image}
          width={client.width}
          height={client.height}
          alt={client.alt}
        />
      );
    });
  };

  return (
    <section className="clients">
      <div className="container">
        <Marquee speed={50} autoFill>
          {renderClients()}
        </Marquee>
      </div>
    </section>
  );
};

export default Clients;
