import { useNavigate } from 'react-router-dom';

import { FormLoader } from '@/components/FormLoader';
import { ContractForm } from '@/components/forms/ContractForm';
import paths from '@/router/paths';
import { useUserStore } from '@/state/stores/userStore';
import { useState } from 'react';
import { User } from '@/state/types';

export default function ContractCreatePage() {
  const addUser = useUserStore((state) => state.addUser);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const submit = (data: User) => {
    setLoading(true);
    setTimeout(() => {
      addUser(data);
      setLoading(false);
      navigate(paths.users);
    }, 1000);
  };

  return (
    <FormLoader spinning={loading}>
      <ContractForm title='Add new user' onFinish={submit} />
    </FormLoader>
  );
}
