import { User } from './components/user';

export const Users = ({ users }) => (
  <ul className="users__list">
    {users.map((user) => (
      <User
        key={`${user.id}--user`}
        name={user.name}
        email={user.email}
        phone={user.phone}
        id={user.id}
      />
    ))}
  </ul>
);
