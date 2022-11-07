import { createContext, useReducer } from 'react'



export const ThemeContext = createContext();


const themeReducer = ( state, action ) => {
    switch (action.type) {
         case 'CHANGE_CARDS' :
             return { ...state, ctype: action.payload }
            case 'CHANGE_MODE' :
                return { ...state, mode: action.payload }
                case 'CHANGE_BACK' :
                return { ...state, mode: action.payload }
            default:
                return state

    }

}

export function ThemeProvider({ children }) {
  const [ state, dispatch ] =  useReducer(themeReducer, {
        ctype: 'dre',
        mode: 'dream',
        back: '1'
    })

    const changeCards = (ctype) => {
        dispatch({ type:'CHANGE_CARDS', payload: ctype})
    }

    const changeMode = (mode) => {
        dispatch({ type: 'CHANGE_MODE', payload: mode})
    }

    const changeBack = (back) => {
        dispatch({ type: 'CHANGE_BACK', payload: back})
    }
    return (
        <ThemeContext.Provider  value={{ ...state, changeMode,changeCards, changeBack }}> 
        { children }
        </ThemeContext.Provider>

    )
}

