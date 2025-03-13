import React from 'react';
import styles from './CardSkeleton.module.scss';

type Props = {
  fullwidth?: boolean;
};

export const CardSkeleton: React.FC<Props> = ({ fullwidth }) => {
  return (
    <article className={styles.card} style={fullwidth ? { width: '100%' } : {}}>
      <div className={styles.card__container}>
        <div className={styles.card__link__photoLink}>
          <div className={styles.card__link__photo}></div>
        </div>
        <div className={styles.card__link__nameLink}></div>
        <div className={styles.card__prices}>
          <div className={styles.card__price}></div>
        </div>
        <div className={styles.card__separator}></div>
        <ul className={styles.card__list}>
          <li className={styles.card__list__item}>
            <p className={styles.card__list__name}></p>
            <p className={styles.card__list__value}></p>
          </li>
          <li className={styles.card__list__item}>
            <p className={styles.card__list__name}></p>
            <p className={styles.card__list__value}></p>
          </li>
          <li className={styles.card__list__item}>
            <p className={styles.card__list__name}></p>
            <p className={styles.card__list__value}></p>
          </li>
        </ul>
        <div className={styles.card__buttons}>
          <button className={styles.card__button__add}></button>
          <button className={styles.card__button__favorite}></button>
        </div>
      </div>
    </article>
  );
};
