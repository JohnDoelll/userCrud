import { ReactNode } from 'react';

import { FlexWrapper } from '@/components/FlexWrapper';

import s from './TableContainer.module.css';

interface TableContainerProps {
  title?: string;
  extra?: ReactNode;
  children: ReactNode;
}

export const TableContainer = ({ title, extra, children }: TableContainerProps) => {
  return (
    <div className={s.TableContainer}>
      <header className={s.TableContainerHeader}>
        <h3>{title}</h3>
        <FlexWrapper>{extra}</FlexWrapper>
      </header>
      <div>{children}</div>
    </div>
  );
};
