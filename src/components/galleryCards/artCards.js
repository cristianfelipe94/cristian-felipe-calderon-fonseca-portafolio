import React from "react"
import * as styles from "./gallery.module.css"

const ArtCard = ({ itemTitle, itemDescription, itemImage }) => {
    return (
        <div className={styles.galleryCard}>
            <p>{itemTitle}</p>
            <img src={itemImage} alt={itemTitle} className={styles.galleryImage}/>
            <p>{itemDescription}</p>
        </div>
    );
};

export default ArtCard;
