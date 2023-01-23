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


export default function useProcessById(processId:string) {
    const [processInfo, setProcessInfo] = useState<DBEstinorteProcess>(process_mock)
    const updateProcessInfo = async () => {
        try {
            const apiPromise = await fetchData(`${dataSource}/process/${processId}`);
            setProcessInfo(apiPromise.res)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        updateProcessInfo()
    }, [])

    return {processInfo, updateProcessInfo}
}   