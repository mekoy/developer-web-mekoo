
export default ( state = {}, action ) => {
    switch ( action.type ) {
        case 'HOMEACTION':
            return {
                result: action.payload
            }
        default:
            return state
    }
}