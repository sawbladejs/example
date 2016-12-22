import Default from './Default';
import Users from './Users';
import UserList from './UserList';
import UserDetail from './UserDetail';

export default [
  {
    path: '/',
    render: ({ parent }) => new Default({ target: parent.refs.outlet }),
    teardown: component => component.teardown()
  },
  {
    path: '/users',
    render: ({ parent }) => new Users({ target: parent.refs.outlet }),
    teardown: component => component.teardown(),
    children: [
      {
        path: '/',
        render: ({ parent, params }) => new UserList({ target: parent.refs.outlet, data: { page: params.page } }),
        teardown: component => component.teardown()
      },
      {
        path: '/:id',
        render: ({ parent, params }) => new UserDetail({ target: parent.refs.outlet, data: { id: params.id } }),
        teardown: component => component.teardown()
      }
    ]
  }
];
