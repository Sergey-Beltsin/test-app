import { wrapper } from '../store/store';
import { fetchPosts } from '../store/actions/main';
import { Posts } from '../common/components/posts';

const Home = () => (
  <section className="posts">
    <Posts />
  </section>
);

export default Home;

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  await store.dispatch(fetchPosts());
});
