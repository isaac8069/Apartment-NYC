import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import apiUrl from '../../../apiConfig'

const CreateApartment = (props) => {
    const navigate = useNavigate()
    console.log('PROPS IN ALL APARTMENT', props)
    const [newApartment, setNewApartment] = useState({
        title: '',
        rent: '',
        description: '',
        address: '',
        address: '',
        address: '',
        bedrooms: '',
        bathrooms: '',
        amenities: '',
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
                address: {
                    neighborhood: newApartment.neighborhood,
                borough: newApartment.borough,
                zipcode: newApartment.zipcode
                },
                bedrooms: newApartment.bedrooms,
                bathrooms: newApartment.bathrooms,
                amenities: newApartment.amenities,
                tags: newApartment.tags,
                imgUrl: newApartment.imgUrl
            }
        }
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(preJSONBody),
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${props.user.token}`
            },
        }
        fetch(`${apiUrl}/apartments`, requestOptions)
            .then(postedApartment => {
                props.getApartments()
                navigate('/apartments/all')
                // setNewApartment({
                //     title: '',
                //     rent: '',
                //     description: '',
                //     address: '',
                //     address: '',
                //     address: '',
                //     bedrooms: '',
                //     bathrooms: '',
                //     amenities: '',
                //     // imgUrl: ''
                // })
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <p>This works for now</p>
            <form onSubmit={postApartment}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" onChange={handleChange} value={newApartment.title} />
                </div>
                <div>
                    <label htmlFor="rent">Rent:</label>
                    <input type="text" name="rent" id="rent" onChange={handleChange} value={newApartment.rent} />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input type="text" name="description" id="description" onChange={handleChange} value={newApartment.description} />
                </div>
                <div>
                    <label htmlFor="address">Neighborhood:</label>
                    <input type="text" name="address" id="address" onChange={handleChange} value={newApartment.address.neighborhood} />
                </div>
                <div>
                    <label htmlFor="address">Borough:</label>
                    <input type="text" name="address" id="address" onChange={handleChange} value={newApartment.address.borough} />
                </div>
                <div>
                    <label htmlFor="address">Zip Code:</label>
                    <input type="text" name="address" id="address" onChange={handleChange} value={newApartment.address.zipcode} />
                </div>
                <div>
                    <label htmlFor="bedrooms">Bedrooms:</label>
                    <input type="text" name="bedrooms" id="bedrooms" onChange={handleChange} value={newApartment.bedrooms} />
                </div>
                <div>
                    <label htmlFor="bathrooms">Bathrooms:</label>
                    <input type="text" name="bathrooms" id="bathrooms" onChange={handleChange} value={newApartment.bathrooms} />
                </div>
                <div>
                    <label htmlFor="amenities">Amenities:</label>
                    <input type="text" name="amenities" id="amenities" onChange={handleChange} value={newApartment.amenities} />
                </div>
                {/* <div>
                <label htmlFor="imgUrl">Image:</label>
                <input type="text" name="imgUrl" id="imgUrl" onChange={handleChange} value={newApartment.imgUrl} />
            </div> */}

                <input type="submit" value="Post" />
            </form>
        </div>
    )
}
{/* <Form onSubmit={postApartment}> */ }
{/* <Row classtitle="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Title"
                        defaultValue={newApartment.title}
                        title='title'
                        onChange={handleChange} type="text" name="title" id="title"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Rent</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="$"
                        defaultValue={newApartment.rent}
                        title='Rent'
                        onChange={handleChange} type="text" name="rent" id="rent"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Description"
                        defaultValue={newApartment.description}
                        title='description'
                        onChange={handleChange} type="text" name="description" id="description"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row classtitle="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                    <Form.Label>Neighborhood</Form.Label>
                    <Form.Control type="text" placeholder="Bushwick" defaultValue={newApartment.address.neighborhood} title='address' onChange={handleChange} type="text" name="address" id="address" />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid neighborhood.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="validationCustom03">
                    <Form.Label>Borough</Form.Label>
                    <Form.Control type="text" placeholder="Brooklyn" defaultValue={newApartment.address.borough} title='address' required onChange={handleChange} type="text" name="address" id="address" />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid borough.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control type="text" placeholder="Zip Code" defaultValue={newApartment.address.zipcode} title='address' required onChange={handleChange} type="text" name="address" id="address" />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row classtitle="mb-3">
                <Form.Group as={Col} md="1" controlId="validationCustom04">
                    <Form.Label>Bedrooms</Form.Label>
                    <Form.Control type="text" placeholder="number" defaultValue={newApartment.bedrooms} title='bedrooms' required onChange={handleChange} type="text" name="bedrooms" id="bedrooms" />
                    <Form.Control.Feedback type="invalid">
                        Please provide number of bedrooms.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="1" controlId="validationCustom03">
                    <Form.Label>Bathrooms</Form.Label>
                    <Form.Control type="text" placeholder="number" defaultValue={newApartment.bathrooms} title='bathrooms' required onChange={handleChange} type="text" name="bathrooms" id="bathrooms" />
                    <Form.Control.Feedback type="invalid">
                        Please provide number of bathrooms.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="1" controlId="validationCustom03">
                    <Form.Label>Roommates</Form.Label>
                    <Form.Control type="text" placeholder="number" defaultValue={newApartment.roommates} title='roommates' required onChange={handleChange} type="text" name="rooommates" id="roommates" />
                    <Form.Control.Feedback type="invalid">
                        Please provide number of roommates.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationCustom05">
                    <Form.Label>Amenities</Form.Label>
                    <Form.Control type="text" placeholder="optional" defaultValue={newApartment.amenities} title='amenities' onChange={handleChange} type="text" name="amenities" id="amenities" />
                </Form.Group>
            </Row>
            {/* <Form.Group classtitle="position-relative mb-3">
                <Form.Label>File</Form.Label>
                <Form.Control
                    type="file"
                    title="file"
                    onChange={handleChange}
                    isInvalid={!!errors.file}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                    {errors.file}
                </Form.Control.Feedback>
            </Form.Group> */}
//     <Button type="submit">Submit form</Button>
// </Form> */}
export default CreateApartment