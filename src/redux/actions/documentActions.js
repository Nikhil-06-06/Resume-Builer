import * as documentActions from './actions';
import {v4 as uuidv4} from 'uuid';

export const setDocument=(skinCd)=>{
    return{
        type: documentActions.SET_SKIN,
        payload: {
            id: uuidv4(),
            skincd: skinCd
        }
    }
}

export const updateDocument=(skinCd)=>{
    return{
        type: documentActions.UPDATE_SKIN,
        payload: {
            skincd: skinCd
        }
    }
}