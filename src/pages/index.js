import Clients from "@/components/Clients";
import HomeHero from "@/components/HomeHero";
import Layout from "@/components/Layout";

export default function HomePage() {
  return (
    <Layout>
      <HomeHero />
      <Clients />
    </Layout>
  );
}
