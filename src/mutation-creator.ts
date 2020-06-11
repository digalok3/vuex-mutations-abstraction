import { MutationTree } from "vuex";
import {IErrorState, IMutationItem, IPendingState, ISuccessState, mutationTypes} from "./models";

const pendingState = (payload?: any) => {
    const _pendingState: IPendingState = {
        data: payload || null,
        error: null,
        loading: true
    };
    return _pendingState;
};

const successState = (payload: any) => {
    const _successState: ISuccessState = {
        data: payload,
        error: null,
        loading: false
    };
    return _successState;
};

const errorState = (payload: any) => {
    const _errorState: IErrorState = {
        data: null,
        error: payload,
        loading: false
    };
    return _errorState;
};


const addPendingMutation = (name: string) => (state: any, payload: any ) => {
    state[name] = pendingState(payload);
};
const addErrorMutation = (name: string) => (state: any, payload: any) => {
    state[name] = errorState(payload);
};
const addSuccessMutation = (name: string) => (state: any, payload: any) => {
    state[name] = successState(payload);
};

export const addMutations = <T>(list: IMutationItem[], targetObject: MutationTree<T>) => {
    for (let value of list) {
        switch (value.id) {
            case mutationTypes.Pending:
                targetObject[value.name] = addPendingMutation(value.statePiece);
                break;
            case mutationTypes.Success:
                targetObject[value.name] = addSuccessMutation(value.statePiece);
                break;
            case mutationTypes.Error:
                targetObject[value.name] = addErrorMutation(value.statePiece);
                break;
        }
    }
};
