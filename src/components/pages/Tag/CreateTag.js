import { useEffect, useState } from 'react'
import apiUrl from '../../../apiConfig'
import { useNavigate } from 'react-router-dom'
import { Form, FormControl, FormLabel, Button } from 'react-bootstrap'

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
        <div>
            <Form onSubmit={postTag}>
                <Form.Group className="mb-3" controlId="formGridTag">
                    <FormLabel>Tag</FormLabel>
                    <FormControl type="text" name="name" onChange={handleChange} value={newTag.name} />
                </Form.Group>
                <Button type="submit" variant="primary">Submit</Button>
            </Form>
        </div>
    )
}

export default CreateTag