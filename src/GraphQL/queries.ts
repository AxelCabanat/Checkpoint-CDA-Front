import { gql } from '@apollo/client';

export const GET_CONTINENTS = gql`
query getContinents {
    continents {
      code 
      name
    }
  }
`;

export const GET_ONE_CONTINENT = gql`
query getContinent($code: ID!) {
    continent(code: $code) {
      code
      name
      countries {
        code
        name
        emoji
      }
    }
  }
`;