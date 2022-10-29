import { createContext, useReducer } from 'react'



export const ThemeContext = createContext();


const themeReducer = ( state, action ) => {
    switch (action.type) {
        case 'CHANGE_CARDS' :
            return { ...state, ctype: action.payload }
            case 'CHANGE_MODE' :
                return { ...state, mode: action.payload }
            default:
                return state

    }

}

export function ThemeProvider({ children }) {
  const [ state, dispatch ] =  useReducer(themeReducer, {
        ctype: 'grid1',
        mode: 'dream'
    })

    const changeCards = (ctype) => {
        dispatch({ type:'CHANGE_CARDS', payload: ctype})
    }

    const changeMode = (mode) => {
        dispatch({ type: 'CHANGE_MODE', payload: mode})
    }
    return (
        <ThemeContext.Provider  value={{ ...state, changeMode, changeCards}}> 
        { children }
        </ThemeContext.Provider>

    )
}