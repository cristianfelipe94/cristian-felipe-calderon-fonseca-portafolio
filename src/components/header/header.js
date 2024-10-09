import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import * as styles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={styles.headerBar}>
    <Link to="/" className={styles.headerLink}>
      {siteTitle}
    </Link>
    <StaticImage
      alt="Cristian Felipe Logo"
      src="../../images/icon-art-100.png"
      className={styles.headerIcon}
      placeholder="blurred"
      layout="fixed"
      width={50}
    />
  </header>
)

export default Header
