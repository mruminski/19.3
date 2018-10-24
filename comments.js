import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, LIKE_COMMENT, DISLIKE_COMMENT} from './actions';

function comments(state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [{
        id: action.id,
        text: action.text,
        thumb: 0
      }, ...state.comments ];
    case REMOVE_COMMENT:
      return [{
        comments: state.comments.filter(comment => comment.id !== action.id)
      }];
    case EDIT_COMMENT:
      return [{
        id: state.comments.id,
        text: action.text
      }];
    case LIKE_COMMENT:
      return [{
        id: state.comments.id,
        thumb: action.thumb++
      }];
    case DISLIKE_COMMENT:
      return [{
        id: state.comments.id,
        thumb: action.thumb--

      }];
    default:
      return state;
  }
}