import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

export const RightAside = () => {
  const { id } = useRouter().query;
  if (!id) return null;
  const users = useSelector((state) => state.users);
  console.log(users);

  // eslint-disable-next-line consistent-return
  return (
    <aside className="right-aside">
      <img
        src="https://place-hold.it/100x100"
        alt=""
        className="right-aside__img"
      />
      <div className="right-aside__name" />
    </aside>
  );
};
