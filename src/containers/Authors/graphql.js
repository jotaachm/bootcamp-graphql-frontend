import gql from "graphql-tag"

const GET_AUTHORS = gql`
query authors {
    authors {
        firstName
        lastName
        email
        books {
            title,
            language,
            numPages
        }
    }
}
`

export default GET_AUTHORS