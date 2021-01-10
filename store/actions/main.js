import axios from '../../axios';
import {
  FETCH_COMMENTS_ERROR,
  FETCH_COMMENTS_START,
  FETCH_COMMENTS_SUCCESS,
  FETCH_POSTS,
  FETCH_POSTS_ERROR,
  FETCH_USERS,
  FETCH_USERS_ERROR, GET_USERS,
} from './action-types';

export function fetchPostsSuccess(posts) {
  return {
    type: FETCH_POSTS,
    posts,
  };
}

export function fetchPostsError() {
  return {
    type: FETCH_POSTS_ERROR,
  };
}

export function fetchPosts() {
  return async (dispatch) => {
    try {
      const response = await axios.get('/posts');
      dispatch(fetchPostsSuccess(response.data));
    } catch (e) {
      dispatch(fetchPostsError());
    }
  };
}

export function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS,
    users,
  };
}

export function fetchUsersError() {
  return {
    type: FETCH_USERS_ERROR,
  };
}

export function fetchUsers() {
  return async (dispatch) => {
    try {
      const response = await axios.get('/users');
      dispatch(fetchUsersSuccess(response.data));
    } catch (e) {
      dispatch(fetchUsersError());
    }
  };
}

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}

export function fetchCommentsStart() {
  return {
    type: FETCH_COMMENTS_START,
  };
}

export function fetchCommentsError() {
  return {
    type: FETCH_COMMENTS_ERROR,
  };
}

export function fetchCommentsSuccess(comments) {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    comments,
  };
}

export function fetchComments(postId) {
  return async (dispatch) => {
    dispatch(fetchCommentsStart());

    try {
      const response = await axios.get(`/posts/${postId}/comments`);
      dispatch(fetchCommentsSuccess(response.data));
    } catch (e) {
      dispatch(fetchCommentsError());
    }
  };
}
