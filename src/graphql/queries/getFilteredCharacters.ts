import { gql } from "@apollo/client";

export const GET_CHARACTERS_WITH_FILTERS = gql`
  query getCharactersWidthFilters(
    $name: String
    $status: String
    $gender: String
    $type: String
    $species: String
    $page: Int
  ) {
    characters(filter: { name: $name, status: $status, gender: $gender, type: $type, species: $species }, page: $page) {
      info {
        count
        pages
        next
        prev
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
      }
    }
  }
`;
