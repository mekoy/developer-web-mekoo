
import { RECEIVESLANG} from '../constantType/ActionsTypeLang';
import axios from 'axios';
import { categorieLangOptions } from '../webServices/dataLang';
// const urlLang = `https://reqres.in/api/products/3`;
const urlLang = `https://4nqmek59ca.execute-api.us-east-2.amazonaws.com/test/pets`;
console.log(urlLang,'++++');

function receiveslang (selectreddit) {
    return {
        type: RECEIVESLANG,
        selectreddit
    }
}

export const fetchPostsLang = (selectreddit)=>  (dispatch) =>   {
    axios({
        method: 'GET',
        url: urlLang,
        dataType : "json",
	    contentType : "application/json",
    })
    .then(response => {
        if (response.status === 200) {
            dispatch({
                type: RECEIVESLANG,
                status: "success",
                isFetching: true,
                items: receiveslang(selectreddit = response.data),
                dataLang: categorieLangOptions
            });
        }
    })
    .catch(function(err) {
       
            dispatch({
                type: RECEIVESLANG,
                status : "error",
                isFetching : false,
                items : [],
                error : err
            })
            console.log(err,'error');
    })
};

export const fechtNeedPostLang = (selectreddit ) => (dispatch, getState) => {
    return dispatch(fetchPostsLang(selectreddit, dispatch, getState));
}





