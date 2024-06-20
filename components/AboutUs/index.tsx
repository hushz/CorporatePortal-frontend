import React, { useEffect, useRef } from 'react';
import styles from './AboutUs.module.scss';

export const AboutUs: React.FC = () => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (backgroundRef.current) {
        const speed = 0.5; // Adjust the speed here
        backgroundRef.current.style.transform = `translateY(${scrollTop * speed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <div className={styles.block_aboutUs}>
        <div ref={backgroundRef} className={styles.block_aboutUs__image}></div>
        <div className={styles.block_aboutUs__content}>
          <h1>Интернет-маркетинг с 2003 года:</h1>
          <p>
            <ul>
              <li>√ Разработка и поддержка сайтов </li>
              <li>√ Контекстная и медийная реклама </li>
              <li>√ Реклама в социальных сетях и SMM </li>
              <li>√ Реклама на Avito </li>
              <li>√ Видеореклама в Интернете </li>
              <li>√ Продвижение сайтов / SEO </li>
              <li>√ Аудит и консалтинг интернет-проектов </li>
              <li>√ Интернет-аналитика </li>
              <li>√ Дизайн: логотипы и брендбук </li>
            </ul>
            Входим в ТОП-100 разработчиков для промышленности в РФ и СНГ, среди более чем 5000 агентств
          </p>
        </div>
      </div>
    </>
  );
};
