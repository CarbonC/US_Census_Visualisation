/**
 * Created by carbon on 09/06/2017.
 */

const initialState = {
    selected: "",
    values: [],
    variables: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCHVARIABLES':
            return {...state, variables: action.variables};
        case 'CHANGEVARIABLE':
            return {...state, variables: action.variables};
        case 'FETCHVALUES':
            return {...state, values: action.values};
        default:
            return state
    }
}