import { gql } from "@apollo/client";

export const ALL_CHARACTERS = gql`
  query Characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        id
        name
        status
        species
        type
        gender
        image
        location {
          name
        }
        episode {
          id
        }
      }
      info {
        count
        pages
        next
        prev
      }
    }
  }
`;

export const SINGLE_CHARACTER = gql`
  query Character($id: ID!) {
    character(id: $id) {
      name
      gender
      image
      status
      species
      origin {
        name
      }
      location {
        name
      }
      episode {
        id
        name
        episode
      }
    }
  }
`;
