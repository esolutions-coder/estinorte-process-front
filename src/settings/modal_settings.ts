export default function modalSettings() {
  //Modal actions, close on close button or outside the modal
  const modalContainer = document.getElementById(
    "modal_home"
  ) as HTMLDivElement;

  modalContainer.addEventListener("click", (evt) => {
    const currentModal = document.getElementById(
      "currentModal"
    ) as HTMLDivElement;

    if (currentModal !== null) {
      const currentModalProps = currentModal.getBoundingClientRect();
      const top = currentModalProps.top;
      const right = currentModalProps.right;
      const bottom = currentModalProps.bottom;
      const left = currentModalProps.left;

      if (evt.x > right || evt.x < left || evt.y < top || evt.y > bottom) {
        console.log("cerrar")
      }
    }
  });
}
