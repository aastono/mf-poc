import Document, { Html, Head, Main, NextScript } from "next/document"
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <script src="https://mf-core.vercel.app/_next/static/runtime/mfCoreRemoteEntry.js" />
        <script src="https://mf-pro.vercel.app/_next/static/runtime/mfProRemoteEntry.js" />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument