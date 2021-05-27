import React, { Fragment , useState, useEffect, useRef} from "react";

// ###################################################################
// Using state inside useeffect like this puts                    ####
// it into infinite loop                                          ####
// ###################################################################  
//                                                                ####
//   const [renderCount, setRenderCount] = useState(0)            ####
//   useEffect(() => {                                            ####
//     setRenderCount(prevRenderCount => prevRenderCount + 1)     ####
//   })                                                           ####
// ###################################################################


function App() {
  const [name, setName] = useState('')
  const renderCount = useRef(1)

  useEffect(() => {
    renderCount.current  = renderCount.current + 1
  })

  return (
    <Fragment>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name} </div>
      <div>and I am rendered {renderCount.current} times</div>
    </Fragment>
  );
}

export default App;


