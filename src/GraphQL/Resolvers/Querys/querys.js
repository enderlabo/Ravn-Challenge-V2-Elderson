import { gql } from '@apollo/client'

export const LOAD_ALL_PEOPLE = gql`
  query {
    allPeople {
      people {
        id
        name
        species {
          name
        }
        homeworld {
          name
        }
      }
    }
  }
`;

export const LOAD_PEOPLE_DETAIL = gql`
  query GetPeopleDetail($personID: ID!) {
    person(personID: $personID) {
      name,
      birthYear,
      eyeColor,
      gender,
      hairColor,
      skinColor,
      homeworld{
        name
      },
    },
  }
  `;

  // export const LOAD_PEOPLE_DETAIL = gql`
  // query GetPeopleDetail($personID: ID!) {
  //   person(personID: $personID) {
  //     name,
  //     birthYear,
  //     eyeColor,
  //     gender,
  //     hairColor,
  //     skinColor,
  //     homeworld{
  //       name
  //     },
  //   },
  //   starship(starshipID: $personID){
  //     name
  //   }
  // }
  // `;

  export const LOAD_STARSHIP = gql`
  query GetStarship($personID: ID!) {
    starship(starshipID: $personID){
      name
    }
  }
  `;
  