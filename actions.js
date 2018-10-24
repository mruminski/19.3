import uuid  from 'uuid';

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const LIKE_COMMENT = 'LIKE_COMMENT';
export const DISLIKE_COMMENT = 'DISLAKE_COMMENT';

function createComment(text) {
  return {
    type: CREATE_COMMENT,
    text,
    id: uuid.v4()
  };
}

function editComment(id, text) {
  return {
    type: EDIT_COMMENT,
    text,
    id
  };
}

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  };
}

function likeComment(id, up) {
  return {
    type: LIKE_COMMENT,
    id,
    thumb: up
  };
}

function dislakeComment(id, down) {
  return {
    type: DISLIKE_COMMENT,
    id,
    thumb: down
  };
}