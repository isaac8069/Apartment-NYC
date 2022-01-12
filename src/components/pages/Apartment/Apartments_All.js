import { Card, Row, Col, ListGroup, ListGroupItem, CardGroup } from 'react-bootstrap'

const box = {
    textAlign: 'left',
    margin: '20px',
    padding: '55px'
  }

const AllApartments = (props) => {
    console.log('PROPS IN ALL APARTMENTS', props)

    return (

        <div style={box}>

            <ul>
                {
                    props.apartments.map(apartment => (
                        <li><CardGroup>
                            <Card style={{ width: '18rem' }} border="success">
                                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                                <Card.Body></Card.Body>
                                <Card.Title>{apartment.title}</Card.Title>

                                <Card.Text><b>Description: </b>{apartment.description}</Card.Text>
                                <ListGroup className="list-group-flush" >
                                    <ListGroupItem><b>Rent: </b>${apartment.rent}</ListGroupItem>
                                    <ListGroupItem><b>Address: </b>{apartment.address.neighborhood}, {apartment.address.borough}</ListGroupItem>
                                    <ListGroupItem><b>Zip Code: </b>{apartment.address.zipcode}</ListGroupItem>
                                    <ListGroupItem><b>Bedrooms: </b>{apartment.bedrooms}</ListGroupItem>
                                    <ListGroupItem><b>Bathrooms: </b>{apartment.bathrooms}</ListGroupItem>
                                    <ListGroupItem><b>Amenities: </b>{apartment.amenities}</ListGroupItem>
                                    <ListGroupItem><b>Image: </b>{apartment.imgUrl}</ListGroupItem>

                                </ListGroup>
                            </Card>
                            </CardGroup>
                        </li>
                    ))
                }
            </ul>

        </div>

    )
}

export default AllApartments