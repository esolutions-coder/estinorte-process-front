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


export default function useAllProcess() {
    const [processList, setProcessList] = useState<DBEstinorteProcess[]>([process_mock])
    const updateProcessList = async () => {
        try {
            const apiPromise = await fetchData(`${dataSource}/process`);
            setProcessList(apiPromise.res)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        updateProcessList()
    }, [])

    return {processList, updateProcessList}
}   