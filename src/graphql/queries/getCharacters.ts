import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query getCharacters {
    characters {
      info {
        count
      }
      results {
        id
        name
        status
      }
    }
  }
`;
