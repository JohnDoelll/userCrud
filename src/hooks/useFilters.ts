import { useState } from 'react';

import { DEFAULT_PAGINATION } from '@/config/const';

export interface IPaginationOptions {
  page: number;
  size: number;
}

export function useFilters() {
  const [pagination, setPagination] = useState<IPaginationOptions>(DEFAULT_PAGINATION);
  return { pagination, setPagination };
}
