import type { TablePaginationConfig } from 'antd';

export const DEFAULT_PAGINATION = {
  page: 1,
  size: 10,
};

export const TABLE_PAGINATION_CONFIG: TablePaginationConfig = {
  showSizeChanger: true,
  pageSizeOptions: [20, 30, 50, 100, 150, 200],
  size: 'small',
  defaultPageSize: DEFAULT_PAGINATION.size,
};
