import { NavLink } from './components/nav-link';
import { PostsIcon, UsersIcon } from '../icons';

export const LeftAside = () => {
  const links = [
    {
      title: 'Posts',
      icon: <PostsIcon />,
      href: '/',
    }, {
      title: 'Users',
      icon: <UsersIcon />,
      href: '/users',
    },
  ];

  return (
    <aside className="left-aside">
      <ul className="left-aside__list">
        {links.map((item) => (
          <NavLink
            icon={() => item.icon}
            href={item.href}
          >
            {item.title}
          </NavLink>
        ))}
      </ul>
    </aside>
  );
};
