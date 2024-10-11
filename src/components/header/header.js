import * as React from "react"
import * as styles from "./header.module.css"
import { CreativityIconSvg } from "../animationSvg/creativitySvg.tsx"

const Header = ({ siteTitle }) => (
  <header className={styles.headerBar}>
    <div>
      <h1 className={styles.headerTitle}>
        {siteTitle}
      </h1>
      <p className={styles.headerDescription}>
        Artist, Designer & Web Developer
      </p>
    </div>
    <div className={styles.headerIconContainer}>
      <CreativityIconSvg className={styles.headerIcon}/>
    </div>
  </header>
)

export default Header
