declare module '*.png';
declare module '*.jpg';


interface EstinorteProcess {
    parent_center:string,
    moto_nave:string,
    start_date:Date,
}

interface DBEstinorteProcess extends EstinorteProcess {
    _id: string
}

interface ItemEstinorte {
    item: string,
    date: string,
    plate: string,
    ticket: number,
    inspector_house: number,
    weight: number,
    ticket_picture: string,
    product: string,
    bl: number,
    observation: string,
    parent_process: string
}

interface Centers {
    name: string,
    child_ids: string[]
}

interface DBCenters extends Centers {
    _id: string
}

interface DBItemEstinorte extends ItemEstinorte {
    _id: string
}