import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./header.module.css"
import { CreativityIconSvg } from "../animationSvg/creativitySvg.tsx"

const Header = ({ siteTitle }) => (
  <header className={styles.headerBar}>
    <Link to="/" className={styles.headerLink}>
      {siteTitle}
    </Link>
    <div className={styles.headerIconContainer}>
      <CreativityIconSvg className={styles.headerIcon}/>
    </div>
  </header>
)

export default Header
