import React, { useState } from 'react'

export const myContext = React.createContext()

const Provider = props => {
  const [theme, setTheme] = useState("")

  return (
    <myContext.Provider value={{
      theme,
      changeTheme: (newTheme) => setTheme(newTheme)
    }}>
      {props.children}
    </myContext.Provider>
  )
}

export default ({ element }) => (
  <Provider>
    {element}
  </Provider>
)