import { useEffect, useState } from 'react'
import apiUrl from '../../../apiConfig'
import { useNavigate } from 'react-router-dom'

const CreateTag = (props) => {
    const navigate = useNavigate()
    const [newTag, setNewTag] = useState({
        name: '',
    })

    const handleChange = (e) => {
        setNewTag({ ...newTag, [e.target.name]: e.target.value })
    }


    const postTag = (e) => {
        e.preventDefault()
        let preJSONBody = {
            tag: {
                name: newTag.name
            }
        }
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(preJSONBody),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.user.token}`
            },
        }
        fetch(`${apiUrl}/tags`, requestOptions)
            .then(postedTag => {
                navigate('/tags/all')
            })
            .catch(err => console.error(err))
    }

    return (
        <form onSubmit={postTag}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" onChange={handleChange} value={newTag.name} />
            </div>

            <input type="submit" value="Post" />
        </form>
    )
}

export default CreateTag