import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import apiUrl from "../../../apiConfig"

const DeleteTag = (props) => {

    const navigate = useNavigate()
    const [deleteTag, setDeleteTag] = useState({
        name: ''
    })

    useEffect(() => {
        props.getTags()
    }, [])

    const removeTag = (e) => {
        e.preventDefault()
        console.log('TARGET:', typeof e.target.value)
        

        const requestOptions = {
            method: 'DELETE',
            // body: JSON.stringify(preJSONBody),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.user.token}`
            },
        }
        fetch(`${apiUrl}/tags/${e.target.value}`, requestOptions)
            .then(deletedTag => {
                props.getTags()
                navigate('/tags/all')
            })
            .catch(err => console.error(err))
    }

    return (
        <div>

            <h1>Tags</h1>
            <ul>
                {
                    props.tags.map((tag, t) => (
                        
                        <li key={t}>

                            <b>{tag.name}</b>
                            <br></br>
                            <button type="button" onClick={removeTag} value={tag._id}>
                                Delete
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DeleteTag