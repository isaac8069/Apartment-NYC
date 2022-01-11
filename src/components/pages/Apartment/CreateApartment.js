import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Apartment = (props) => {

    const navigate = useNavigate()

    // const [apartment, setApartment] = useState({
    const [title, setTitle] = useState('')
    const [rent, setRent] = useState('')
    const [description, setDescription] = useState('')
    const [addressPropertiesNeighborhood, setAddressPropertiesNeighborhood] = useState('')
    const [addressPropertiesBorough, setAddressPropertiesBorough] = useState('')
    const [addressPropertiesZipCode, setAddressPropertiesZipCode] = useState('')
    const [bedrooms, setBedrooms] = useState('')
    const [bathrooms, setBathrooms] = useState('')
    const [amenities, setAmenities] = useState('')
    const [roommates, setRoommates] = useState('')
    const [imgUrl, setimgUrl] = useState('')
    // })

    // useEffect(() => {
    //     postApartment()
    // })

    const postApartment = (e) => {
        e.preventDefault()
        let preJSONBody = {
            tittle: title,
            rent: rent,
            description: description,
            address: addressPropertiesNeighborhood,
            address: addressPropertiesBorough,
            address: addressPropertiesZipCode,
            bedrooms: bedrooms,
            bathrooms: bathrooms,
            amenities: amenities,
            roommates: roommates,
            imgUrl: imgUrl
        }
        fetch('http://localhost:8000/apartments', {
            method: 'POST',
            body: JSON.stringify(preJSONBody),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(postedApartment => {
                props.refreshApartments()
                setTitle('')
            })
            .catch(err => console.error(err))
    }
    // const postApartment = (e) => {
    //     console.log('STEP1' )
    //     e.preventDefault()
    //     console.log('THIS IS THE STUFF FROM THE FORM', e)
    //     let preJSONBody = {
    //         tittle: title,
    //         rent: rent,
    //         description: description,
    //         address: addressPropertiesNeighborhood,
    //         address: addressPropertiesBorough,
    //         address: addressPropertiesZipCode,
    //         bedrooms: bedrooms,
    //         bathrooms: bathrooms,
    //         amenities: amenities,
    //         roommates: roommates,
    //         imgUrl: imgUrl
    //     }
    //     const requestOptions = {
    //         method: 'POST',
    //         body: JSON.stringify(preJSONBody),
    //         headers: {
    //           'Content-Type': 'application/json',
    //           'Authorization': `Bearer ${props.user.token}`
    //         },
    //       }
    //       fetch('http://localhost:8000/apartments', requestOptions)
    //         .then(postedApartment=> {
    //             console.log('STEP2' )
    //           props.getApartment()
    //           navigate('/')
    //         })
    //         .catch(err => console.error(err))
    // }
    // const handleChange = (e) => setApartment(e.target.name = e.target.value)
    // const handleChange = (e) => setTitle(e.target.name = e.target.value)
    // const handleChange = (e) => setRent(e.target.name = e.target.value)
    // const handleChange = (e) => setDescription(e.target.name = e.target.value)
    // const handleChange = (e) => setAddressPropertiesNeighborhood(e.target.name = e.target.value)
    // const handleChange = (e) => setAddressPropertiesBorough(e.target.name = e.target.value)
    // const handleChange = (e) => setAddressPropertiesZipCode(e.target.name = e.target.value)
    // const handleChange = (e) => setBedrooms(e.target.name = e.target.value)
    // const handleChange = (e) => setBathrooms(e.target.name = e.target.value)
    // const handleChange = (e) => setAmenities(e.target.name = e.target.value)
    // const handleChange = (e) => setRoommates(e.target.name = e.target.value)
    // const handleChange = (e) => setimgUrl(e.target.name = e.target.value)
    

    return (
        <Form onSubmit={postApartment}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Title"
                        defaultValue={title}
                        name='title'
                        onChange={e => setTitle(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Rent</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="$"
                        defaultValue={rent}
                        name='Rent'
                        onChange = {e => setRent(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Description"
                        defaultValue={description}
                        name='description'
                        onChange={e => setDescription(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                    <Form.Label>Neighborhood</Form.Label>
                    <Form.Control type="text" placeholder="Bushwick" defaultValue={addressPropertiesNeighborhood} name='address' onChange = {e => setAddressPropertiesNeighborhood(e.target.value)}/>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid neighborhood.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="validationCustom03">
                    <Form.Label>Borough</Form.Label>
                    <Form.Control type="text" placeholder="Brooklyn" defaultValue={addressPropertiesBorough} name='address' required onChange = {e => setAddressPropertiesBorough(e.target.value)}/>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid borough.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control type="text" placeholder="Zip Code" defaultValue={addressPropertiesZipCode} name='address' required onChange = {e => setAddressPropertiesZipCode(e.target.value)}/>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} md="1" controlId="validationCustom04">
                    <Form.Label>Bedrooms</Form.Label>
                    <Form.Control type="text" placeholder="number" defaultValue={bedrooms} name='bedrooms' required onChange = {e => setBedrooms(e.target.value)}/>
                    <Form.Control.Feedback type="invalid">
                        Please provide number of bedrooms.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="1" controlId="validationCustom03">
                    <Form.Label>Bathrooms</Form.Label>
                    <Form.Control type="text" placeholder="number" defaultValue={bathrooms} name='bathrooms' required onChange = {e => setBathrooms(e.target.value)}/>
                    <Form.Control.Feedback type="invalid">
                        Please provide number of bathrooms.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="1" controlId="validationCustom03">
                    <Form.Label>Roommates</Form.Label>
                    <Form.Control type="text" placeholder="number" defaultValue={roommates} name='roommates' required onChange = {e => setRoommates(e.target.value)} />
                    <Form.Control.Feedback type="invalid">
                        Please provide number of roommates.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationCustom05">
                    <Form.Label>Amenities</Form.Label>
                    <Form.Control type="text" placeholder="optional" defaultValue={amenities} name='amenities' onChange = {e => setAmenities(e.target.value)} />
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