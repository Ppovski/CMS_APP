import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button, Form, Grid } from 'semantic-ui-react'
import { Segment, Icon, Input } from 'semantic-ui-react'
import {
    Link
} from "react-router-dom";


const Login = (props) => {



    const [email, setLoginEmail] = useState('');
    const [password, setPassword] = useState('');



    const LoginClick = (event) => {
        event.preventDefault();
        const users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []
        const loggedInUser = users.find(u => u.email === email && u.password === password)
        if (loggedInUser) {
            localStorage.currentUser = JSON.stringify(loggedInUser);
            props.history.push("/dashboard");
            return
        }
        alert("user didn't not long in");

    }


    return (
        <div>
            <img
                src="image/background.png"
                style={{ position: "fixed", width: "100%", height: "auto" }}

            />

            <Grid>
                <Grid.Column>
                    <Segment style={{ marginLeft: "35%", marginTop: "5%", marginRight: "35%" }}>

                        <Form onSubmit={LoginClick}>
                            <Grid.Column style={{ display: "flex", justifyContent: "center" }} >
                                <Icon name="user circle" size="massive" style={{ color: "#0d689f" }} />
                            </Grid.Column>
                            <h3 style={{ display: "flex", justifyContent: "center" }}>Log In</h3>
                            <Segment>

                                <label>Email:
                        <Input
                                        style={{ display: "flex" }}
                                        iconPosition='left'
                                        name="username"
                                        type="text"
                                        value={email}
                                        onChange={(ev) => setLoginEmail(ev.target.value)}>
                                        <input />
                                        <Icon name='at' />
                                    </Input>

                                </label>
                                <label>Password
                        <Input
                                        iconPosition='left'
                                        style={{ display: "flex" }}
                                        name="password"
                                        type="password"
                                        value={password}
                                        onChange={(ev) => setPassword(ev.target.value)}>
                                        <input />
                                        <Icon name='lock' />
                                    </Input>
                                </label>
                            </Segment>
                            <div className="loginButton">
                                <Grid.Column style={{ display: "flex", justifyContent: "center" }}>
                                    <Button type='submit' color="blue" onClick={LoginClick} style={{ width: "300px", borderRadius: "20px" }}>Log In</Button>
                                </Grid.Column>
                                <Grid.Column style={{ marginTop: "10px" }} >
                                    <span>New User? <Link to="/register" style={{ marginLeft: "5px" }}>Sign Up</Link></span>
                                </Grid.Column>

                            </div>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
    )

}

export default Login
