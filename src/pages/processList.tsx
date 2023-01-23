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

      //CAMBIAR INFO DE LOS INPUTS
//   const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
//     const id = evt.target.id;
//     const value = evt.target.value;

//     setNewItemInfo(prev=>{
//      return {
//        ...prev,
//        [id]:value
//      }
//     })
    
//  }

 //GUARDAR UN NUEVO ITEM
//  const saveNewItem = async (evt:React.FormEvent<HTMLFormElement>) => {
//    evt.preventDefault();
//    const [newItemInfo, setNewItemInfo] = useState(item_mock_noid)
//    newItemInfo.item = `${itemsList.length + 1}`
//    newItemInfo.date = Date()
   
//    newItemInfo.parent_process = PROCESS_ID
//    newItemInfo.ticket_picture = "noimage.png"
//    const itemInfoForm = new FormData()
//    itemInfoForm.append("data", JSON.stringify(newItemInfo))
//    try{
//      const saveItem = await postDataWithPayLoad(`${dataSource}/create/item`, itemInfoForm)
//      console.log(saveItem)
//      console.log("ITEM SAVED")
//      updateItems()
//    }catch(err){
//      console.log(err)
//    }
//  }
  return (
    <Layout>
        {/* <div className="button_actions" onClick={() => setModalState(true)}>
        <FloatinButton />
      </div>
      <Modal
        setModalState={setModalState}
        modalState={modalState}
        title={"REGISTRO"}
      >
        <form className="modal__body grid col-md-2 gap--24" onSubmit={saveNewItem}>
          <div className="right">
            <div className="input_group mb-sm-12 mb-sm-12">
              <label htmlFor="plate">PLACA</label>
              <input type="text" placeholder="PLACA" id="plate" onChange={handleChange}/>
            </div>
            <div className="input_group mb-sm-12">
              <label htmlFor="ticket">TIQUETE</label>
              <input type="text" placeholder="TIQUETE" id="ticket" onChange={handleChange}/>
            </div>
            <div className="input_group mb-sm-12">
              <label htmlFor="inspector_house">CASA INSPECTORA</label>
              <input
                type="text"
                placeholder="CASA INSPECTORA"
                id="inspector_house"
                onChange={handleChange}
              />
            </div>
            <div className="input_group mb-sm-12">
              <label htmlFor="weight">PESO</label>
              <input type="text" placeholder="PESO" id="weight" onChange={handleChange} />
            </div>
          </div>
          <div className="left">
            <div className="input_group mb-sm-12">
              <label htmlFor="product">PRODUCTO</label>
              <input type="text" placeholder="PRODUCTO" id="product" onChange={handleChange}/>
            </div>
            <div className="input_group mb-sm-12">
              <label htmlFor="bl">BL</label>
              <input type="text" placeholder="NÚMERO BL" id="bl" onChange={handleChange}/>
            </div>
            <div className="input_group mb-sm-12">
              <label htmlFor="observation">OBSERVACIÓN</label>
              <input type="text" placeholder="OBSERVACIÓN" id="observation" onChange={handleChange}/>
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

      </Modal> */}
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
