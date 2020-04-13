// @flow
// this is an auto generated file. This will be overwritten

export const onCreateComponent = /* GraphQL */ `
  subscription OnCreateComponent {
    onCreateComponent {
      color
      data
      id
      viewType
    }
  }
`;
export const onCreateRootComponent = /* GraphQL */ `
  subscription OnCreateRootComponent(
    $color: String
    $id: ID
    $viewType: String
  ) {
    onCreateRootComponent(color: $color, id: $id, viewType: $viewType) {
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
export const onDeleteComponent = /* GraphQL */ `
  subscription OnDeleteComponent {
    onDeleteComponent {
      color
      data
      id
      viewType
    }
  }
`;
export const onDeleteRootComponent = /* GraphQL */ `
  subscription OnDeleteRootComponent(
    $color: String
    $id: ID
    $viewType: String
  ) {
    onDeleteRootComponent(color: $color, id: $id, viewType: $viewType) {
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
export const onUpdateComponent = /* GraphQL */ `
  subscription OnUpdateComponent {
    onUpdateComponent {
      color
      data
      id
      viewType
    }
  }
`;
export const onUpdateRootComponent = /* GraphQL */ `
  subscription OnUpdateRootComponent(
    $color: String
    $id: ID
    $viewType: String
  ) {
    onUpdateRootComponent(color: $color, id: $id, viewType: $viewType) {
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
