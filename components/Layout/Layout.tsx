import React from 'react'
import Navbar from '../Navbar/Navbar'

const Layout: React.FC = ({ children }) => {//Algo que react puede renderizar
  return (
    <div>
        <Navbar />
            {children}
        <footer>This is the footer</footer>
    </div>
  )
}

export default Layout