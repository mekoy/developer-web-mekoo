import { combineReducers } from 'redux'
import {RECEIVESLANG} from '../../constantType/ActionsTypeLang';

const initialState = {
    items:[],
    isFetching: false,
    didInvalidate:false,
    dataLang : []
};

function searchlang ( state = initialState, action) {
    switch (action.type) {
        case RECEIVESLANG:
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                didInvalidate: false,
                items: action.items,
                dataLang: action.dataLang,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}

function postsBySubreddit(state = {}, action) {
    switch (action.type) {
      case RECEIVESLANG:
        return Object.assign({}, state, {
          items: searchlang(state[action.dataLang], action)
        })
      default:
        return state
    }
}


const rootReducerSearch = combineReducers({
    postsBySubreddit
})

export default rootReducerSearch;

