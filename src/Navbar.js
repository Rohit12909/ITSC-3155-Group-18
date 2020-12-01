import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

const button = <Button variant="primary" type="submit" style={{marginLeft: "700px"}}>
Signup
</Button>
 
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
    
        };

      }
      
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><h1 style={{color: "white"}}>Contact List Manager</h1></div>
                        
                    </nav>
                </header>
            </div>
        )
    }
}
 
export default Navbar;