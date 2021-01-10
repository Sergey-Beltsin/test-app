import {
  FETCH_COMMENTS_ERROR,
  FETCH_COMMENTS_START,
  FETCH_COMMENTS_SUCCESS,
  FETCH_POSTS,
  FETCH_POSTS_ERROR,
  FETCH_USERS,
  FETCH_USERS_ERROR, GET_USERS,
} from '../actions/action-types';

const initialState = {
  posts: [],
  comments: [],
  users: [],
  commentsLoading: false,
  error: false,
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state, posts: action.posts,
      };
    case FETCH_POSTS_ERROR:
      return {
        ...state, error: true,
      };
    case FETCH_USERS:
      return {
        ...state, users: action.users,
      };
    case FETCH_USERS_ERROR:
      return {
        ...state, error: true,
      };
    case GET_USERS:
      return {
        ...state, users: action.users,
      };
    case FETCH_COMMENTS_START:
      return {
        ...state, commentsLoading: true,
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state, commentsLoading: false, comments: [...state.comments, ...action.comments],
      };
    case FETCH_COMMENTS_ERROR:
      return {
        ...state, commentsLoading: false, error: true,
      };
    default:
      return { ...state };
  }
}
