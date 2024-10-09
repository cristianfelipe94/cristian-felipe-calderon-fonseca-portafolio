import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Arte",
    url: "",
    description:
      "Dibujos hechos a mano y el proceso creativo.",
  },
  {
    text: "Código",
    url: "",
    description:
      "Páginas, aplicaciones y juegos creados con código.",
  },
  {
    text: "Herramientas",
    url: "",
    description:
      "Excel, Word, Thunkable y otros projectos creativos.",
  },
]

const samplePageLinks = [
  {
    text: "Arte",
    url: "page-2",
    badge: false,
    description:
      "Una página para mostrar mi arte.",
  },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Instagram",
    url: "https://www.instagram.com/stoned_christ/"
  },
  {
    text: "Github",
    url: "https://github.com/cristianfelipe94",
  },
  {
    text: "Portfolio V1",
    url: "https://cristianfelipe94.github.io/Portfolio-Online/",
  }
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <div>
        <StaticImage
          src="../images/avatar-2.png"
          loading="eager"
          width={250}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
      </div>
      <h1>
        Hola soy <b>Felipe!</b>
      </h1>
      <p className={styles.intro}>
        <b>Más de:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text}
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
