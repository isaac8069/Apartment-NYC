import { Card, Row, Col } from 'react-bootstrap'

const AllTags = (props) => {
    console.log('PROPS IN ALL TAGS', props)
    
    return (

        <div>

            <h1>Tags</h1>
            <ul>
                {
                    props.tags.map(tag => (
                        <li>
        
                            <b>Tag: </b>{tag.name}
                            <br></br>
                
                        </li>
                    ))
                }
            </ul>
        </div>
        
    )
}

export default AllTags