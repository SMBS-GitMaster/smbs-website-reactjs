import Clients from "@/components/Clients";
import HomeHero from "@/components/HomeHero";
import Layout from "@/components/Layout";
import Services from "@/components/Services";

export default function HomePage() {
  return (
    <Layout>
      <HomeHero />
      <Clients />
      <Services />
    </Layout>
  );
}
