declare module '*.png';
declare module '*.jpg';


interface EstinorteProcess {
    parent_center:string,
    moto_nave:string,
    start_date:string | Date,
    name:string
    code:string
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
    parentCenter: string,
    isParent: boolean
}

interface DBCenters extends Centers {
    _id: string
}

interface DBItemEstinorte extends ItemEstinorte {
    _id: string
}

//Toast
interface ToastProps {
    name: string;
    description: string;
    id: string;
    theme:string
  }
  
  type ToastFinal = {
    toastNest: ToastProps[];
    setToastNest: React.Dispatch<React.SetStateAction<ToastProps[]>>;
  };