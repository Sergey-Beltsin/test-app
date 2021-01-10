import { Posts } from '../common/components/posts';
import { initializeStore } from '../store/store';
import { fetchPosts } from '../store/actions/main';

export default function Home({ initialReduxState }) {
  return (
    <section className="posts">
      <Posts posts={initialReduxState.posts} />
    </section>
  );
}

export async function getServerSideProps() {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  await dispatch(fetchPosts());

  return { props: { initialReduxState: reduxStore.getState() } };
}
