import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import apiUrl from '../../../apiConfig'

const EditTag = (props) => {
    const navigate = useNavigate()

    const [currentTag, setCurrentTag] = useState({
        tag: [{
            name:''
        }]
    })

    const handleChange = (e) => {
        setCurrentTag({ ...currentTag, [e.target.name]: e.target.value })
    }
    console.log('THESE ARE THE TAGS', currentTag)
    const patchTag = (e) => {
        e.preventDefault()
        let preJSONBody = {
            tag: {
                name: currentTag.name,
            }
        }


        const requestOptions = {
            method: 'PATCH',
            body: JSON.stringify(preJSONBody),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.user.token}`
            }
        }
        fetch(`${apiUrl}/tags/${props.tag._id}`, requestOptions)
            .then(postedTag => {
                navigate('/tags/all')
            })
            .catch(err => console.error(err))
    }
    // I think I need to map through the tag array to return each tag in the array
    // Then the next return needs to be able to handle a tag from the array and edit it
    return (
        <form onSubmit={patchTag}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" onChange={handleChange} value={currentTag.name} />
            </div>

            <input type="submit" value="Post" />
        </form>
    )
}

export default EditTag