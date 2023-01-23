import Layout from "../components/layout";
import StartCard from "../components/startCard";
import useCenters from "../customHooks/useCenters";

export default function Centers() {
    const {centersList, updateCenters} = useCenters()
  return (
    <Layout>
      <div className="grid col-sm-2 col-md-2 col-lg-4 justify__sm__center gap--12 justify__center">
        {centersList.map(center=><StartCard name={center.name} icon="hub" link={`/#/listar/centro/${center._id}/procesos`} key={center._id}/>)}

      </div>
    </Layout>
  );
}
