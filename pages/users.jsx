import { initializeStore } from '../store/store';
import { fetchUsers } from '../store/actions/main';
import { Users } from '../common/components/users';

const UsersPage = ({ initialReduxState }) => (
  <section className="users">
    <Users users={initialReduxState.users} />
  </section>
);

export default UsersPage;

export async function getServerSideProps() {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  await dispatch(fetchUsers());

  return { props: { initialReduxState: reduxStore.getState() } };
}
