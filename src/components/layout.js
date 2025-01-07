/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `0 var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            margin: `10px 0`,
            fontSize: `var(--font-sm)`
          }}
        >
          © {new Date().getFullYear()} &middot; Construido con
          {` `}
          <a href="https://www.gatsbyjs.com" className="footerLinks">GatsbyJS</a>
          {`, `}
          <a href="https://www.airtable.com" className="footerLinks">AirTable</a>
          {`, `}
          <a href="https://www.netlify.com" className="footerLinks">Netlify</a>
          {`.`}
          <br/>
          Cristian Felipe Calderón Fonseca.
        </footer>
      </div>
    </>
  )
}

export default Layout
