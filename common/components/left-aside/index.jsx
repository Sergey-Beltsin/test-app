import { useState, useRef } from 'react';

import { NavLink } from './components/nav-link';
import { PostsIcon, UsersIcon } from '../icons';
import { useOutsideAlerter } from '../../hooks';

export const LeftAside = () => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => setIsOpen(false), 'left-aside__btn');

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
    <>
      <button
        className={`left-aside__btn${isOpen ? ' left-aside__btn--opened' : ''}`}
        aria-label="open menu"
        type="button"
        onClick={() => setIsOpen((prevState) => !prevState)}
      />
      <aside
        className={`left-aside${isOpen ? ' left-aside--opened' : ''}`}
        ref={wrapperRef}
      >
        <nav className="left-aside__nav">
          <ul className="left-aside__list">
            {links.map((item, i) => (
              <NavLink
                icon={() => item.icon}
                href={item.href}
                key={`${item.title}-${i}--nav-link`}
                setIsOpen={setIsOpen}
              >
                {item.title}
              </NavLink>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};
