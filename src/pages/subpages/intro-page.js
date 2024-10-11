import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../../components/seo"
import * as styles from "../../components/index.module.css"

const IntroPage = () => (
    <div>
        <p>Welcome: Intro Page</p>
        <div>
            <StaticImage
                src="../../images/avatar-2.png"
                loading="eager"
                width={250}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
            />
        </div>
    </div>
)

export const Head = () => <Seo title="Cristian Felipe Calderón Fonseca: Intro Page" />

export default IntroPage