import uuid  from 'uuid';

const CREATE_COMMENT = 'CREATE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const LIKE_COMMENT = 'LIKE_COMMENT';
const DISLIKE_COMMENT = 'DISLAKE_COMMENT';

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
    id: id
  };
}

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id: id
  };
}

function likeComment(id, up) {
  return {
    type: LIKE_COMMENT,
    id: id,
    thumb: up
  };
}

function dislakeComment(id, down) {
  return {
    type: DISLIKE_COMMENT,
    id: id,
    thumb: down
  };
}