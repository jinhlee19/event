// import { useStat, useEffect } from "react";

// export default function Modal({ show, onClose, children, title }) {
//   const [isBrowswer, setIsBrowser] = useState(false);
//   useEffect(() => setIsBrowser(true));
//   const modalContent = show ? (
//     <div>
//       <div className="modal">
//         <h2>{title && title}</h2>
//         <div className="modal-child">{children}</div>
//       </div>
//     </div>
//   ) : null;
//   //
//   if (isBrowswer) {
//     return ReactDOM.createPortal(
//       modalContent,
//       document.getElementById("modal-root")
//     );
//   } else {
//     return null;
//   }
// }

import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export default function Modal({ show, onClose, children, title }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => setIsBrowser(true), []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-40">
      <div className="relative bg-black bg-opacity-60 p-6 z-50 flex justify-center items-center h-[500px] w-[700px]">
        <div className="flex flex-end text-lg">
          <a href="#" onClick={handleClose} className="top-6 right-6 absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        {title && <div>{title}</div>}
        <div className="pt-3">{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}

// https://devrecipes.net/modal-component-with-next-js/
