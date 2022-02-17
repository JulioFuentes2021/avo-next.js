import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//       //! Aplica para todas la paginas
//     const initialProps = await Document.getInitialProps(ctx)
//     return { ...initialProps }
//   }

  render() {
    return (
      <Html>
        <Head>
            {/* 
                Para que sirve extender el documento:
                -Para poner un favicon
                -Para poner webfonts
                -Para agregar estilos externos
                -Agregar otros sxripts externos
            */}
        </Head>
        <body className="my-body-class">
          <Main />
          <NextScript />
          {/** Agregar elmentos externos fuera de la aplicaciion, esto no es muy comun */}
        </body>
      </Html>
    )
  }
}

export default MyDocument
