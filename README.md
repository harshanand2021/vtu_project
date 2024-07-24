# VTU (Visvesvaraya Technological University) Project

## Project Overview

This project is developed as part of the curriculum at Visvesvaraya Technological University (VTU). The application is built using the React framework and various supporting libraries. It demonstrates the use of modern web development practices, including component-based architecture, state management, and API interactions.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **react-axios**: A library used to make HTTP requests to fetch or save data.
- **JSON**: JavaScript Object Notation, used for API creation.
- **react-bootstrap**: A library used for styling the components with Bootstrap.
- **react-router-dom**: A library used for routing between different components.


## Installation

        vtu_project/
    ├── public/
    │   ├── index.html
    │   └── ...
    ├── src/
    │   ├── components/
    │   │   ├── Header.js
    │   │   ├── Footer.js
    │   │   ├── Home.js
    │   │   ├── About.js
    │   │   ├── Contact.js
    │   │   └── ...
    │   ├── services/
    │   │   ├── api.js
    │   │   └── ...
    │   ├── styles/
    │   │   ├── App.css
    │   │   └── ...
    │   ├── App.js
    │   ├── App.test.js
    │   ├── index.js
    │   └── ...
    ├── package.json
    └── ...


1. Clone the repository:

   ```bash
   git clone https://github.com/harshanand2021/VTU-Project.git

2. Navigate to the project directory:

    ```bash
    cd vtu_project

3. Install dependencies:

    ```bash
    npm install

## Running the Application

- To start the application, run:

    ```bash
    npm start

## API Integration
### Creating an API

    // data.json
    {
        "students": [
            { "id": 1, "name": "John Doe", "course": "Computer Science" },
            { "id": 2, "name": "Jane Doe", "course": "Electronics" }
        ]
    }
### Fetching data with react-axios

The project uses JSON for creating APIs. Here is an example of a simple API endpoint:

    // services/api.js
    import axios from 'axios';

    const API_URL = 'http://localhost:3000/data.json';

    export const fetchStudents = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data.students;
    } catch (error) {
        console.error('Error fetching students:', error);
        throw error;
        }
    };

### Routing with react-router-dom

The application uses `react-router-dom` to handle routing between different components. Here is an example of how routes are set up:

    // App.js
    import React from 'react';
    import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
    import Home from './components/Home';
    import About from './components/About';
    import Contact from './components/Contact';
    import Header from './components/Header';
    import Footer from './components/Footer';

    function App() {
    return (
        <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
        </Router>
    );
    }

    export default App;

### Stying with react-bootstrap

The project uses `react-bootstrap` for styling the components. Here is an example of how it is used:

    // components/Header.js
    import React from 'react';
    import { Navbar, Nav } from 'react-bootstrap';

    function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">VTU Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
    }

    export default Header;
### Conclusion

This documentation provides an overview of the VTU Project, including its structure, installation steps, API integration, routing, and styling. The project serves as a practical example of building a modern web application using React and its ecosystem.

For more detailed information, please refer to the individual files and comments within the codebase.