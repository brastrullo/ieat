import React from 'react';
import styles from '../city/City.module.css';

const RestaurantCard = ({
  id,
  i,
  name,
  address,
  city,
  state,
  postal_code,
  area,
  price,
  url,
}) => {
  const showReserveBtn = (e) => {
    e.stopPropagation();
    console.log('asdfsss')
  }
  const img_src = `https://picsum.photos/seed/${id}/500/800`;
  return (
    <div className={styles.anchor} data-href={url} onMouseOver={showReserveBtn}>
      <li className={styles.item_card}>
        <div className={styles.image_bg}>
          <img className={styles.image} src={img_src} alt={name} />
        </div>
        <div className={styles.name_bg}>
          <p className={styles.name}><span>{name}</span></p>
          <ul className={styles.price_list}>
            {[...Array(price).keys()].map((item, i) =>
                <li className={styles.price_symbol} key={`price${i}`}>$</li>
            )}
          </ul>
        </div>
        <div className={styles.text_bg}>
          <p className={styles.area}>{area}</p>
            <div className={styles.address}>
              <p className={styles.line_1}>{`${address}, ${city}`}</p>
              <p className={styles.line_2}>{`${state}, ${postal_code}`}</p>
            </div>
            <a className={styles.reserve_btn} href={url}>Reserve a table</a>
        </div>
      </li>
    </div>
  )
}
export default RestaurantCard;