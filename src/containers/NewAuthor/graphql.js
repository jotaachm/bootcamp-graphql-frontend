import gql from "graphql-tag"

const NEW_AUTHOR = gql`
mutation newAuthor($input: newAuthorInput!){
  newAuthor(input: $input){
    firstName
    lastName
    age
    email
    numBooksPublished
  }
}
`

export default NEW_AUTHOR