import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import apiUrl from "../../../apiConfig"
import { Card, Row, Col, ListGroup, ListGroupItem, CardGroup, Button } from 'react-bootstrap'

const box = {
    textAlign: 'left',
    margin: '20px',
    padding: '55px'
  }

const DeleteApartment = (props) => {

    const navigate = useNavigate()
    const [deleteApartment, setDeleteApartment] = useState({
        name: ''
    })

    useEffect(() => {
        props.getApartments()
    }, [])

    const removeApartment = (e) => {
        e.preventDefault()
        console.log('TYPE OF TARGET:', typeof e.target.value)
        

        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.user.token}`
            },
        }
        fetch(`${apiUrl}/apartments/${e.target.value}`, requestOptions)
            .then(deletedApartment => {
                props.getApartments()
                navigate('/apartments/all')
            })
            .catch(err => console.error(err))
    }

    return (
        <div style={box}>

            <h1>Apartments</h1>
            <ul>
                {
                    props.apartments.map((apartment, a) => (
                        <li key={a}><CardGroup>
                            <Card style={{ width: '18rem' }} border="success">
                                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                                <Card.Body></Card.Body>
                                <Card.Title>{apartment.title}</Card.Title>

                                <Card.Text><b>Description: </b>{apartment.description}</Card.Text>
                                <ListGroup className="list-group-flush" >
                                    <ListGroupItem><b>Rent: </b>${apartment.rent}</ListGroupItem>
                                    <ListGroupItem><b>Address: </b>{apartment.neighborhood}, {apartment.borough}</ListGroupItem>
                                    <ListGroupItem><b>Zip Code: </b>{apartment.zipcode}</ListGroupItem>
                                    <ListGroupItem><b>Bedrooms: </b>{apartment.bedrooms}</ListGroupItem>
                                    <ListGroupItem><b>Bathrooms: </b>{apartment.bathrooms}</ListGroupItem>
                                    <ListGroupItem><b>Amenities: </b>{apartment.amenities}</ListGroupItem>
                                    <ListGroupItem><b>Roommates: </b>{apartment.roommates}</ListGroupItem>
                                    <ListGroupItem><b>Image: </b>{apartment.imgUrl}</ListGroupItem>

                                </ListGroup>
                                <Button type="button" onClick={removeApartment} value={apartment._id}>Delete</Button>
                            </Card>
                            </CardGroup>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DeleteApartment