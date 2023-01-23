import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { dataSource } from "../api/datasources";
import { postDataWithPayLoad } from "../api/fetchData";
import { process_mock, process_mock_no_id } from "../assets/mocks/items";
import FloatinButton from "../components/floating_button";
import Layout from "../components/layout";
import Modal from "../components/modal";
import useProcess from "../customHooks/useProcess";
import padNumbers from "../utils/padNumbers";

export default function ProcessByCenter() {
    const {processList, updateProcessList} = useProcess()

    const [newProcessInfo, setNewProcessInfo] = useState(process_mock_no_id)

    const [modalState, setModalState] = useState(false);

    let PARENT_CENTER_ID: string = "SIN_ASIGNAR";

    const { centerId } = useParams();
    
    if (centerId) {
        PARENT_CENTER_ID = centerId;
      }

      //CAMBIAR INFO DE LOS INPUTS
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const id = evt.target.id;
    const value = evt.target.value;

    setNewProcessInfo(prev=>{
     return {
       ...prev,
       [id]:value
     }
    })
    
 }

 //GUARDAR UN NUEVO ITEM
 const saveNewItem = async (evt:React.FormEvent<HTMLFormElement>) => {
   evt.preventDefault();
   const itemInfoForm = new FormData()
   newProcessInfo.parent_center = PARENT_CENTER_ID
   newProcessInfo.start_date = new Date(newProcessInfo.start_date)
   newProcessInfo.code = padNumbers(processList.length.toString(), 5, "")
   itemInfoForm.append("data", JSON.stringify(newProcessInfo))
   try{
     const saveProcess = await postDataWithPayLoad(`${dataSource}/create/process`, itemInfoForm)
     console.log(saveProcess)
     updateProcessList()
   }catch(err){
     console.log(err)
   }
 }
  return (
    <Layout>
        <div className="button_actions" onClick={() => setModalState(true)}>
        <FloatinButton />
      </div>
      <Modal
        setModalState={setModalState}
        modalState={modalState}
        title={"REGISTRO DE NUEVO PROCESO"}
      >
        <form className="modal__body grid col-md-1 gap--24" onSubmit={saveNewItem}>
          <div className="right">
            <div className="input_group mb-sm-12 mb-sm-12">
              <label htmlFor="name">NOMBRE DEL PROCESO</label>
              <input type="text" placeholder="NOMBRE DEL PROCESO" id="name" onChange={handleChange} value={newProcessInfo.name}/>
            </div>
            <div className="input_group mb-sm-12">
              <label htmlFor="moto_nave">MOTONAVE</label>
              <input type="text" placeholder="MOTONAVE" id="moto_nave" onChange={handleChange} value={newProcessInfo.moto_nave}/>
            </div>
            <div className="input_group mb-sm-12">
              <label htmlFor="start_date">FECHA</label>
              <input type="date" placeholder="FECHA" value={typeof newProcessInfo.start_date === "string" ?  newProcessInfo.start_date:""} id="start_date" onChange={handleChange} />
            </div>
          </div>
          <div className="modal__footer">
          <button>
            <div className="button__icon">
              <span className="material-symbols-outlined">change_circle</span>
            </div>
            <p className="label__medium">Crear registro</p>
          </button>
        </div>
        </form>

      </Modal>
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
