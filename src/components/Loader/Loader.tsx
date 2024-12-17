import { AppSpinner } from '@/components/Spinner';

import s from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={s.Loader}>
      <AppSpinner />
    </div>
  );
};
