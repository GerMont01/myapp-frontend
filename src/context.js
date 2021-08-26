import React, { useReducer, useEffect } from 'react';
export const myContext = React.createContext();


function reducer(state, action) {
    switch (action.type) {
        case 'SESSION':
            return {
                ...state,
                loggedin: action.payload
            };
        case 'USER_LEVEL':
            return {
                ...state,
                userLevel: action.payload
            };
        default:
            return {
                ...state
            };
    };
};
const initialState = {
    loggedin: false
};

export default function Provider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(()=>{
        fetch('http://localhost:3001/api',{
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
            .then(res=>res.json())
            .then(data=>{
                if (data === true){
                    dispatch({type:'SESSION',payload:true})
                }
            })
    },[])

    return(
        <myContext.Provider value={{state, dispatch}}>
            {props.children}
        </myContext.Provider>
    )
}