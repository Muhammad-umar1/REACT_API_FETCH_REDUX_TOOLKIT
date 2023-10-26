// import React from "react";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";

// const Popus = () => {
//   const contentStyle = {
//     // width: "90%",
//     // height: "90vh", // Set the desired width here
//     // padding: "20px", // Optional: Add padding for content
//     marginLeft: "150px",
//   };
//   return (
//     <Popup
//       trigger={<button>Trigger</button>}
//       position="center center"
//       contentStyle={contentStyle} // Apply the contentStyle to control the width
//     >
//       <div className="border w-5/12 mx-auto">Popup content here !!</div>
//     </Popup>
//   );
// };

// export default Popus;

import React, { useState } from "react";
import { useSelector } from "react-redux";

const Popup = ({ id }) => {
  // const [userId, setId] = useState();

  const [isOpen, setIsOpen] = useState(false);
  const allUsers = useSelector((state) => state?.data?.userApiData);
  const singleUser = allUsers.find((item) => item?.id === id);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="inset-0 flex items-center justify-center z-50">
      {isOpen && <div className="fixed inset-0 bg-black opacity-50"></div>}

      <button
        onClick={openPopup}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Open Popup
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-lg font-semibold mb-4">
              Name: {singleUser.name}
            </h2>
            <p>Father Name: {singleUser?.father}</p>
            <p>password: {singleUser?.password}</p>
            <p>Email: {singleUser?.email}</p>
            <p>Id: {singleUser?.id}</p>
            <button
              onClick={closePopup}
              className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;

// import React, { useState } from "react";
// import { useSelector } from "react-redux";

// const Popup = ({ id }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const allUsers = useSelector((state) => state?.data?.userApiData);
//   const singleUser = allUsers.find((item) => item.id === id);

//   const openPopup = () => {
//     setIsOpen(true);
//   };

//   const closePopup = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div>
//       <button
//         onClick={openPopup}
//         className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
//       >
//         Open Popup
//       </button>

//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className="bg-white p-8 rounded shadow-lg">
//             <h2 className="text-lg font-semibold mb-4">User Details</h2>
//             <p>ID: {singleUser.id}</p>
//             <p>Name: {singleUser.name}</p>
//             <p>Email: {singleUser.email}</p>
//             {/* Add more user details as needed */}
//             <button
//               onClick={closePopup}
//               className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Popup;
