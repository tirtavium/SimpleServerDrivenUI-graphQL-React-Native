// @flow
// this is an auto generated file. This will be overwritten

export const getComponent = /* GraphQL */ `
  query GetComponent($id: ID!) {
    getComponent(id: $id) {
      color
      data
      id
      viewType
    }
  }
`;
export const getRootComponent = /* GraphQL */ `
  query GetRootComponent($id: ID!) {
    getRootComponent(id: $id) {
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
export const listComponents = /* GraphQL */ `
  query ListComponents(
    $filter: ModelComponentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComponents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        color
        data
        id
        viewType
      }
      nextToken
    }
  }
`;
export const listRootComponents = /* GraphQL */ `
  query ListRootComponents(
    $filter: TableRootComponentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRootComponents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        color
        id
        viewType
        components {
          color
          data
          id
          viewType
        }
      }
      nextToken
    }
  }
`;
