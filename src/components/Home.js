import { Form, FormControl, Button } from 'react-bootstrap'
const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<div>
		<h1>HOME</h1>
		<Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Zipe Code"
          className="me-3"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
	  </div>
	)
}

export default Home
