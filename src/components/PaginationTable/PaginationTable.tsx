import type { TablePaginationConfig } from 'antd';
import type { AnyObject } from 'antd/es/_util/type';
import type { TableRowSelection } from 'antd/es/table/interface';
import { useMemo } from 'react';

import { CustomTable } from '@/components/CustomTable';
import { CustomTableProps } from '@/components/CustomTable/CustomTable';
import { TABLE_PAGINATION_CONFIG } from '@/config/const';
import { IPaginationOptions } from '@/hooks/useFilters';

interface PaginationTableProps<T extends AnyObject = AnyObject>
  extends Omit<CustomTableProps<T>, 'pagination'> {
  pagination: IPaginationOptions;
  totalElements?: number;
  setPagination: (options: IPaginationOptions) => void;
}

export function PaginationTable<T extends AnyObject = AnyObject>({
  pagination,
  totalElements,
  setPagination,
  ...rest
}: PaginationTableProps<T>) {
  const rowSelection: TableRowSelection<T> = {
    columnTitle: '№',
    renderCell: (_, __, index) => {
      return <span>{index + 1 + (pagination.page - 1) * pagination.size}</span>;
    },
  };

  const tablePagination: TablePaginationConfig = useMemo(() => {
    return Object.assign(
      {
        onChange: (page: number, size: number) => {
          setPagination({ page, size });
        },
        total: totalElements,
        pageSize: pagination.size,
        current: pagination.page,
        showTotal: () => `Jami ${totalElements} ta`,
      },
      TABLE_PAGINATION_CONFIG,
    );
  }, [totalElements, pagination.size, pagination.page, setPagination]);

  return <CustomTable rowSelection={rowSelection} pagination={tablePagination} {...rest} />;
}
