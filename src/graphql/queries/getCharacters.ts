import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query getCharacters {
    characters {
      info {
        count
        next
      }
      results {
        id
        name
        status
        species
        gender
        image
        episode {
          name
        }
      }
    }
  }
`;
