import React from 'react'
import { useQuery } from "@apollo/react-hooks"
import GET_AUTHORS from './graphql'

const Authors = () => {
    const { loading, error, data } = useQuery(GET_AUTHORS)

    if (loading) return "Loading..."
    if (error) return `Error: ${error}`

    return (
        <select>
            {data.authors.map(author => (
                <option key={author.email} value={author.lastName}>
                    {author.lastName}
                </option>
            ))}
        </select>
    )
}

export default Authors