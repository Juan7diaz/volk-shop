import { createContext, useState } from 'react'

export const UserContext = createContext()

export default function UserProvider(props) {
  const [user, setUser] = useState(true)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  )
}
