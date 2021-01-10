// eslint-disable-next-line max-len
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */
import Link from 'next/link';
import { useRouter } from 'next/router';

export const NavLink = ({
  icon,
  href,
  setIsOpen,
  children,
}) => {
  const router = useRouter();

  return (
    <li
      onClick={() => setIsOpen(false)}
      className={`left-aside__item${href === router.pathname ? ' left-aside__item--active' : ''}`}
    >
      <div className="left-aside__img">
        {icon()}
      </div>
      <Link href={href}>
        <a className="left-aside__link">
          {children}
        </a>
      </Link>
    </li>
  );
};
