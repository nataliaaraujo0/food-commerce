import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (

            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Aladin&family=
                    Inter: wght @600; 700&family=Montserrat: wght @400; 700&family=Roboto:
                     wght @400; 500; 700&display=swap" rel="stylesheet"></link>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Aladin&family=Inter:wght@600;700&family=Montserrat:wght@400;700&family=Mulish&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"></link>
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>

        )
    }
}