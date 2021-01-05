// import React, { useState } from "react";

// const useDropdown = (label, defaultState, options) => {
//   const [state, setState] = useState(defaultState);
//   const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

//   const dropdown = () => {
//     <label htmlFor={id}>
//       {label}
//       <select
//         id={id}
//         value={state}
//         onChange={(e) => setState(e.target.value)}
//         onBlur={(e) => setState(e.target.value)}
//         disabled={options.length === 0}
//       >
//         <options>All</options>
//         {options.map((item) => (
//           <options key={item} value={item}>
//             {item}
//           </options>
//         ))}
//       </select>
//     </label>;
//   };
//   return [state, dropdown, setState];
// };

// export default useDropdown;


import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, updateState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={(e) => updateState(e.target.value)}
        onBlur={(e) => updateState(e.target.value)}
        disabled={!options.length}
      >
        <option>All</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
  return [state, Dropdown, updateState];
};

export default useDropdown;
