import { useState } from "react";
import { initialToasts } from "../assets/mocks/items";
import Layout from "../components/layout";
import { Toast } from "../components/toast";

export default function CreateProcess(){
    const [toastNest, setToastNest] = useState([initialToasts])
    return(
        <Layout>
            <Toast toastNest={toastNest} setToastNest={setToastNest}/>
            <div>
                <form className="form">
                <div className="input_group mb-sm-16">
                        <label htmlFor="name"><p>Nombre</p></label>
                        <input type="text" placeholder="NOMBRE DEL PROCESO" id="name"/>
                    </div>
                    <div className="input_group mb-sm-16">
                        <label htmlFor="motonave"><p>Motonave</p></label>
                        <input type="text" placeholder="Motonave" id="motonave"/>
                    </div>
                    <div className="input_group mb-sm-16">
                        <label htmlFor="parent_center"><p>Centro de Origen</p></label>
                        <select name="parent_center" id="parent_center" className="wide_selector">
                            <option value="#" className="">Seleccione un centro...</option>
                            <option value="6234">OPERLOG</option>
                        </select>
                    </div>
                    <div className="input_group mb-sm-16">
                        <label htmlFor="start_date"><p>Fecha de inicio</p></label>
                        <input type="date" id="start_date"/>
                    </div>
                    <button className="btn primary_theme btn__paddings">Crear Proceso</button>
                </form>
            </div>
        </Layout>
    )
}