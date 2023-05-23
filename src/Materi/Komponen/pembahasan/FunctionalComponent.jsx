// With 1 tag
// const functionalComponent = () => <h1>Membuat komponen dengan functional component</h1>

import { useState } from "react";

// With multiple tags
const FunctionalComponent = ({name}) => {

  // Make for hooks
  const [value, setValue] = useState(0);

  const calPlus = () => {
    setValue(value + 1);
  }

  const calMinus = () => {
    if(value > 0) {
      setValue(value - 1)
    }
  }

  return (
    <div>
      <h1>Membuat komponen dengan functional component</h1>
      <h2>Hallo {name}, selamat belajar</h2>
      <h3>Ini membuat dengan multiple tags</h3>

      {/* Create simple hooks */}
      <button onClick={calMinus} style={{ cursor: "pointer" }}>-</button>
      <span>{'  '} {value} {'  '}</span>
      <button onClick={calPlus} style={{ cursor: "pointer" }}>+</button>
    </div>
  )
}

export default FunctionalComponent;