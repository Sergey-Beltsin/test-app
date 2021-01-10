// eslint-disable-next-line max-len
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */
import { useRef } from 'react';
import { useRouter } from 'next/router';

export const User = ({
  id,
  name,
  email,
  phone,
}) => {
  const phoneLinkRef = useRef(null);
  const emailLinkRef = useRef(null);
  const router = useRouter();

  return (
    <li
      onClick={(event) => phoneLinkRef.current && emailLinkRef.current
        && event.target !== phoneLinkRef.current && event.target !== emailLinkRef.current && router.push(`/?id=${id}`)}
      className="users__item"
    >
      <img
        src="https://place-hold.it/100x100"
        alt=""
        className="users__item__img"
      />
      <div className="users__item__inner">
        <h2 className="users__item__title">{name}</h2>
        <a
          href={`mailto:${email}`}
          className="users__item__email"
          ref={emailLinkRef}
        >
          {email}
        </a>
        <a
          href={`tel:${email}`}
          className="users__item__phone"
          ref={phoneLinkRef}
        >
          {phone}
        </a>
      </div>
    </li>
  );
};
