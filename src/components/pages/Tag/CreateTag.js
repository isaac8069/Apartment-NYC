import { useEffect, useState } from 'react'
import apiUrl from '../../../apiConfig'

const CreateTag = (props) => {
    const [newTag, setNewTag] = useState({
        name: '',
    })

    const handleChange = (e) => {
        setNewTag({ ...newTag, [e.target.name]: e.target.value })
    }

    // const handleCheck = (e) => {
    //     setNewTag({ ...newTag, [e.target.name]: e.target.checked })
    // }

    const postTag = (e) => {
        e.preventDefault()
        let preJSONBody = {
            name: newTag.name
        }
        fetch(`${apiUrl}/tags`, {
            method: 'POST',
            body: JSON.stringify(preJSONBody),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(postedTag => {
                console.log('POSTED TAG', postedTag)
                // props.refreshTags()
                setNewTag({
                    name: ''
                })
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