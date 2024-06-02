import React from 'react';
import MyContext from './myContext';

function myState(props) {

    const [mode, setmode] = React.useState('light');

    const togglemode = () => {
      if(mode === 'light') {
        setmode('dark');
        document.body.style.backgroundColor = "rgb(17, 24, 39)"
      } else {
        setmode('light');
        document.body.style.backgroundColor = "white";
      }
    }

  return (
    <MyContext.Provider value={{mode, togglemode}}>
        {props.children}
    </MyContext.Provider>
  )
}

export default myState