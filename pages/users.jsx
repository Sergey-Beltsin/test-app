import { wrapper } from '../store/store';
import { fetchUsers } from '../store/actions/main';
import { Users } from '../common/components/users';

const UsersPage = () => (
  <section className="users">
    <Users />
  </section>
);

export default UsersPage;

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  await store.dispatch(fetchUsers());
});
