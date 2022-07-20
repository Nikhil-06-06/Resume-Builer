import * as documentActions from'../actions/actions';
import initialState from './intialState.json';

const documentReducer=(state=initialState.document,action)=>{
    switch(action.type){
        case documentActions.SET_SKIN : 
            return {...state, id:action.payload.id, skincd: action.payload.skincd}
        case documentActions.UPDATE_SKIN:
            return{...state, skincd: action.payload.skincd}
        default: return state;
    }
}

export default documentReducer;