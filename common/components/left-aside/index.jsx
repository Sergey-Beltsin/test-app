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
      <nav className="left-aside__nav">
        <ul className="left-aside__list">
          {links.map((item, i) => (
            <NavLink
              icon={() => item.icon}
              href={item.href}
              key={`${item.title}-${i}--nav-link`}
            >
              {item.title}
            </NavLink>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
