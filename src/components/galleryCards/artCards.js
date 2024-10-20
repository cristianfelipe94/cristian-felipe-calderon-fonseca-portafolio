import React from "react"
import * as styles from "./gallery.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ArtCard = ({ itemTitle, itemDescription, itemImage }) => {
    return (
        <div className={styles.galleryCard}>
            <p>{itemTitle}</p>
            <GatsbyImage image={getImage(itemImage)} alt={itemTitle} className={styles.galleryImage}/>
            <p>{itemDescription}</p>
        </div>
    );
};

export default ArtCard;
