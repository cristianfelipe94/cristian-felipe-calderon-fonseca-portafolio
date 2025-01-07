import React from "react"
import * as styles from "./gallery.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ArtCard = ({ itemTitle, itemDescription, itemImage, index, cardLength }) => {
    let increasedIndex = index + 1;
    return (
        <div className={styles.galleryCard} style={{"--cardPosition": `${increasedIndex}`, "--quantityCards": `${cardLength}`}}>
            <p>{itemTitle}</p>
            <div className={styles.galleryImageContainer}>
                <GatsbyImage image={getImage(itemImage)} alt={itemTitle} className={styles.galleryImage}/>
            </div>
            <p>{itemDescription}</p>
        </div>
    );
};

export default ArtCard;
