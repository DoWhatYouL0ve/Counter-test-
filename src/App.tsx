import React, {useState} from 'react';
import './App.css';
import {Counter} from "./counter/counter";


function App() {

    const [value, setValue] = useState<number>(0)
    const [disabledValue, setDisabledValue] = useState<boolean>(true)

    const newValueCounter = () => {
        if (value < 5)  {
            setValue(value + 1)
            setDisabledValue(false)
        }
    }

    const resetValueCounter = () => {
        setValue(0)
        setDisabledValue(true)
    }

  return (
      <div className="App">
        <Counter resetValueCounter={resetValueCounter}
                 value={value}
                 newValueCounter={newValueCounter}
                 disabledValue={disabledValue}  />
      </div>
  );
}

export default App;