import React, {useState} from "react"

import ArtPage from "./subpages/art-page"
import CodingPage from "./subpages/coding-page"
import ExperiencePage from "./subpages/experience-page"
import IntroPage from "./subpages/intro-page"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const moreLinks = [
  {
    text: "Home",
    url: "0",
  },
  {
    text: "Art",
    url: "1",
  },
  {
    text: "Coding",
    url: "2",
  },
  {
    text: "Experience",
    url: "3",
  },
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
  },
];

const IndexPage = () => {
  const pages = [<IntroPage/>,<ArtPage/>,<CodingPage/>,<ExperiencePage/>];
  const [activePage, setActivePage] = useState(0);
  const changePage = (indexPage) => {
    setActivePage(indexPage);
  };
  return (
    <Layout>
      <div className={styles.textCenter}>
        <div className={styles.carouselContent}>
          {pages[activePage]}
        </div>
      </div>

      <div className={styles.menuContainer}>
        {moreLinks.map((link, i) => {
          if (["Home","Art","Coding","Experience"].includes(link.text)) {
            return (
              <React.Fragment key={link.text}>
                <button className={[styles.buttonMenu, styles.buttonPages].join(' ')} onClick={() => changePage(link.url)}>{link.text}</button>
              </React.Fragment>
            )
          } else {
            return (
              <React.Fragment key={link.text}>
                <a className={[styles.buttonMenu, styles.buttonSocial].join(' ')} href={link.url} target="_blank" rel="noreferrer">{link.text}</a>
              </React.Fragment>
            )
          }
        })}
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />

export default IndexPage
