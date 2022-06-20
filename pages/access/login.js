import { useContext } from 'react'
import { Login, Navbar } from '../../components'
import { UserContext } from '../../context/UserProvider'

const register = () => {
  const { user } = useContext(UserContext)

  return (
    <>
      <Navbar />
      <Login />
      {user ? <p>si existe</p> : <p>no existe</p>}
    </>
  )
}

export default register
