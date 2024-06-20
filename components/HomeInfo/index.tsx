import React from 'react';
import styles from './HomeInfo.module.scss';

export const HomeInfo: React.FC = () => {
  return (
    <>
      <div className={styles.block_info}>
        <div className={styles.block_info__leftSide}>
          <h1 className={styles.block_info__title}>ПРИВЕДЁМ КЛИЕНТОВ ИЗ ИНТЕРНЕТА</h1>
          <p className={styles.block_info__text}>
            НАША СПЕЦИАЛИЗАЦИЯ <br></br>
            <br></br>
            КОМПЛЕКСНОЕ ПРОДВИЖЕНИЕ ТОВАРОВ И УСЛУГ ПРОИЗВОДИТЕЛЕЙ, ОПТОВЫХ КОМПАНИЙ, ДИЛЕРОВ
          </p>
        </div>
        <div className={styles.block_info__rightSide}>
          <img src="https://amado-id.ru/uslugi/sozdanie-saytov/images/tild3136-3236-4438-b333-656236613164__image_173.png" />
        </div>
      </div>
      <div className={styles.block_info_list}>
        {' '}
        <li>
          <h3>Сайты</h3>
          <p>Разрабатываем и поддерживаем</p>
        </li>
        <li>
          <h3>Контекстная реклама</h3>Привлекаем клиентов, работаем со спросом
        </li>
        <li>
          <h3>Реклама в соцсетях</h3>Обеспечиваем охват целевой аудитории
        </li>
        <li>
          <h3>Аналитика</h3>Оцениваем эффективность рекламных каналов
        </li>
        <li>
          <h3>Дизайн</h3>Создаём фирменный стиль, буклеты и презентации
        </li>
      </div>
    </>
  );
};
