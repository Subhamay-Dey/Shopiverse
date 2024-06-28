import React from 'react';
import MyContext from './myContext';
import { useState } from 'react';

export default function myState(props) {

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

    const [loading, setLoading] = useState(false);

  return (
    <MyContext.Provider value={{mode, togglemode, loading, setLoading}}>
      {props.children}
    </MyContext.Provider>
  )
}