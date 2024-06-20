import React from 'react';
import styles from './ServicesInfo.module.scss';

export const ServicesInfo: React.FC = () => {
  return (
    <div className={styles.block_service}>
      <div className={styles.block_service__block}>
        <img
          className={styles.block_service__image}
          src="https://amado-id.ru/upload/iblock/a0c/a0c3d51036c079902f0e0b683adb615f.jpg"
        />
        <div className={styles.block_service__content}>
          <h3>СОЗДАНИЕ САЙТОВ</h3>
          <p>Комплексный подход к созданию сайтов вашего сайта</p>
        </div>
      </div>
      <div className={styles.block_service__block}>
        <img
          className={styles.block_service__image}
          src="https://amado-id.ru/upload/iblock/ba9/ba90b8e3eec732c1381a867efd3d3a18.jpg"
        />
        <div className={styles.block_service__content}>
          <h3>КОНТЕКСТНАЯ РЕКЛАМА</h3>
          <p>
            Всё «под ключ»: настройка рекламных объявлений, тестирование на эффективность, анализ целевых страниц,
            отслеживание поисковых трендов
          </p>
        </div>
      </div>
      <div className={styles.block_service__block}>
        <img
          className={styles.block_service__image}
          src="https://amado-id.ru/upload/iblock/d0b/d0bdcf6021dce32e44e8cb7103e304fa.jpg"
        />
        <div className={styles.block_service__content}>
          <h3>ТАРГЕТИРОВАННАЯ РЕКЛАМА</h3>
          <p>Увеличим продажи и узнаваемость вашего бренда с помощью социальных сетей</p>
        </div>
      </div>
      <div className={styles.block_service__block}>
        <img
          className={styles.block_service__image}
          src="https://amado-id.ru/upload/iblock/4ca/4ca8142aecee33c021fcb72a5214da33.png"
        />
        <div className={styles.block_service__content}>
          <h3>Продвижение на AVITO</h3>
        </div>
      </div>
      <div className={styles.block_service__block}>
        <img
          className={styles.block_service__image}
          src="https://amado-id.ru/upload/iblock/235/k1sex1uxw05qfomk0j8vi230143g2rf7.jpg"
        />
        <div className={styles.block_service__content}>
          <h3>
            ВНЕДРЕНИЕ CRM <br /> Битрикс.24
          </h3>
          <p>Готовая система для удаленной работы и автоматизации отдела продаж</p>
        </div>
      </div>
      <div className={styles.block_service__block}>
        <img
          className={styles.block_service__image}
          src="https://amado-id.ru/upload/iblock/465/4652b5dec92e5bfa622a21709dee80e1.jpg"
        />
        <div className={styles.block_service__content}>
          <h3>ВИДЕОРЕКЛАМА</h3>
          <p>Покажем вас всему миру</p>
        </div>
      </div>
      <div className={styles.block_service__block}>
        <img
          className={styles.block_service__image}
          src="https://amado-id.ru/upload/iblock/448/4484dc254c646b7991f44c95b97a45f8.jpg"
        />
        <div className={styles.block_service__content}>
          <h3>
            ЛОГОТИП, КОРПОРАТИВНЫЙ СТИЛЬ <br /> И БРЕНДБУК
          </h3>
          <p>Cоздание уникального индивидуального стиля и руководства по его использованию</p>
        </div>
      </div>
      <div className={styles.block_service__block}>
        <img
          className={styles.block_service__image}
          src="https://amado-id.ru/upload/iblock/f8f/f8f71bd43f005a400f15cda353b5ce2c.jpg"
        />
        <div className={styles.block_service__content}>
          <h3>
            ПОДДЕРЖКА <br /> И РАЗВИТИЕ САЙТОВ
          </h3>
          <p>
            В услугу поддержки могут входить копирайтинг, наполнение, обработка фотографий, услуги дизайнеров и
            программистов
          </p>
        </div>
      </div>
    </div>
  );
};
