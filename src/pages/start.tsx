import Layout from "../components/layout";
import StartCard from "../components/startCard";

export default function Home() {
  return (
    <Layout>
      <div className="grid col-sm-2 col-md-2 col-lg-4 justify__sm__center gap--12 justify__center">
          <StartCard name="Centros" icon="hub" link="/myCenters" />
      </div>
    </Layout>
  );
}
