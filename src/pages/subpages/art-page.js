import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ArtCard from "../../components/galleryCards/artCards";
import * as styles from "../../components/index.module.css"
import Seo from "../../components/seo"

const ArtPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allAirtable {
                nodes {
                    data {
                        description
                        title
                        image {
                            localFiles {
                                childImageSharp {
                                    gatsbyImageData(layout: CONSTRAINED)
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    if (!data || !data.allAirtable || !data.allAirtable.nodes) {
        return <p>Loading...</p>
    }

    const extractData = data.allAirtable.nodes.map((nodeData) => ({
        title: nodeData.data.title,
        description: nodeData.data.description,
        image: nodeData.data.image.localFiles[0],
    }));

    return (
        <div>
            <h1>Art</h1>
            <div className={styles.galleryContainer}>
                {extractData.map((cardItem, cardIndex) => (
                    <ArtCard key={cardIndex} itemTitle={cardItem.title} itemDescription={cardItem.description} itemImage={cardItem.image} index={cardIndex}/>
                ))}
            </div>
        </div>
    );
};

export const Head = () => (
    <Seo title="Cristian Felipe Calderón Fonseca: Art Page" />
);

export default ArtPage;
