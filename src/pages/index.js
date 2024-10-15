import React, { useState } from "react"

import ArtPage from "./subpages/art-page"
import CodingPage from "./subpages/coding-page"
import ExperiencePage from "./subpages/experience-page"
import IntroPage from "./subpages/intro-page"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const navigationButtons = [
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
  {
    text: "Instagram",
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
  const pages = [<IntroPage />, <ArtPage />, <CodingPage />, <ExperiencePage />];
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
        <div className={styles.containerInternalLinks}>
          {navigationButtons.map((internalLink, i) => {
            if (["Home", "Art", "Coding", "Experience"].includes(internalLink.text)) {
              return (
                <React.Fragment key={internalLink.text}>
                  <button className={[styles.buttonMenu, styles.buttonPages].join(' ')} onClick={() => changePage(internalLink.url)}>{internalLink.text}</button>
                </React.Fragment>
              )
            }
          })}
        </div>
        <br/>
        <div className={styles.containerSocialLinks}>
          {navigationButtons.map((socialLink, i) => {
            if (["Instagram", "Github", "Portfolio V1"].includes(socialLink.text)) {
              return (
                <React.Fragment key={socialLink.text}>
                  <a className={[styles.buttonMenu, styles.buttonSocial].join(' ')} href={socialLink.url} target="_blank" rel="noreferrer">{socialLink.text}</a>
                </React.Fragment>
              )
            }
          })}
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />

export default IndexPage
