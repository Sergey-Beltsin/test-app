import { useSelector } from 'react-redux';
import { CommentsIcon } from '../../../icons';
import { Loading } from '../../../loading';

export const Post = ({
  title,
  content,
  isCommentsOpen,
  handleComments,
  id,
  loadingId,
}) => {
  const loading = useSelector((state) => state.commentsLoading);

  return (
    <article className="posts__item">
      <div className="posts__item__inner">
        <h2 className="posts__item__title">
          {title}
        </h2>
        <div className="posts__item__content">
          {content}
        </div>
      </div>
      <div className="posts__item__user-nav">
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <div
          className={`posts__item__comments-icon${isCommentsOpen ? ' posts__item__comments-icon--active' : ''}`}
          onClick={() => handleComments(!isCommentsOpen, id)}
        >
          {loading && loadingId === id ? (
            <Loading />
          ) : (
            <CommentsIcon />
          )}
        </div>
      </div>
    </article>
  );
};
