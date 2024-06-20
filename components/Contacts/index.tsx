import React from 'react';
import styles from './Contacts.module.scss';

export const Contacts: React.FC = () => {
  return <>
    <ul className={styles.block_contacts}>
        <li>+7 (342) 247-95-00</li>
        <li><a href="https://amado-id.ru/?utm_source=vk">VK</a></li>
        <li><a href="https://www.youtube.com/channel/UCGrAV-AFprmUxI1zfsypt3A">YouTube</a></li>
        <li>E-mail: amadowebstudio@mail.ru</li>
        <li>Местоположение: Куйбышева, 82/1, Пермь</li>
    </ul>
  </>;
};
