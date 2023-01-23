import { useEffect, useState } from "react";
import { dataSource } from "../api/datasources";
import {fetchData} from "../api/fetchData";
import { centers_mock } from "../assets/mocks/items";

export default function useCenters() {
    const [centersList, setCentersList] = useState<DBCenters[]>([centers_mock])
    const updateCenters = async () => {
        try {
            const apiPromise = await fetchData(`${dataSource}/centers`);
            setCentersList(apiPromise.res)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        updateCenters()
    }, [])

    return {updateCenters, centersList}
}   