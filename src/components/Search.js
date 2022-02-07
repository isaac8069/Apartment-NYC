import { Card, ListGroup, ListGroupItem, CardGroup } from 'react-bootstrap'
import apiUrl from '../apiConfig'
import { useEffect, useState } from 'react'

const box = {
    textAlign: 'left',
    margin: '20px',
    padding: '55px'
}

const ZipSearchResults = (props) => {
    const[searchZip, setSearchZip] = useState('')

    useEffect(() => {
        getSearchZip()
    }, [])

    const getSearchZip = () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${props.user.token}`
            }
        }
        console.log('SEARCH ZIP:', searchZip.zipSearch)

        fetch(`${apiUrl}/apartments/search/${searchZip.zipSearch}`, requestOptions)
            .then(res => res.json())
            .then(searchZipResults => {
                // navigate('/results')
                console.log('THESE ARE THE APARTMENTS BY ZIP', searchZipResults)
            })
            .catch(err => console.log(err))
    }

    return (

        <div style={box}>

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
                            </Card>
                        </CardGroup>
                        </li>
                    ))
                }
            </ul>

        </div>

    )
}

export default ZipSearchResults