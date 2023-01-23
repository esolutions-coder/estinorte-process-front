import { useEffect, useState } from "react";
import { dataSource } from "../api/datasources";
import {fetchData} from "../api/fetchData";
import { item_mock } from "../assets/mocks/items";

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


export default function useItems(process_id:string) {
    const [itemsList, setItemsList] = useState<DBItemEstinorte[]>([item_mock])
    const updateItems = async () => {
        try {
            const apiPromise = await fetchData(`${dataSource}/process/${process_id}/items`);
            setItemsList(apiPromise.res)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        updateItems()
    }, [])

    return {itemsList, updateItems}
}   