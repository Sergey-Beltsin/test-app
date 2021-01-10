/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
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
  const comments = useSelector((state) => state.comments);

  return (
    <article className="posts__item">
      <div className="posts__item__wrapper">
        <div className="posts__item__inner">
          <h2 className="posts__item__title">
            {title}
          </h2>
          <div className="posts__item__content">
            {content}
          </div>
        </div>
        <div className="posts__item__user-nav">
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
      </div>
      {isCommentsOpen && comments.find((item) => item.postId === id) && (
        <ul className="posts__comments__list">
          {comments.map((comment) => comment.postId === id && (
            <li
              key={`${comment.id}--comment`}
              className="posts__comments__item"
            >
              <div className="posts__comments__wrapper">
                <img
                  src="https://place-hold.it/100x100"
                  alt=""
                  className="posts__comments__img"
                />
                <span className="posts__comments__name">
                  {comment.name}
                </span>
              </div>
              <div className="posts__comments__content">
                {comment.body}
              </div>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};
