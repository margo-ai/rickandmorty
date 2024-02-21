import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query getCharacters {
    # characters {
    #   info {
    #     count
    #     next
    #   }
    #   results {
    #     id
    #     name
    #     status
    #     species
    #     gender
    #     image
    #     episode {
    #       name
    #     }
    #   }
    # }

    characters {
      info {
        count
      }
      results {
        id
        name
        species
        status
        type
        gender
        image
        origin {
          name
          type
        }
        location {
          name
          dimension
        }
        episode {
          name
          episode
        }
      }
    }
  }
`;
