import React from 'react';
import MyContext from './myContext';

function myState(props) {

    const state = {
        name: "Subhamay dey",
        roll: 38
,    }

      const color = "red";

  return (
    <MyContext.Provider value={{state, color}}>
        {props.children}
    </MyContext.Provider>
  )
}

export default myState