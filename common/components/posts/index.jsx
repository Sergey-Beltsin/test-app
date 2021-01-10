import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { Post } from './components/post';
import { fetchComments } from '../../../store/actions/main';

export const Posts = () => {
  const [openedComments, setOpenedComments] = useState([]);
  const [loadingId, setLoadingId] = useState(-1);
  const posts = useSelector((state) => state.posts);
  const comments = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  const { id } = useRouter().query;

  // eslint-disable-next-line consistent-return
  const handleComments = async (isOpen, i) => {
    if (isOpen) {
      if (!comments.find((item) => item.postId === i)) {
        setLoadingId(i);
        await dispatch(fetchComments(i));
        setLoadingId(-1);
      }
      setOpenedComments((prevState) => [...prevState, i]);
    }
    const postId = openedComments.findIndex((item) => item === i);

    setOpenedComments((prevState) => [
      ...prevState.slice(0, postId),
      ...prevState.slice(postId + 1),
    ]);
  };

  return (
    <>
      {posts.map((post) => (id ? post.userId === +id && (
        <Post
          key={`${post.id}--post`}
          title={post.title}
          content={post.body}
          isCommentsOpen={openedComments.map((item) => item === post.id).find((item) => item)}
          handleComments={handleComments}
          loadingId={loadingId}
          id={post.id}
        />
      ) : (
        <Post
          key={`${post.id}--post`}
          title={post.title}
          content={post.body}
          isCommentsOpen={openedComments.map((item) => item === post.id).find((item) => item)}
          handleComments={handleComments}
          loadingId={loadingId}
          id={post.id}
        />
      )))}
    </>
  );
};
