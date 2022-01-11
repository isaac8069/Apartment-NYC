import { Card, Row, Col } from 'react-bootstrap'

const AllApartments = (props) => {
    console.log('PROPS IN ALL APARTMENTS', props)
    
    return (
        
        <div>

            <h1>Apartments</h1>
            <ul>
                {
                    props.apartments.map(apartment => (
                        <li>
                            {apartment.title}
                            <br></br>
                            ${apartment.rent}
                            <br></br>
                            {apartment.description}<br></br>
                            {apartment.address.neighborhood}
                            {apartment.address.borough}
                            {apartment.address.zipcode}
                         
                        </li>
                    ))
                }
            </ul>
        </div>
        
    )
}

export default AllApartments