import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import NavDropDown from 'react-bootstrap/NavDropdown';

const MainNavBar = ({pageName}) => {
    return (
        <NavBar fixed='true' bg='light'>
            <NavBar.Brand href='/'>Company Logo</NavBar.Brand>
            <NavBar.Brand style={pageNameStyle}> { pageName } </NavBar.Brand>
            <NavBar.Collapse className="justify-content-end">
                <Nav>
                    <NavDropDown title='User' id="basic-nav-dropdown">
                        <NavDropDown.Item href='#'>Profile</NavDropDown.Item>
                        <NavDropDown.Item href='#'>Settings</NavDropDown.Item>
                        <NavDropDown.Item href='#'>Logout</NavDropDown.Item>
                    </NavDropDown> 
                </Nav>
            </NavBar.Collapse>
        </NavBar>
    )
}

const pageNameStyle = {
    color: 'red',
    textAlign: 'right'
}

export default MainNavBar
