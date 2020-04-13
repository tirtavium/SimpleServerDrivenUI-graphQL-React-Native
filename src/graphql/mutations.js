// @flow
// this is an auto generated file. This will be overwritten

export const createComponent = /* GraphQL */ `
  mutation CreateComponent(
    $condition: ModelComponentConditionInput
    $input: CreateComponentInput!
  ) {
    createComponent(condition: $condition, input: $input) {
      color
      data
      id
      viewType
    }
  }
`;
export const createRootComponent = /* GraphQL */ `
  mutation CreateRootComponent($input: CreateRootComponentInput!) {
    createRootComponent(input: $input) {
      color
      components {
        color
        data
        id
        viewType
      }
      id
      viewType
    }
  }
`;
export const deleteComponent = /* GraphQL */ `
  mutation DeleteComponent(
    $condition: ModelComponentConditionInput
    $input: DeleteComponentInput!
  ) {
    deleteComponent(condition: $condition, input: $input) {
      color
      data
      id
      viewType
    }
  }
`;
export const deleteRootComponent = /* GraphQL */ `
  mutation DeleteRootComponent($input: DeleteRootComponentInput!) {
    deleteRootComponent(input: $input) {
      color
      components {
        color
        data
        id
        viewType
      }
      id
      viewType
    }
  }
`;
export const updateComponent = /* GraphQL */ `
  mutation UpdateComponent(
    $condition: ModelComponentConditionInput
    $input: UpdateComponentInput!
  ) {
    updateComponent(condition: $condition, input: $input) {
      color
      data
      id
      viewType
    }
  }
`;
export const updateRootComponent = /* GraphQL */ `
  mutation UpdateRootComponent($input: UpdateRootComponentInput!) {
    updateRootComponent(input: $input) {
      color
      components {
        color
        data
        id
        viewType
      }
      id
      viewType
    }
  }
`;
