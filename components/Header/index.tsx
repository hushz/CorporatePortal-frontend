import React, { useEffect } from 'react';
import Link from 'next/link';
import { Paper, Button, IconButton, Avatar, List, ListItem } from '@material-ui/core';
import {
  ExitToAppOutlined as ExitIcon,
  SearchOutlined as SearchIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  ExpandMoreOutlined as ArrowBottom,
  TrendingUpOutlined as TrendingIcon,
  NotificationsNoneOutlined as NotificationIcon,
  AccountCircleOutlined as UserIcon,
} from '@material-ui/icons';

import styles from './Header.module.scss';
import { AuthDialog } from '../AuthDialog';
import { useAppSelector } from '../../redux/hooks';
import { selectUserData } from '../../redux/slices/user';
import { PostItem } from '../../utils/api/types';
import { Api } from '../../utils/api';
import { destroyCookie } from 'nookies';
import { useRouter } from 'next/router';
export const Header = () => {
  const userData = useAppSelector(selectUserData);
  const [authVisible, setAuthVisible] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [posts, setPosts] = React.useState<PostItem[]>([]);
  const router = useRouter();

  const openAuthDialog = () => {
    setAuthVisible(true);
  };

  const closeAuthDialog = () => {
    setAuthVisible(false);
  };

  const exitProfile = () => {
    destroyCookie(null, 'rtoken', {
      path: '/',
    });
    router.push('/');
  };
  React.useEffect(() => {
    if (authVisible && userData) {
      setAuthVisible(false);
    }
  }, [authVisible, userData]);

  const handleChangeInput = async (e) => {
    setSearchValue(e.target.value);
    try {
      const { items } = await Api().post.search({ title: e.target.value });
      setPosts(items);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <div>
      <Paper classes={{ root: styles.root }} elevation={0}>
        <div className={styles.header_nav}>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Link href="/">
            <a>
              <div>
                <svg width="144" height="55" viewBox="0 0 277 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M276.714 35.0693C276.714 46.8448 267.236 54.791 256.035 54.791C244.642 54.791 235.164 46.9406 235.164 35.0693C235.164 23.3895 244.546 15.4434 256.035 15.4434C267.236 15.4434 276.714 23.2937 276.714 35.0693ZM265.129 35.0693C265.129 29.3251 260.726 25.3999 256.035 25.3999C251.152 25.3999 246.748 29.2294 246.748 35.0693C246.748 40.9092 251.152 44.7386 256.035 44.7386C260.63 44.6429 265.129 40.9092 265.129 35.0693Z"
                    fill="black"
                  ></path>
                  <path
                    d="M176.667 53.7379H164.7V50.6744C161.828 53.2592 157.903 54.6953 153.02 54.6953C142.968 54.6953 134.543 46.7492 134.543 34.9736C134.543 23.2938 142.968 15.252 153.02 15.252C157.903 15.252 161.828 16.7837 164.7 19.2729V16.3051H176.763V53.7379H176.667ZM164.7 35.0694C164.7 29.3252 160.392 25.4 155.509 25.4C150.339 25.4 146.414 29.3252 146.414 35.0694C146.414 40.8135 150.244 44.7387 155.509 44.7387C160.392 44.643 164.7 40.8135 164.7 35.0694Z"
                    fill="black"
                  ></path>
                  <path
                    d="M126.983 30.2826V53.6422H115.016V32.8675C115.016 28.6551 112.239 25.9744 108.697 25.9744C104.293 25.9744 101.326 29.1337 101.326 35.3566V53.6422H89.2628V32.8675C89.2628 28.6551 86.4864 25.9744 82.8485 25.9744C78.5403 25.9744 75.6682 29.1337 75.6682 35.3566V53.6422H63.6055V18.6985C63.6055 17.4539 64.7543 16.3051 65.9989 16.3051H75.6682V19.7516C78.1574 16.8795 81.8911 15.1562 86.7736 15.1562C91.9434 15.1562 96.5387 17.4539 99.1236 21.4748C102.091 17.6454 106.687 15.1562 112.431 15.1562C120.569 15.252 126.983 21.2834 126.983 30.2826Z"
                    fill="black"
                  ></path>
                  <path
                    d="M42.5417 53.7379L38.9995 44.7387H17.746L14.2038 53.7379H0.992188L21.384 5.58259C21.767 4.62523 22.8201 3.95508 23.7774 3.95508H32.9681C34.1169 3.95508 34.9785 4.52949 35.3615 5.58259L55.8491 53.7379H42.5417ZM28.4685 17.7411L22.0542 34.112H34.8828L28.4685 17.7411Z"
                    fill="black"
                  ></path>
                  <path
                    d="M227.024 53.7373H214.962V50.6737C212.09 53.2586 208.164 54.6946 203.282 54.6946C193.229 54.6946 184.805 46.7485 184.805 34.973C184.805 23.2931 193.229 15.2513 203.282 15.2513C208.164 15.2513 212.09 16.7831 214.962 19.2722V0.220703H227.024V53.7373ZM214.962 35.0687C214.962 29.3245 210.653 25.3993 205.771 25.3993C200.601 25.3993 196.676 29.3245 196.676 35.0687C196.676 40.8129 200.505 44.7381 205.771 44.7381C210.558 44.6423 214.962 40.8129 214.962 35.0687Z"
                    fill="black"
                  ></path>
                </svg>
              </div>
            </a>
          </Link>
          <div className={styles.searchBlock}>
            <SearchIcon />
            <input value={searchValue} onChange={handleChangeInput} placeholder="Поиск" />
            {posts.length > 0 && (
              <Paper className={styles.searchBlockPopup}>
                <List>
                  {posts.map((obj) => (
                    <Link key={obj.id} href={`/news/${obj.id}`}>
                      <a>
                        <ListItem button>{obj.title}</ListItem>
                      </a>
                    </Link>
                  ))}
                </List>
              </Paper>
            )}
          </div>
          {userData?.fullName === 'Кирилл Шмидт' ? (
            <Link href="/write">
              <a>
                <Button variant="contained" className={styles.penButton}>
                  Новая запись
                </Button>
              </a>
            </Link>
          ) : (
            <></>
          )}
        </div>
        <div className="d-flex align-center">
          <IconButton>
            <MessageIcon />
          </IconButton>
          <IconButton>
            <NotificationIcon />
          </IconButton>
          {userData?.fullName === 'Кирилл Шмидт' ? (
            <IconButton>
              <TrendingIcon />
              <Link href="/rating">Рейтинг</Link>
            </IconButton>
          ) : (
            <></>
          )}

          {userData?.fullName ? (
            <>
              <a className="d-flex align-center">
                <Avatar
                  className={styles.avatar}
                  alt="Remy Sharp"
                  src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
                />

                <div className={userData?.fullName === 'Кирилл Шмидт' ? styles.admin : styles.client}>
                  {userData?.fullName}
                </div>
              </a>
              <div className={styles.exitButton} onClick={exitProfile}>
                <IconButton>
                  <ExitIcon />
                </IconButton>
                Выйти
              </div>
            </>
          ) : (
            <div className={styles.loginButton} onClick={openAuthDialog}>
              <UserIcon />
              Войти
            </div>
          )}
        </div>
        <AuthDialog onClose={closeAuthDialog} visible={authVisible} />
      </Paper>
    </div>
  );
};
