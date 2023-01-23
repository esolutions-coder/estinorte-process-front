import React, { SetStateAction, useRef, useState } from "react";

type Modal = {
  modalState: boolean;
  setModalState: React.Dispatch<SetStateAction<boolean>>;
  children: JSX.Element | JSX.Element[],
  title: string
};

export default function Modal({ setModalState, modalState, children, title }: Modal) {
  const myModal = useRef<HTMLDivElement>(null);

  const handleModalClick = (
    evt: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (myModal.current) {
      const top = myModal.current.offsetTop;
      const left = myModal.current.offsetLeft;
      const right = myModal.current.offsetWidth + left;
      const bottom = myModal.current.offsetHeight + top;

      if (
        evt.clientX > right ||
        evt.clientX < left ||
        evt.clientY < top ||
        evt.clientY > bottom
      ) {
        setModalState(false);
      }
    }
  };

  return (
    <div
      className={`modal_home ${modalState ? "" : "hide_element"}`}
      onClick={handleModalClick}
    >
      <div className="modal__container">
        <div className="modal" id="currentModal" ref={myModal}>
          <div className="modal__header">
            <div className="modal_title">
              <h2>{title}</h2>
            </div>
            <div className="close__modal" onClick={() => setModalState(false)}>
              <button className="material-symbols-outlined">close</button>
            </div>
          </div>

          {children}

        </div>
      </div>
    </div>
  );
}
