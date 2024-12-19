import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Flex, Modal, Tooltip } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LinkButton } from '@/components/LinkButton';
import { PaginationTable } from '@/components/PaginationTable';
import { TableContainer } from '@/components/TableContainer';
import { useFilters } from '@/hooks/useFilters';
import paths from '@/router/paths';
import { useUserStore } from '@/state/stores/userStore';
import { User } from '@/state/types';

export default function UsersPage() {
  const navigate = useNavigate();
  const users = useUserStore((state) => state.users);
  const deleteUser = useUserStore((state) => state.deleteUser);
  const [loadingTable, setLoadingTable] = useState<boolean>(false);
  const [loadingDelete, setLoadingDelete] = useState<boolean>(false);
  const { pagination, setPagination } = useFilters();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [itemId, setItemId] = useState<string>();

  useEffect(() => {
    setLoadingTable(true);
    setTimeout(() => {
      setLoadingTable(false);
    }, 500);
  }, []);

  const deleteItem = (id: string) => {
    setItemId(id);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (itemId) {
      setLoadingDelete(true);
      setTimeout(() => {
        deleteUser(itemId);
        setLoadingDelete(false);
        setIsModalOpen(false);
      }, 500);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns: ColumnsType<User> = [
    {
      title: 'Phone number',
      dataIndex: 'phoneNumber',
      align: 'center',
    },
    {
      title: 'User info',
      dataIndex: 'userInfo',
      align: 'center',
    },
    {
      width: 100,
      align: 'center',
      title: 'Actions',
      render: (_, record) => (
        <Flex gap={8} justify='center'>
          <Tooltip title='Edit user'>
            <Button
              type='dashed'
              icon={<EditOutlined />}
              onClick={() => navigate(`${paths.update_user}/${record.id}`)}
            />
          </Tooltip>
          <Tooltip placement='top' title='Delete user'>
            <Button icon={<DeleteOutlined />} onClick={() => deleteItem(record.id)} />
          </Tooltip>
        </Flex>
      ),
    },
  ];

  return (
    <TableContainer
      title='Users'
      extra={
        <>
          <LinkButton to={paths.create_user} type='primary' icon={<PlusOutlined />}>
            Create user
          </LinkButton>
        </>
      }
    >
      <PaginationTable
        columns={columns}
        dataSource={users}
        loading={loadingTable}
        scroll={{ x: true, y: 600 }}
        totalElements={users?.length}
        setPagination={setPagination}
        pagination={pagination}
      />

      <Modal
        title={`Do you want to delete the element with id ${itemId}`}
        open={isModalOpen}
        onOk={handleOk}
        confirmLoading={loadingDelete}
        okText='Yes'
        cancelText='No'
        onCancel={handleCancel}
      />
    </TableContainer>
  );
}
