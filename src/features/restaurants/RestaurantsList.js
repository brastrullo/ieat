import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import {
  selectList,
} from '../city/citySlice';
import styles from '../city/City.module.css';

const RestaurantCard = React.lazy(() => import('./RestaurantCard'));

const  RestaurantsList = () => {
  const list = useSelector(selectList);
  return (
    <ul className={styles.restaurant_list}>
      {
        list.map((item, i) => {
          const {
            id,
            name,
            address,
            city,
            state,
            postal_code,
            area,
            price,
            reserve_url,
            mobile_reserve_url,
          } = item;
          // const img = image_url;
          const isMobile = false;
          const url = isMobile ? mobile_reserve_url : reserve_url;
          return (
            <Suspense key={`l${i}`} fallback={<div>Loading...</div>}>
              <RestaurantCard
                id={id}
                i={i}
                name={name}
                address={address}
                city={city}
                state={state}
                postal_code={postal_code}
                area={area}
                price={price}
                url={url}
              />
            </Suspense>
          )
        })
      }
    </ul>
  )
}

export default RestaurantsList;
