import { type RouteObject } from 'react-router-dom';
import { NotFoundPageLazy } from '@/pages/NotFoundPage';

import paths from './paths';
import { UsersPageLazy } from '@/pages/UsersPage/Users';
import { CreateUsersPageLazy } from '@/pages/UsersPage/Users/children/CreateUsersPge';
import { UpdateUsersPageLazy } from '@/pages/UsersPage/Users/children/UpdateUsersPage';

export const publicRoutes: RouteObject[] = [
  {
    path: '*',
    element: <NotFoundPageLazy />,
  },
  {
    path: paths.users,
    element: <UsersPageLazy />,
  },
  {
    path: paths.create_user,
    element: <CreateUsersPageLazy />,
  },
  {
    path: `${paths.update_user}/:id`,
    element: <UpdateUsersPageLazy />,
  },
];
