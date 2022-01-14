import { Card, Row, Col } from 'react-bootstrap'
import { useEffect } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const AllTags = (props) => {
    console.log('PROPS IN ALL TAGS', props)

    useEffect(() =>{
        props.getTags()
    }, [])

    return (

        <div>

            <h1>Tags</h1>
            <ul>
                {
                    props.tags.map((tag, t )=> (
                        <li key={t}>
                            
        <ListGroup className="list-group-flush" >
        <ListGroupItem> <b>{tag.name}</b></ListGroupItem>
                
                            </ListGroup>
                        </li>
                    ))
                }
            </ul>
        </div>
        
    )
}

export default AllTags