import styles from './App.module.scss';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { useEffect } from 'react';
import { loadingSlice } from './features/loadingSlice';
import { useAppDispatch } from './app/hooks';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(
      () => dispatch(loadingSlice.actions.setLoading(false)),
      1000,
    );

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.App}>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};
