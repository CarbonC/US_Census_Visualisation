import parameters from "../parameters";

const fetchVariables = () => {
    return fetch(`${parameters.host}/variables`)
        .then((response) => {
            return (response.json())
        })
        .then((res) => ({
            type: "FETCHVARIABLES",
            variables: res
        }));
};

const fetchValues = (variable) => {
    return fetch(`${parameters.host}/values/${variable}`)
        .then((response) => {
            return (response.json())
        })
        .then((res) => ({
            type: "FETCHVALUES",
            values: res.res,
            rowsNumber: res.number,
        }));
};

export const loadVariables = () => (dispatch) => {
    return fetchVariables()
        .then(
            res => {
                dispatch(res)
            }
        );
};

export const loadValues = () => (dispatch, getState) => {
    return fetchValues(getState().selected).then(
        res => {
            dispatch(res)
        }
    );
};
