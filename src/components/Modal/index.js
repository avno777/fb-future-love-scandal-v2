import React from "react";
import { useModal } from "../../context/ModalContext";

function Modal() {
  const [stateModal, hideModal] = useModal();

  return (
    <div>
      {stateModal.showModal && (
        <div>
          <h2>Hey there!</h2>
          <p>Please log in or register to access this feature.</p>
          <div className="flex flex-row">
            <button
              type="button"
              className="text-white bg-gradient-to-l from-purple-500 to-pink-500 font-bold rounded-mlarge px-2.5 py-2 text-center justify-center items-center mr-4"
            >
              Sign In
            </button>

            <button
              type="button"
              className="text-white bg-gradient-to-l from-purple-500 to-pink-500 font-bold rounded-mlarge px-2.5 py-2 text-center mr-1 justify-center items-center"
            >
              Register
            </button>
          </div>
          <button onClick={hideModal} className="">
            Close
          </button>
          <input
            type="button"
            id="download-button"
            value="Download on your device"
          />
        </div>
      )}
    </div>
  );
}

export default Modal;
