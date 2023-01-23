export const item_mock: DBItemEstinorte = {
  _id: "",
  item: "",
  date: Date(),
  plate: "",
  ticket: 0,
  inspector_house: 0,
  weight: 0,
  ticket_picture: "",
  product: "",
  bl: 0,
  observation: "",
  parent_process: "",
};

export const process_mock_no_id: EstinorteProcess = {
  moto_nave: "",
  parent_center: "",
  code: "",
  name: "",
  start_date: "",
};

export const process_mock: DBEstinorteProcess = {
  _id: "",
  moto_nave: "",
  parent_center: "",
  code: "",
  name: "",
  start_date: "",
};

export const item_mock_noid: ItemEstinorte = {
  item: "",
  date: Date(),
  plate: "",
  ticket: 0,
  inspector_house: 0,
  weight: 0,
  ticket_picture: "",
  product: "",
  bl: 0,
  observation: "",
  parent_process: "",
};

export const initialToasts: ToastProps = {
  name: "Mis notificaciones",
  description: "Aquí aparecerán tus notificaciones",
  id: "a",
  theme: "primary_theme",
};

export const centers_mock: DBCenters = {
  _id: "",
  name: "",
  child_ids: [],
};
