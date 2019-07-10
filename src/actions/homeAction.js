// src/actions/developAction

export const homeAtion = () => dispatch => {
    dispatch({
        type: 'HOMEACTION',
        payload: 'ma home resultat action'
    })
}