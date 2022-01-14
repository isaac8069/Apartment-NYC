import { useState, useEffect } from "react"
import apiUrl from "../../../apiConfig"
import { Link } from "react-router-dom"

const UserApartments = (props) => {
    
	// get an apartment by Id
	const [userApartment, setUserApartment] = useState([])
	useEffect(() => {
		getUserApartment()
	}, [])

	const getUserApartment = () => {
		const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            },
        }
        fetch(`${apiUrl}/apartments/user/${props._id}`, requestOptions)
            .then(res => res.json())
			.then(foundApartment => {
				setUserApartment(foundApartment.apartments)
			}, [])
			.catch(err => console.log(err))
	}

    return (

        <div>

            <h1>Apartment</h1>
            <ul>
                {
                    props.apartments.map(apartment => (
                        <li>
        
                            {apartment.title}
                           
                
                        </li>
                    ))
                }
            </ul>
        </div>
        
    )


	
    return(
        <div>
            <h1>Found User Apartment</h1>
        </div>
    )
}

export default UserApartments