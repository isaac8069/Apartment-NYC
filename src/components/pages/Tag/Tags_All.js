import { Card, Row, CardGroup, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { Carousel } from "react-bootstrap"
import Image1 from "../../images/apt1.jpeg"
import Image2 from "../../images/apt2.jpeg"
import Image3 from "../../images/apt3.jpeg"

const carstyle = {
    maxHeight: '400px',
    maxWidth: '100%',
    objectFit: 'cover',
    marginTop: '50px'
}

const AllTags = (props) => {
    console.log('PROPS IN ALL TAGS', props)

    useEffect(() => {
        props.getTags()
    }, [])

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    }


    return (
        <div>
            <div>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid"
                            src={Image1}
                            style={carstyle}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src={Image2}
                            style={carstyle}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid"
                            src={Image3}
                            style={carstyle}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

            </div>

            <h1>Tags</h1>
            <CardGroup>
                <Card>
           
                    <ul>
                        {
                            props.tags.map((tag, t) => (
                                <li key={t}>

                                    
                                        <Card.Text> <b>{tag.name}</b></Card.Text>

                                </li>
                            ))
                        }
                    </ul>
                     
                </Card>
            </CardGroup>
        </div>

    )
}

export default AllTags