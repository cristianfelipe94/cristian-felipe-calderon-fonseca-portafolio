import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../../components/seo"
import * as styles from "../../components/index.module.css"
import { AvatarSVG } from "../../components/animationSvg/avatarSvg.tsx"

const IntroPage = () => (
    <div>
        <div className={styles.avatarContainer}>
            <AvatarSVG className={styles.avatarSVG}/>
        </div>
    </div>
)

export const Head = () => <Seo title="Cristian Felipe Calderón Fonseca: Intro Page" />

export default IntroPage