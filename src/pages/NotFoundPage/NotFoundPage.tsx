import { Button } from 'antd';
import { Link } from 'react-router-dom';

import error_404 from '@/assets/icons/error404.svg';
import paths from '@/router/paths';

import s from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <div className={s.NotFoundPage}>
      <article>
        <h1>Oops!</h1>
        <p>So’ralgan sahifa topilmadi.</p>
        <Link to={paths.home}>
          <Button type='primary'>Bosh sahifaga qaytish</Button>
        </Link>
        <img src={error_404} alt='error-404' />
      </article>
    </div>
  );
}
