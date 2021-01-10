import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from '../../../store/actions/main';
import { useOutsideAlerter } from '../../hooks';

export const RightAside = () => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => setIsOpen(false), 'right-aside__btn-no-touchable');

  const { id } = useRouter().query;
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  if (!id) return null;

  const getUsers = async () => {
    await dispatch(fetchUsers());
  };
  if (!users.length) getUsers();

  const user = users.find((item) => item.id === +id);
  if (!user) return null;

  // eslint-disable-next-line consistent-return
  return (
    <>
      <button
        className="right-aside__btn right-aside__btn-no-touchable"
        aria-label="open information menu"
        type="button"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <span className="right-aside__btn-no-touchable" />
      </button>
      <aside
        ref={wrapperRef}
        className={`right-aside${isOpen ? ' right-aside--opened' : ''}`}
      >
        <div className="right-aside__wrapper">
          <img
            src="https://place-hold.it/100x100"
            alt=""
            className="right-aside__img"
          />
          <span className="right-aside__name">
            {user.name}
          </span>
        </div>
        <a
          href={`mailto:${user.email}`}
          className="right-aside__email"
        >
          {user.email}
        </a>
        <a
          href={`tel:${user.phone}`}
          className="right-aside__phone"
        >
          {user.phone}
        </a>
      </aside>
    </>
  );
};
