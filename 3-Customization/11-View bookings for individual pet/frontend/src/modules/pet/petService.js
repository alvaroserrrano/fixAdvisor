import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';

export default class ToolService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation TOOL_UPDATE(
          $id: String!
          $data: ToolInput!
        ) {
          toolUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.toolUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation TOOL_DESTROY($ids: [String!]!) {
          toolDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.toolDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation TOOL_CREATE($data: ToolInput!) {
          toolCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.toolCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation TOOL_IMPORT(
          $data: ToolInput!
          $importHash: String!
        ) {
          toolImport(data: $data, importHash: $importHash)
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.toolImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query TOOL_FIND($id: String!) {
          toolFind(id: $id) {
            id
            owner {
              id
              fullName
              email
            }
            name
            type
            breed
            size
            bookings {
              id
              arrival
              departure
              status
            }
            createdAt
            updatedAt
          }
        }
      `,

      variables: {
        id,
      },
    });

    return response.data.toolFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query TOOL_LIST(
          $filter: ToolFilterInput
          $orderBy: ToolOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          toolList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              owner {
                id
                fullName
                email
              }
              name
              type
              breed
              size
              updatedAt
              createdAt
            }
          }
        }
      `,

      variables: {
        filter,
        orderBy,
        limit,
        offset,
      },
    });

    return response.data.toolList;
  }

  static async listAutocomplete(query, owner, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query TOOL_AUTOCOMPLETE(
          $query: String
          $owner: String
          $limit: Int
        ) {
          toolAutocomplete(
            query: $query
            owner: $owner
            limit: $limit
          ) {
            id
            label
          }
        }
      `,

      variables: {
        query,
        owner,
        limit,
      },
    });

    return response.data.toolAutocomplete;
  }

  static async exists() {
    const { count } = await this.list(null, null, 1, null);
    return count > 0;
  }
}
