import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <h1 style={{ textAlign: "center", fontSize: "50px", margin: "40px 0" }}>
      404: Page Not Found
    </h1>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
