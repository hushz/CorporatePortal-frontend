import React from 'react';
import Link from 'next/link';
import { Button } from '@material-ui/core';
import {
  WhatshotOutlined as FireIcon,
  HomeOutlined as HomeIcon,
  AccessibilityOutlined as AccessibilityIcon,
  ShoppingBasketOutlined as ShoppingIcon,
  ContactsOutlined as ContactsIcon,
  PagesOutlined as BlogIcon,
  
} from '@material-ui/icons';
import styles from './LeftMenu.module.scss';
import { useRouter } from 'next/router';

const menu = [
  { text: 'Главная страница', icon: <HomeIcon />, path: '/' },
  { text: 'О нас', icon: <AccessibilityIcon />, path: '/aboutus' },
  { text: 'Услуги', icon: <ShoppingIcon />, path: '/services' },
  { text: 'Контакты', icon: <ContactsIcon />, path: '/contacts' },
  { text: 'Блог', icon: <BlogIcon />, path: '/blog' },
];

export const LeftMenu: React.FC = () => {
  
  const router = useRouter();

  return (
   <div className={styles.menu}>
      <ul>
        {menu.map((obj) => (
          <li key={obj.path}>
            <Link href={obj.path}>
              <a>
                <Button variant={router.asPath === obj.path ? 'contained' : 'text'}>
                  {obj.icon}
                  {obj.text}
                </Button>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
