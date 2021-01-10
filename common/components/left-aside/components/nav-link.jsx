import Link from 'next/link';
import { useRouter } from 'next/router';

export const NavLink = ({ icon, href, children }) => {
  const router = useRouter();

  return (
    <li className={`left-aside__item${href === router.pathname ? ' left-aside__item--active' : ''}`}>
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
