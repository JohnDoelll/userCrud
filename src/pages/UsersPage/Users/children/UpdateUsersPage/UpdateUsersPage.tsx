import { useNavigate, useParams } from 'react-router-dom';

import { ContractForm } from '@/components/forms/ContractForm';
import { useEffect, useState } from 'react';
import { useUserStore } from '@/state/stores/userStore';
import { FormLoader } from '@/components/FormLoader';
import { User } from '@/state/types';
import paths from '@/router/paths';

export default function UpdateContractPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User>();
  const { users, updateUser } = useUserStore((state) => state);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const findUser = users.find((item) => item.id === id);
      setUser(findUser);
    }
  }, [user, id]);

  const submit = (data: User) => {
    setLoading(true);
    id &&
      setTimeout(() => {
        updateUser(id, data);
        setLoading(false);
        navigate(paths.users);
      }, 500);
  };

  return (
    <FormLoader spinning={loading}>
      <ContractForm title='Edit user' onFinish={submit} initialValues={user} />
    </FormLoader>
  );
}
