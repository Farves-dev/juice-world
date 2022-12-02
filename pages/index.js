import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Services from "../components/Services";
import { client } from "../lib/client";

export default function Home({ juices }) {
  return (
    <div className="body">
      <Hero />
      <Services />
      <Menu juices={juices} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "juice"]';
  const juices = await client.fetch(query);

  return {
    props: {
      juices,
    },
  };
};
