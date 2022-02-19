import React from 'react'
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';
// import hell - dot hell =. SE resuelve con path aliases
// import styles from './layout.module.css';

const Layout: React.FC = ({ children }) => {//Algo que react puede renderizar
  return (
    <div>
        <Navbar />
          {children}
          <Footer />
        {/* <style jsx>{`
          div {
            color: green
          } 
        `}</style> */}
    </div>
  )
}

export default Layout