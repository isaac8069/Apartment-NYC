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
import Inbox from './components/pages/Message/Inbox'
import AllApartments from './components/pages/Apartment/Apartments_All'
import apiUrl from './apiConfig'
import CreateApartment from './components/pages/Apartment/CreateApartment'
import AllTags from './components/pages/Tag/Tags_All'
import CreateTag from './components/pages/Tag/CreateTag'
import EditTag from './components/pages/Tag/EditTag'
import DeleteTag from './components/pages/Tag/DeleteTag'
import DeleteApartment from './components/pages/Apartment/DeleteApartment'
import ApartmentTag from './components/pages/Profile/Profile'



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
	}, [])

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
			}, [])
			.catch(err => console.log(err))
	}

	const [tags, setTags] = useState([])
	useEffect(() => {
		getTags()
	}, [])

	const getTags = () => {
		fetch(`${apiUrl}/tags`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				// 'Authorization': `Bearer ${user.token}`
			}
		})

			.then(res => res.json())
			.then(foundTags => {
				setTags(foundTags.tags)
			}, [])
			.catch(err => console.log(err))
	}



	// get all user apartments by userId

	return (
		<Fragment>
			<Header user={user} />
			<Routes>
				<Route path='/' element={<Home msgAlert={msgAlert} user={user} apartments={apartments} getApartments={getApartments}/>} />
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
					element={<CreateApartment msgAlert={msgAlert} user={user} />}
				/>
				<Route
					path='/apartments/all'
					element={<AllApartments msgAlert={msgAlert} user={user} apartments={apartments} getApartments={getApartments} />}
				/>
				<Route
					path='/apartments/edit'
					element={<AllApartments msgAlert={msgAlert} user={user} apartments={apartments} />}
				/>
				<Route
					path='/apartments/delete'
					element={<DeleteApartment msgAlert={msgAlert} user={user} apartments={apartments} getApartments={getApartments} />}
				/>
				<Route
					path='/tags'
					element={<CreateTag msgAlert={msgAlert} user={user} />}
				/>
				<Route
					path='/tags/all'
					element={<AllTags msgAlert={msgAlert} user={user} tags={tags} getTags={getTags} />}
				/>
				<Route
					path='/tags/edit'
					element={<EditTag msgAlert={msgAlert} user={user} tags={tags} />}
				/>
				<Route
					path='/tags/delete'
					element={<DeleteTag msgAlert={msgAlert} user={user} tags={tags} getTags={getTags} />}
				/>
				<Route
					path='/messages'
					element={<Inbox msgAlert={msgAlert} user={user} />}
				/>
				<Route
					path='/profile'
					element={<ApartmentTag msgAlert={msgAlert} user={user} apartments={apartments} />}
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
