import React from 'react';
import { List, ListItem, ListItemText } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import { Link } from "react-router-dom";

class Profile extends React.Component {
    constructor() {
        super()
        this.state = {
            profile: {
                email: "homer.simpson@wildcodeschool.fr",
                name: "Homer",
                lastname: "Simpson"
            }
        };
    }

    render() {
        return (
            <div>
                <Link to="/signin">Sign out</Link>
                <List>
                    <ListItem>
                        <ListItemText primary="email" secondary="my email" />
                    </ListItem>
                </List>


            </div>
        )
    }
}
export default Profile;