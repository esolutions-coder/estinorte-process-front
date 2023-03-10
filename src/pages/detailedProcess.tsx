import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataSource } from "../api/datasources";
import { postDataWithPayLoad } from "../api/fetchData";
import { item_mock_noid } from "../assets/mocks/items";
import FloatinButton from "../components/floating_button";
import Layout from "../components/layout";
import Modal from "../components/modal";
import useItems from "../customHooks/useItems";
import useProcessById from "../customHooks/useProcessById";

export default function DetailedProcess() {
  //ESTADO PARA INFORMACION DE UN ITEM
  const [newItemInfo, setNewItemInfo] = useState(item_mock_noid)
  
  let PROCESS_ID: string = "SIN_ASIGNAR";

  const [modalState, setModalState] = useState(false);
  const [acumulado, setAcumulado] = useState(0);

  const { process_id } = useParams();
  
  if (process_id) {
    PROCESS_ID = process_id;
  }
  const {processInfo} = useProcessById(PROCESS_ID)

  const { itemsList, updateItems } = useItems(PROCESS_ID);


  //CAMBIAR INFO DE LOS INPUTS
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
     const id = evt.target.id;
     const value = evt.target.value;

     setNewItemInfo(prev=>{
      return {
        ...prev,
        [id]:value
      }
     })
     
  }

  //GUARDAR UN NUEVO ITEM
  const saveNewItem = async (evt:React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    newItemInfo.item = `${itemsList.length + 1}`
    newItemInfo.date = Date()
    
    newItemInfo.parent_process = PROCESS_ID
    newItemInfo.ticket_picture = "noimage.png"
    const itemInfoForm = new FormData()
    itemInfoForm.append("data", JSON.stringify(newItemInfo))
    try{
      const saveItem = await postDataWithPayLoad(`${dataSource}/create/item`, itemInfoForm)
      console.log(saveItem)
      console.log("ITEM SAVED")
      updateItems()
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    const weights = itemsList.map(item=>item.weight)
    const totalWeight = weights.reduce((acc: number, current: number)=>acc+current,0);
    setAcumulado(totalWeight)
  },[itemsList])

  let tableBody:JSX.Element[] | JSX.Element = <></>
  if(itemsList.length === 0){
    tableBody = (
      <tr>
        <td colSpan={10}>NO HAY ELEMENTOS EN ESTE PROCESO</td>
      </tr>
    )
  }else{
    tableBody = itemsList.map((item) => {
      return (
        <tr key={item.item}>
          <td>{item.item}</td>
          <td>{item.date}</td>
          <td>{item.plate}</td>
          <td>{item.ticket}</td>
          <td>{item.inspector_house}</td>
          <td>{item.weight}</td>
          <td>{item.ticket_picture}</td>
          <td>{item.product}</td>
          <td>{item.bl}</td>
          <td>{item.observation}</td>
        </tr>
      );
    })
  }

  return (
    <Layout>
      <div className="button_actions" onClick={() => setModalState(true)}>
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
              <input type="text" placeholder="N??MERO BL" id="bl" onChange={handleChange}/>
            </div>
            <div className="input_group mb-sm-12">
              <label htmlFor="observation">OBSERVACI??N</label>
              <input type="text" placeholder="OBSERVACI??N" id="observation" onChange={handleChange}/>
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
      <div className="process_info_container my-sm-12">
        <table className="operation_info_header">
          <tbody>
            <tr>
              <td colSpan={3} rowSpan={2}>
                <h4>MN: {processInfo.moto_nave}</h4>
              </td>
              <td colSpan={3}>OPERACI??N</td>
              <td colSpan={4}>FECHA INICIO: {new Date(processInfo.start_date).toLocaleDateString()}</td>
            </tr>
            <tr>
              <td colSpan={3}>RECIBO</td>
              <td colSpan={2}>FECHA ULTIMO INGRESO: 12 ENERO 2023</td>
            </tr>
            <tr>
              <td colSpan={2}>NUMERO DE VIAJES</td>
              <td colSpan={1}>ACUMULADO</td>
              <td colSpan={7} rowSpan={2}>
                <h2>RECIBO TRIGO BODEGA SOLIC</h2>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>{itemsList.length}</td>
              <td>{acumulado}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="responsive_table_container">
        <table className="inventary__table">
          <thead>
            <tr>
              <td>ITEM</td>
              <td>FECHA</td>
              <td>PLACA</td>
              <td>TIQUETE</td>
              <td>CASA INSPECTORA</td>
              <td>PESO</td>
              <td>IMAGEN TIQUETE</td>
              <td>PRODUCTO</td>
              <td>BL</td>
              <td>OBSERVACI??N</td>
            </tr>
          </thead>
          <tbody>
            {tableBody}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
