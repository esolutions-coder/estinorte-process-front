import { useEffect, useState } from "react";
import { dataSource } from "../api/datasources";
import {fetchData} from "../api/fetchData";
import { item_mock, process_mock } from "../assets/mocks/items";

/**
 * 
 * item: number,
    date: Date,
    plate: string,
    ticket: number,
    inspector_house: number,
    weight: number,
    ticket_picture: string,
    product: string,
    bl: number,
    observation: string,
    parent_process: string
 */


export default function useProcessByParent(centerId:string) {
    const [processByParentInfo, setProcessByParentInfo] = useState<DBEstinorteProcess[]>([process_mock])
    const updateProcessByParentInfo = async () => {
        try {
            const apiPromise = await fetchData(`${dataSource}/center/${centerId}/process`);
            setProcessByParentInfo(apiPromise.res)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        updateProcessByParentInfo()
    }, [])

    return {processByParentInfo, updateProcessByParentInfo}
}   