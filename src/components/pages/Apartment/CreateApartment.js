import React, { useState, useEffect } from 'react'
import { Form, Button, Row, InputGroup, FormControl, FormLabel, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import apiUrl from '../../../apiConfig'

const CreateApartment = (props) => {
    const navigate = useNavigate()
    console.log('PROPS IN ALL APARTMENT', props)
    const [newApartment, setNewApartment] = useState({
        title: '',
        rent: '',
        description: '',
        neighborhood: '',
        borough: '',
        zipcode: '',
        bedrooms: '',
        bathrooms: '',
        amenities: '',
        roommates: '',
        tags: [],
        imgUrl: ''
    })

    const handleChange = (e) => {
        setNewApartment({ ...newApartment, [e.target.name]: e.target.value })
    }

    const postApartment = (e) => {
        e.preventDefault()
        let preJSONBody = {
            apartment: {
                title: newApartment.title,
                rent: newApartment.rent,
                description: newApartment.description,
                neighborhood: newApartment.neighborhood,
                borough: newApartment.borough,
                zipcode: newApartment.zipcode,
                bedrooms: newApartment.bedrooms,
                bathrooms: newApartment.bathrooms,
                amenities: newApartment.amenities,
                roommates: newApartment.roommates,
                tags: newApartment.tags,
                imgUrl: newApartment.imgUrl
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
        fetch(`${apiUrl}/apartments`, requestOptions)
            .then(postedApartment => {
                navigate('/apartments/all')
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <h1>Create Your Listing</h1>
            <Form onSubmit={postApartment}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridTitle">
                        <FormLabel>Title</FormLabel>
                        <FormControl type="text" name="title" onChange={handleChange} value={newApartment.title} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridRent">
                        <FormLabel>Rent</FormLabel>
                        <FormControl type="text" name="rent" onChange={handleChange} value={newApartment.rent} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridDescription">
                    <FormLabel>Description</FormLabel>
                    <FormControl as="textarea" aria-label="With textarea" name="description" onChange={handleChange} value={newApartment.description} />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridNeighborhood">
                        <FormLabel>Neighborhood</FormLabel>
                        <FormControl type="text" name="neighborhood" id="neighborhood" onChange={handleChange} value={newApartment.neighborhood} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridBorough">
                        <FormLabel>Borough</FormLabel>
                        <FormControl type="text" name="borough" id="borough" onChange={handleChange} value={newApartment.borough} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <FormLabel>Zip Code</FormLabel>
                        <FormControl type="text" name="zipcode" id="zipcode" onChange={handleChange} value={newApartment.zipcode} />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="formGridBedrooms">
                        <FormLabel>Bedrooms</FormLabel>
                        <FormControl type="text" name="bedrooms" id="bedrooms" onChange={handleChange} value={newApartment.bedrooms} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridBathrooms">
                        <FormLabel>Bathrooms</FormLabel>
                        <FormControl type="text" name="bathrooms" id="bathrooms" onChange={handleChange} value={newApartment.bathrooms} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridRoommates">
                        <FormLabel>Roommates</FormLabel>
                        <FormControl type="text" name="roommates" id="roommates" onChange={handleChange} value={newApartment.roommates} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAmenities">
                    <FormLabel>Amenities</FormLabel>
                    <FormControl type="text" name="amenities" id="amenities" onChange={handleChange} value={newApartment.amenities} />
                </Form.Group>


                {/* <div>
                <label htmlFor="imgUrl">Image:</label>
                <input type="text" name="imgUrl" id="imgUrl" onChange={handleChange} value={newApartment.imgUrl} />
            </div> */}

                <Button type="submit" variant="primary">Submit</Button> 
            </Form>
        </div>
    )
}

export default CreateApartment