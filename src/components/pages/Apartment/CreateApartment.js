import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Apartment = (props) => {

    const navigate = useNavigate()

    const [apartment, setApartment] = useState({
    userId: props.user._id,
    tags: [],
    address: {
        properties: {
            neighborhood: '',
            borough: '',
            zipcode: ''
        }
    }
    })

    // useEffect(() => {
    //     postApartment()
    // })

    const postApartment = (e) => {
        e.preventDefault()
        let preJSONBody = {
            title: apartment.title,
            rent: apartment.rent,
            description: apartment.description,
            address: apartment.address,
            bedrooms: apartment.bedrooms,
            bathrooms: apartment.bathrooms,
            amenities: apartment.amenities,
            roommates: apartment.roommates,
            imgUrl: apartment.imgUrl
        }
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(preJSONBody),
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${props.user.token}`
            },
          }
          fetch('http://localhost:8000/apartments', requestOptions)
            .then(postedApartment=> {
              props.getApartment()
              navigate('/')
            })
            .catch(err => console.error(err))
    }
    // const handleChange = (e) => setValue('select', e.target.value);
    
    return (
        <Form onSubmit={postApartment}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Title"
                        defaultValue={apartment.title}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Rent</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="$"
                        defaultValue={apartment.rent}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Description"
                        defaultValue={apartment.description}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                    <Form.Label>neighborhood</Form.Label>
                    <Form.Control type="text" placeholder="optional" defaultValue={apartment.address.properties.neighborhood} />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid neighborhood.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="validationCustom03">
                    <Form.Label>borough</Form.Label>
                    <Form.Control type="text" placeholder="borough" defaultValue={apartment.address.properties.borough} required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid borough.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control type="text" placeholder="Zip" defaultValue={apartment.address.properties.zipcode} required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} md="1" controlId="validationCustom04">
                    <Form.Label>Bedrooms</Form.Label>
                    <Form.Control type="text" placeholder="number" defaultValue={apartment.bedrooms} required />
                    <Form.Control.Feedback type="invalid">
                        Please provide number of bedrooms.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="1" controlId="validationCustom03">
                    <Form.Label>Bathrooms</Form.Label>
                    <Form.Control type="text" placeholder="number" defaultValue={apartment.bathrooms} required />
                    <Form.Control.Feedback type="invalid">
                        Please provide number of bathrooms.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationCustom05">
                    <Form.Label>Amenities</Form.Label>
                    <Form.Control type="text" placeholder="optional" defaultValue={apartment.amenities} />
                </Form.Group>
            </Row>
            {/* <Form.Group className="position-relative mb-3">
                <Form.Label>File</Form.Label>
                <Form.Control
                    type="file"
                    name="file"
                    onChange={handleChange}
                    isInvalid={!!errors.file}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                    {errors.file}
                </Form.Control.Feedback>
            </Form.Group> */}
            <Button type="submit">Submit form</Button>
        </Form>
    )
}

export default Apartment