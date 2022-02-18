import React from 'react'
import Navbar from '@components/Navbar/Navbar';
// import hell - dot hell =. SE resuelve con path aliases
// import styles from './layout.module.css';

const Layout: React.FC = ({ children }) => {//Algo que react puede renderizar
  return (
    <div>
        <Navbar />
            {children}
        <footer>This is the footer</footer>
        
        <style jsx>{`
          div {
            color: green
          } 
        `}</style>
    </div>
  )
}

export default Layout