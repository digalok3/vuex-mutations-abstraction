# `Vuex mutation creator`

```typescript

// example of mutations abstraction. name - stands for action name; statePiece - stands for piece for of state, id - stands for type of action ( Pending | Success | Error) 

const mutationArray: IMutationItem[] = [
  { name: ManagementPermissionsActions.getPermissionsPending, statePiece: "getPermissionsData", id: mutationTypes.Pending },
  { name: ManagementPermissionsActions.getPermissionsSuccess, statePiece: "getPermissionsData", id: mutationTypes.Success },
  { name: ManagementPermissionsActions.getPermissionsError, statePiece: "getPermissionsData", id: mutationTypes.Error } 
]

// if would not like to use this abstraction you can add regular mutations here 
const mutations: MutationTree<IManagementPermissionsState> = {};

// this is an example of regular mutation
  managementPermissionsGetPermissionsSuccess(state, payload: LoadResultModelOfUserRowModel) {
    state.getPermissionsData = {
      ...state.getPermissionsData,
      data: payload,
      error: null,
      loading: false
    };
  },
  managementPermissionsGetPermissionsError(state, payload: ValidationErrorModel) {
    state.getPermissionsData = {
      ...state.getPermissionsData,
      data: null,
      error: payload,
      loading: false
    };
  },
  // get current users permissions
  managementPermissionsGetCurrentUsersPermissionsPending(state) {
    state.getCurrentUsersPermissionsData = {
      ...state.getCurrentUsersPermissionsData,
      data: null,
      error: null,
      loading: true
    };
  }

// !!!note!!! you can use both ways simultaneously

```
