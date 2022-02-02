import React, { useState } from 'react'
import { useMutation } from "@apollo/react-hooks"
import NEW_AUTHOR from './graphql'

const initialFormState = {
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    numBooksPublished: "",
};

const NewAuthor = () => {
    const formReducer = (formState, action) => {
        switch (action.type) {
            case 'textChange':
                return {
                    ...formState,
                    [action.field]: action.payload,
                };
            default:
                return formState;
        }
    };
    const [formState, formDispatch] = useReducer(formReducer, initialFormState);

    const handleTextChange = (e) => {
        formDispatch({
            type: 'textChange',
            field: e.target.name,
            payload: e.target.value,
        })
    }

    const [addAuthor, { error, loading }] = useMutation(NEW_AUTHOR, {
        variables: { formState },
        refetchQueries: () => [{ query: GET_TODOS }]
    })

    return (
        <div>
            <input name="firstName" placeholder="New author first name..."
                onChange={(e) => handleTextChange(e)} />
            <input name="lastName" placeholder="New author last name..."
                onChange={(e) => handleTextChange(e)} />
            <input name="age" placeholder="New author age..."
                onChange={(e) => handleTextChange(e)} />
            <input name="email" placeholder="New author email..."
                onChange={(e) => handleTextChange(e)} />
            <input name="numBooksPublished" placeholder="New author number of books published..."
                onChange={(e) => handleTextChange(e)} />
            {loading ? 'Loading...' : <button onClick={addAuthor}>Add author first name!</button>}
            {error && "Error!"}
        </div>
    )
}

export default NewAuthor