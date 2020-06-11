
export interface IPendingState {
    data: null;
    error: null;
    loading: boolean;
}

export interface ISuccessState {
    data: any;
    error: null;
    loading: boolean;
}

export interface IErrorState {
    data: null;
    error: any;
    loading: boolean;
}

export interface IMutationItem {
    name: string;
    statePiece: string;
    id: number;
    payloadType?: any;
}

export enum mutationTypes {
    Pending = 1,
    Success = 2,
    Error = 3
}
