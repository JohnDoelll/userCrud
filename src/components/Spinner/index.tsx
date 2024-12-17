import React from 'react';

import s from './Spinner.module.css';

export const Spinner = () => {
  return (
    <div className={s.SpinnerContainer}>
      <AppSpinner />
    </div>
  );
};

export const AppSpinner = React.memo(() => {
  return (
    <div className={s.Spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
});
