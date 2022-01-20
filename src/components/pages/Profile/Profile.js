import { useState, useEffect } from "react"
import apiUrl from "../../../apiConfig"

const UserApartments = (props) => {
    
	// get an apartment by Id
	const [userApartment, setUserApartment] = useState()
	useEffect(() => {
		getUserApartment()
	}, [])

	const getUserApartment = () => {
		const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.user.token}`
            },
        }
        console.log('USER APARTMENTS', setUserApartment)
        
        fetch(`${apiUrl}/apartments/user/${props.user._id}`, requestOptions)
            .then(res => res.json())
			.then(foundApartments => {
                console.log('THESE ARE THE USER APARTMENTS', foundApartments)
                console.log('USER APARTMENTS SET TO STATE', userApartment)
				setUserApartment(foundApartments)
			})
			.catch(err => console.log(err))
	}
    const userApartmentList = userApartment ? userApartment.apartments.map((apartment) => { return <li> {apartment.title} </li>}) : null
    console.log(userApartmentList)
    console.log('USER CREATED APT', userApartment)

    return (

        <div>
            {userApartmentList}
        </div>
        
    )
}

export default UserApartments