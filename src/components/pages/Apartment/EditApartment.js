import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Card } from 'react-bootstrap'
import apiUrl from '../../../apiConfig'



const EditApartment = (props) => {
    //useNavigate for redirecting once apartment is succesfully patched

    const navigate = useNavigate()

    // State are set for our currentApartment that is passed from App.js and tags which will come from props.apartment as well
    // State for tagNames an array of the tag names need for testing which tags are currently attaced to the users apartment
    const [currentApartment, setCurrentApartment] = useState(props.apartment)
    const [tags, setTags] = useState([])
    const [tagNames, setTagNames] = useState(props.apartment.tags.map((e) => e.name))

    // call to api when components renders and gets the tags from database
    useEffect(() => {
        getTags()
    }, [])

    // A function that is called every time the name or address inputs are changed
    // Function then sets these inputs as the currentApartment state  
    const handleChange = e => {
        setCurrentApartment({ ...currentApartment, [e.target.name]: e.target.value })
    }

    // Function runs when Edit Apartment button is pressed
    // Sets currentApartment state to an object that is sent to our data base as a PATCH request
    // At the end getApartment is run to ensure that apartment is up to date inside App.js
    const patchApartment = (e) => {
        e.preventDefault()
        let preJSONBody = {
            apartment: {
                title: currentApartment.title,
                rent: currentApartment.rent,
                description: currentApartment.description,
                neighborhood: currentApartment.neighborhood,
                borough: currentApartment.borough,
                zipcode: currentApartment.zipcode,
                bedrooms: currentApartment.bedrooms,
                bathrooms: currentApartment.bathrooms,
                amenities: currentApartment.amenities,
                roommates: currentApartment.roommates,
                tags: currentApartment.tags,
                imgUrl: currentApartment.imgUrl
            }
        }
        const requestOptions = {
            method: 'PATCH',
            body: JSON.stringify(preJSONBody),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.user.token}`
            },
        }
        fetch(`${apiUrl}/apartments/${props.apartment._id}`, requestOptions)
            .then(patchedApartment => {
                props.getApartment()
                navigate('/apartments/all')
            })
            .catch(err => console.error(err))
    }

    // Funtion that runs when cancel button is pressed that takes user back to existing profile
  const goBack = () => {
    return navigate('/profile')
  }

    return (
        <div>
            <div className='container' style={bgc}>
                <h1 style={title}>Edit Apartment</h1>
                <Form onSubmit={patchApartment}>

                    <div className='container' style={box}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={subtitle}>Title</Form.Label>
                            <Form.Control style={{ width: '18rem' }} placeholder="title" onChange={handleChange} type="text" name="title" id="title" />
                        </Form.Group>
                    </div>

                    <div className='container' style={box}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={subtitle}>Rent</Form.Label>
                            <Form.Control style={{ width: '18rem' }} placeholder="$" onChange={handleChange} type="text" name="rent" id="rent" />
                        </Form.Group>
                    </div>

                    <div className='container' style={box}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={subtitle}>Description</Form.Label>
                            <Form.Control style={{ width: '18rem' }} placeholder="description" onChange={handleChange} type="text" name="description" id="description" />
                        </Form.Group>
                    </div>

                    <div className='container' style={box}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={subtitle}>Neighborhood</Form.Label>
                            <Form.Control style={{ width: '18rem' }} placeholder="neighborhood" onChange={handleChange} type="text" name="neighborhood" id="neighborhood" />
                        </Form.Group>
                    </div>

                    <div className='container' style={box}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={subtitle}>Borough</Form.Label>
                            <Form.Control style={{ width: '18rem' }} placeholder="borough" onChange={handleChange} type="text" name="borough" id="borough" />
                        </Form.Group>
                    </div>

                    <div className='container' style={box}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={subtitle}>Zip Code</Form.Label>
                            <Form.Control style={{ width: '18rem' }} placeholder="zip code" onChange={handleChange} type="text" name="zipcode" id="zipcode" />
                        </Form.Group>
                    </div>

                    <div className='container' style={box}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={subtitle}>Bedrooms</Form.Label>
                            <Form.Control style={{ width: '18rem' }} placeholder="bedrooms" onChange={handleChange} type="text" name="bedrooms" id="bedrooms" />
                        </Form.Group>
                    </div>

                    <div className='container' style={box}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={subtitle}>Bathrooms</Form.Label>
                            <Form.Control style={{ width: '18rem' }} placeholder="bathrooms" onChange={handleChange} type="text" name="bathrooms" id="bathrooms" />
                        </Form.Group>
                    </div>

                    <div className='container' style={box}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={subtitle}>Amenities</Form.Label>
                            <Form.Control style={{ width: '18rem' }} placeholder="amenities" onChange={handleChange} type="text" name="amenities" id="amenities" />
                        </Form.Group>
                    </div>

                    <div className='container' style={box}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={subtitle}>Roommates</Form.Label>
                            <Form.Control style={{ width: '18rem' }} placeholder="roommates" onChange={handleChange} type="text" name="roommates" id="roommates" />
                        </Form.Group>
                    </div>

                    {/* <div className='container' style={box}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={subtitle}>Image</Form.Label>
                            <Form.Control style={{ width: '18rem' }} placeholder="imgage" onChange={handleChange} type="text" name="imgUrl" id="imgUrl" />
                        </Form.Group>
                    </div> */}

                    <div className='container' style={box}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header style={subtitle}>Favorite Art Categories</Card.Header>
                            {
                                tags.map(tag => (
                                    <li style={fav}>
                                        <label style={check} htmlFor={tag.name}>{tag.name}</label>
                                        <input onChange={handleCheck} type="checkbox" checked={tagNames.includes(tag.name) ? true : false} name={tag.name} id={tag._id} />
                                    </li>
                                ))
                            }
                        </Card>
                    </div>
                    <Button variant="light" type="submit" style={button}>
                        Submit
                    </Button>
                    <Button variant="light" type="goBack" onClick={goBack} style={button}>
                        Cancel
                    </Button>
                    <Button hidden={!currentApartment.isSubscribed} variant="danger" type="goBack" onClick={patchSubscription} style={button}>
                        Cancel Subscription
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default EditApartment