import { Table, type TableProps } from 'antd';
import type { AnyObject } from 'antd/es/_util/type';

export interface CustomTableProps<T extends AnyObject = AnyObject> extends TableProps<T> {}

export function CustomTable<T extends AnyObject = AnyObject>({ ...props }: CustomTableProps<T>) {
  return <Table scroll={{ x: true }} bordered size='small' rowKey='id' {...props} />;
}
