import { gql } from '@apollo/client';
export const FILTER_CHARACTERS_BY_STATUS = gql`
  query filterCharactersByStatus($input: String!) {
    characters(filter: { status: $input }) {
      info {
        count
      }
      results {
        name
        id
        species
        type
        status
        image
      }
    }
  }
`;
