import React from "react";

function Toast(props: ToastFinal) {
  const handleClick = (
    el: React.MouseEvent<HTMLButtonElement>,
    toastId: string
  ) => {
    const { toastNest, setToastNest } = props;
    const toastHome = document.getElementById(toastId) as HTMLDivElement;
    toastHome.classList.toggle("active");

    const deleteSelectedToast = () => {
      const matchingIndex = toastNest.findIndex(
        (toast) => toast.id === toastId
      );
      toastNest.splice(matchingIndex, 1);

      const stringArray = JSON.stringify(toastNest);
      const newArray = JSON.parse(stringArray);

      setToastNest(newArray);
    };

    //After showing animation update the state
    setTimeout(deleteSelectedToast, 400);
  };

  return (
    <div className="toastNest">
      {props.toastNest.map((toastInfo) => (
        <div className={`toast active ${toastInfo.theme}`} id={toastInfo.id} key={toastInfo.id}>
          <div className="toast__header">
            <p className="label__large" id="toast__title">
              {toastInfo.name}
            </p>
            <button
              className="material-symbols-outlined"
              onClick={(evt) => handleClick(evt, toastInfo.id)}
            >
              close
            </button>
          </div>
          <div className="toast__body">
            <p id="toast__description">{toastInfo.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const toastHandler = (
  title: string,
  description: string,
  theme:string,
  setToastNest: React.Dispatch<React.SetStateAction<ToastProps[]>>
) => {
  const newToastNotification = {
    name: title,
    description,
    id: Date.now().toString(),
    theme: theme
  };
  setToastNest((prevState) => [...prevState, newToastNotification]);
};

export { toastHandler, Toast };
