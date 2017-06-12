/**
 * Created by carbon on 09/06/2017.
 */

const initialState = {
  selected: '',
  values: [],
  variables: [],
  rowsNumber: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHVARIABLES':
      return { ...state, variables: action.variables };
    case 'CHANGEVARIABLE':
      return { ...state, selected: action.selected };
    case 'FETCHVALUES':
      return { ...state, values: action.values, rowsNumber: action.rowsNumber };
    default:
      return state;
  }
};
