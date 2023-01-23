import { useState } from "react";
import { Link } from "react-router-dom";
import { dataSource } from "../api/datasources";
import { postDataWithPayLoad } from "../api/fetchData";
import { process_mock } from "../assets/mocks/items";
import FloatinButton from "../components/floating_button";
import Layout from "../components/layout";
import useProcess from "../customHooks/useProcess";

export default function ProcessList() {
    const {processList, updateProcessList} = useProcess()

    const [modalState, setModalState] = useState(false);

  return (
    <Layout>

      <div className="responsive_table_container">
        <table className="inventary__table">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>FECHA</td>
                    <td>MOTONAVE</td>
                    <td>NOMBRE DEL PROCESO</td>
                </tr>
            </thead>
            <tbody>
                {processList.map(process=>{
                    return(
                        <tr key={process._id}>
                    <td>{process.code}</td>
                    <td>{`${new Date(process.start_date).toLocaleDateString()}`}</td>
                    <td>{process.moto_nave}</td>
                    <td><Link to={`/proceso/${process._id}`}>{process.name}</Link></td>
                </tr>
                    )
                })}
            </tbody>
        </table>
      </div>
    </Layout>
  );
}
