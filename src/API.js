/* @flow */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type ModelComponentConditionInput = {|
  and?: ?Array< ?ModelComponentConditionInput >,
  color?: ?ModelStringInput,
  data?: ?ModelStringInput,
  not?: ?ModelComponentConditionInput,
  or?: ?Array< ?ModelComponentConditionInput >,
  viewType?: ?ModelStringInput,
|};

export type ModelStringInput = {|
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
  beginsWith?: ?string,
  between?: ?Array< ?string >,
  contains?: ?string,
  eq?: ?string,
  ge?: ?string,
  gt?: ?string,
  le?: ?string,
  lt?: ?string,
  ne?: ?string,
  notContains?: ?string,
  size?: ?ModelSizeInput,
|};

export type ModelAttributeTypes =
  "_null" |
  "binary" |
  "binarySet" |
  "bool" |
  "list" |
  "map" |
  "number" |
  "numberSet" |
  "string" |
  "stringSet";


export type ModelSizeInput = {|
  between?: ?Array< ?number >,
  eq?: ?number,
  ge?: ?number,
  gt?: ?number,
  le?: ?number,
  lt?: ?number,
  ne?: ?number,
|};

export type CreateComponentInput = {|
  color?: ?string,
  data: string,
  id?: ?string,
  viewType: string,
|};

export type CreateRootComponentInput = {|
  color?: ?string,
  viewType: string,
|};

export type DeleteComponentInput = {|
  id?: ?string,
|};

export type DeleteRootComponentInput = {|
  id: string,
|};

export type UpdateComponentInput = {|
  color?: ?string,
  data?: ?string,
  id: string,
  viewType?: ?string,
|};

export type UpdateRootComponentInput = {|
  color?: ?string,
  id: string,
  viewType?: ?string,
|};

export type ModelComponentFilterInput = {|
  and?: ?Array< ?ModelComponentFilterInput >,
  color?: ?ModelStringInput,
  data?: ?ModelStringInput,
  id?: ?ModelIDInput,
  not?: ?ModelComponentFilterInput,
  or?: ?Array< ?ModelComponentFilterInput >,
  viewType?: ?ModelStringInput,
|};

export type ModelIDInput = {|
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
  beginsWith?: ?string,
  between?: ?Array< ?string >,
  contains?: ?string,
  eq?: ?string,
  ge?: ?string,
  gt?: ?string,
  le?: ?string,
  lt?: ?string,
  ne?: ?string,
  notContains?: ?string,
  size?: ?ModelSizeInput,
|};

export type TableRootComponentFilterInput = {|
  color?: ?TableStringFilterInput,
  id?: ?TableIDFilterInput,
  viewType?: ?TableStringFilterInput,
|};

export type TableStringFilterInput = {|
  beginsWith?: ?string,
  between?: ?Array< ?string >,
  contains?: ?string,
  eq?: ?string,
  ge?: ?string,
  gt?: ?string,
  le?: ?string,
  lt?: ?string,
  ne?: ?string,
  notContains?: ?string,
|};

export type TableIDFilterInput = {|
  beginsWith?: ?string,
  between?: ?Array< ?string >,
  contains?: ?string,
  eq?: ?string,
  ge?: ?string,
  gt?: ?string,
  le?: ?string,
  lt?: ?string,
  ne?: ?string,
  notContains?: ?string,
|};

export type CreateComponentMutationVariables = {|
  condition?: ?ModelComponentConditionInput,
  input: CreateComponentInput,
|};

export type CreateComponentMutation = {|
  createComponent: ? {|
    __typename: "Component",
    color: ?string,
    data: string,
    id: string,
    viewType: string,
  |},
|};

export type CreateRootComponentMutationVariables = {|
  input: CreateRootComponentInput,
|};

export type CreateRootComponentMutation = {|
  createRootComponent: ? {|
    __typename: "RootComponent",
    color: ?string,
    components:  Array<? {|
      __typename: "Component",
      color: ?string,
      data: string,
      id: string,
      viewType: string,
    |} >,
    id: string,
    viewType: string,
  |},
|};

export type DeleteComponentMutationVariables = {|
  condition?: ?ModelComponentConditionInput,
  input: DeleteComponentInput,
|};

export type DeleteComponentMutation = {|
  deleteComponent: ? {|
    __typename: "Component",
    color: ?string,
    data: string,
    id: string,
    viewType: string,
  |},
|};

export type DeleteRootComponentMutationVariables = {|
  input: DeleteRootComponentInput,
|};

export type DeleteRootComponentMutation = {|
  deleteRootComponent: ? {|
    __typename: "RootComponent",
    color: ?string,
    components:  Array<? {|
      __typename: "Component",
      color: ?string,
      data: string,
      id: string,
      viewType: string,
    |} >,
    id: string,
    viewType: string,
  |},
|};

export type UpdateComponentMutationVariables = {|
  condition?: ?ModelComponentConditionInput,
  input: UpdateComponentInput,
|};

export type UpdateComponentMutation = {|
  updateComponent: ? {|
    __typename: "Component",
    color: ?string,
    data: string,
    id: string,
    viewType: string,
  |},
|};

export type UpdateRootComponentMutationVariables = {|
  input: UpdateRootComponentInput,
|};

export type UpdateRootComponentMutation = {|
  updateRootComponent: ? {|
    __typename: "RootComponent",
    color: ?string,
    components:  Array<? {|
      __typename: "Component",
      color: ?string,
      data: string,
      id: string,
      viewType: string,
    |} >,
    id: string,
    viewType: string,
  |},
|};

export type GetComponentQueryVariables = {|
  id: string,
|};

export type GetComponentQuery = {|
  getComponent: ? {|
    __typename: "Component",
    color: ?string,
    data: string,
    id: string,
    viewType: string,
  |},
|};

export type GetRootComponentQueryVariables = {|
  id: string,
|};

export type GetRootComponentQuery = {|
  getRootComponent: ? {|
    __typename: "RootComponent",
    color: ?string,
    components:  Array<? {|
      __typename: "Component",
      color: ?string,
      data: string,
      id: string,
      viewType: string,
    |} >,
    id: string,
    viewType: string,
  |},
|};

export type ListComponentsQueryVariables = {|
  filter?: ?ModelComponentFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListComponentsQuery = {|
  listComponents: ? {|
    __typename: "ModelComponentConnection",
    items: ? Array<? {|
      __typename: "Component",
      color: ?string,
      data: string,
      id: string,
      viewType: string,
    |} >,
    nextToken: ?string,
  |},
|};

export type ListRootComponentsQueryVariables = {|
  filter?: ?TableRootComponentFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListRootComponentsQuery = {|
  listRootComponents: ? {|
    __typename: "RootComponentConnection",
    items: ? Array<? {|
      __typename: "RootComponent",
      color: ?string,
      id: string,
      viewType: string,
    |} >,
    nextToken: ?string,
  |},
|};

export type OnCreateComponentSubscription = {|
  onCreateComponent: ? {|
    __typename: "Component",
    color: ?string,
    data: string,
    id: string,
    viewType: string,
  |},
|};

export type OnCreateRootComponentSubscriptionVariables = {|
  color?: ?string,
  id?: ?string,
  viewType?: ?string,
|};

export type OnCreateRootComponentSubscription = {|
  onCreateRootComponent: ? {|
    __typename: "RootComponent",
    color: ?string,
    components:  Array<? {|
      __typename: "Component",
      color: ?string,
      data: string,
      id: string,
      viewType: string,
    |} >,
    id: string,
    viewType: string,
  |},
|};

export type OnDeleteComponentSubscription = {|
  onDeleteComponent: ? {|
    __typename: "Component",
    color: ?string,
    data: string,
    id: string,
    viewType: string,
  |},
|};

export type OnDeleteRootComponentSubscriptionVariables = {|
  color?: ?string,
  id?: ?string,
  viewType?: ?string,
|};

export type OnDeleteRootComponentSubscription = {|
  onDeleteRootComponent: ? {|
    __typename: "RootComponent",
    color: ?string,
    components:  Array<? {|
      __typename: "Component",
      color: ?string,
      data: string,
      id: string,
      viewType: string,
    |} >,
    id: string,
    viewType: string,
  |},
|};

export type OnUpdateComponentSubscription = {|
  onUpdateComponent: ? {|
    __typename: "Component",
    color: ?string,
    data: string,
    id: string,
    viewType: string,
  |},
|};

export type OnUpdateRootComponentSubscriptionVariables = {|
  color?: ?string,
  id?: ?string,
  viewType?: ?string,
|};

export type OnUpdateRootComponentSubscription = {|
  onUpdateRootComponent: ? {|
    __typename: "RootComponent",
    color: ?string,
    components:  Array<? {|
      __typename: "Component",
      color: ?string,
      data: string,
      id: string,
      viewType: string,
    |} >,
    id: string,
    viewType: string,
  |},
|};