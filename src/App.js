// import React, { Component, Fragment } from 'react'
import React, { useState, useEffect, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Home from './components/Home'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import Apartment from './components/pages/Apartment/CreateApartment'
import Inbox from './components/pages/Message/Inbox'
import Tag from './components/pages/Tag/CreateTag'
import Profile from './components/pages/Profile/Profile'
import AllApartments from './components/pages/Apartment/Apartments_All'
import apiUrl from './apiConfig'



const App = () => {

	const [user, setUser] = useState(null)
	const [msgAlerts, setMsgAlerts] = useState([])

	console.log('user in app', user)
	console.log('message alerts', msgAlerts)
	const clearUser = () => {
		console.log('clear user ran')
		setUser(null)
	}

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id))
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
			)
		})
	}

	const [apartments, setApartments] = useState([])
	useEffect(() => {
		getApartments()
	  },[])
	
	 const getApartments = () => {
		  fetch(`${apiUrl}/apartments`, {
			  method: 'GET',
			  headers: {
				'Content-Type': 'application/json',
				// 'Authorization': `Bearer ${user.token}`
			  }
		  })
		  
			  .then(res => res.json())
			  .then(foundApartments => {
				  setApartments(foundApartments.apartments)
			  },[])
			  .catch(err => console.log(err))
	  }

	return (
		<Fragment>
			<Header user={user} />
			<Routes>
				<Route path='/' element={<Home msgAlert={msgAlert} user={user} />} />
				<Route
					path='/sign-up'
					element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path='/sign-in'
					element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path='/sign-out'
					element={
						<RequireAuth user={user}>
							<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
						</RequireAuth>
					}
				/>
				<Route
					path='/change-password'
					element={
						<RequireAuth user={user}>
							<ChangePassword msgAlert={msgAlert} user={user} />
						</RequireAuth>}
				/>
				<Route
					path='/apartments'
					element={<Apartment msgAlert={msgAlert} user={user} />}
				/>
				<Route
					path='/apartments/all'
					element={<AllApartments msgAlert={msgAlert} user={user} apartments={apartments}/>}
				/>
				<Route
					path='/tags'
					element={<Tag msgAlert={msgAlert} user={user} />}
				/>
				<Route
					path='/messages'
					element={<Inbox msgAlert={msgAlert} user={user} />}
				/>
				<Route
					path='/profile'
					element={<Profile msgAlert={msgAlert} user={user} />}
				/>
			</Routes>
			{msgAlerts.map((msgAlert) => (
				<AutoDismissAlert
					key={msgAlert.id}
					heading={msgAlert.heading}
					variant={msgAlert.variant}
					message={msgAlert.message}
					id={msgAlert.id}
					deleteAlert={deleteAlert}
				/>
			))}
		</Fragment>
	)
}

export default App
