import { ReactNode } from 'react';

import s from './FormItemWrapper.module.css';

interface FormItemWrapperProps {
  grid?: number;
  children?: ReactNode;
}

export const FormItemWrapper = ({ grid = 1, children }: FormItemWrapperProps) => {
  return (
    <div data-grid={grid} className={s.FormItemWrapper}>
      {children}
    </div>
  );
};
