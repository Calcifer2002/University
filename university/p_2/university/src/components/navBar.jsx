import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/"><b>University</b></Navbar.Brand>
        <Nav className="me-auto">
        
          <NavDropdown title="Degree" id="basic-nav-dropdown">
            <NavDropdown.Item href="/degrees">All Degrees</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/degree/add">Add Degree</NavDropdown.Item>
            
          
       
          </NavDropdown>
          <NavDropdown title="Cohort" id="basic-nav-dropdown">
            <NavDropdown.Item href="/cohorts">All Cohorts</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/cohort/add">Add Cohort</NavDropdown.Item></NavDropdown>

            <NavDropdown title="Module" id="basic-nav-dropdown">
            <NavDropdown.Item href="/modules">All Modules</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/module/add">Add Module</NavDropdown.Item></NavDropdown>
            <NavDropdown title="Student" id="basic-nav-dropdown">
            <NavDropdown.Item href="/student/cohort">Students by cohort</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/student/add">Add Student</NavDropdown.Item>
            <NavDropdown.Item href="/student/grade">Add Grade</NavDropdown.Item></NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;

