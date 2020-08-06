const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

export const addItem = (item) => ({ type: ADD_ITEM, item: item });
export const deleteItem = (i) => ({ type: DELETE_ITEM, i });

const initialState = {
  items: [],
};

export default function item(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      console.log(state);
      return {
        ...state,
        items: state.items.concat(action.item)  
      };
      case DELETE_ITEM:
        return {
          ...state,
          items: state.items.slice(0, action.i).concat(state.items.slice(action.i + 1, state.items.length)),
        }

    default:
      return state;
  }
}