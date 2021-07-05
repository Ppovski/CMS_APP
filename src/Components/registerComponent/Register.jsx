import React, { useState } from 'react'
import {
    Link
} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import { Button, Form, Grid, Segment, Radio } from 'semantic-ui-react'
import { Select } from 'semantic-ui-react'
import { Icon, Input } from 'semantic-ui-react'
import { Checkbox } from 'semantic-ui-react'
import { v4 as uuid4 } from 'uuid';



const Register = (props) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [radio, setRadio] = useState('');
    const [checkBox, checkBoxValue] = useState('');
    const [selected, setSelectChange] = useState('');
    // const [disable, setDisable] = useState(true)

 

    const SubmitClick = (event) => {
        event.preventDefault();
        const users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []
        if (users.some(x => username === x.username || x.email === email)) {
            alert("User name or email already registered");
            return;
        }
        if (confirmPassword === password) {
            users.push({
                id:uuid4(),
                username,
                email,
                password,
                confirmPassword,
                radio,
                select: selected,
                checkBox

            })
            localStorage.setItem("users", JSON.stringify(users))
            setUsername("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
            setRadio("")
            checkBoxValue("")
            setSelectChange("")
        } else {
            alert("Password mismatch ")
        }

    }

    const hendleDropdownValue = (event , data) =>{
        if(data.value)
        setSelectChange(data.value)
    }

    // const handleOnChange = (event :React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
    //     if(data.value)
    //     setSortBy( data.value.toString());
    //   }

    const registerOptions = [
        { key: 'IT', value: 'IT', text: 'IT' },
        { key: 'Administration', value: 'Administration', text: 'Administration' },
        { key: 'Accounting ', value: 'Accounting ', text: 'Accounting ' },
    ]

   

    return (
        <div>
            <div >
                <img
                    src="image/background.png"
                    style={{ position: "fixed", width: "100%", height: "100%" }} />
                <Container style={{ display: "flex", justifyContent: "center" }}>
                    <Grid>
                        <Grid.Column width={7}>
                            <Segment style={{ marginLeft: "70%", marginTop: "15%", marginRight: "-70%", position: "relative", }}>
                                <h1 style={{ display: "flex", justifyContent: "center" }}>Register</h1>

                                <Form onSubmit={SubmitClick}>
                                    <Segment>
                                        <Input style={{ display: "flex" }}
                                            iconPosition='left'
                                            name="username"
                                            placeholder='Username'
                                            type="text"
                                            value={username}
                                            onChange={(ev) => setUsername(ev.target.value)}
                                            >
                                            <input />
                                            <Icon name='user' />
                                        </Input>
                                        <Input
                                            style={{ marginTop: "10px", display: "flex" }}
                                            iconPosition='left'
                                            name="email"
                                            placeholder='Email'
                                            type="email"
                                            value={email}
                                            onChange={(ev) => setEmail(ev.target.value)}
                                            >
                                            <input />
                                            <Icon name='at' />
                                        </Input>
                                        <Input
                                            style={{ marginTop: "10px", display: "flex" }}
                                            iconPosition='left'
                                            name="password"
                                            placeholder='Password'
                                            type="password"
                                            value={password}
                                            onChange={(ev) => setPassword(ev.target.value)}>
                                            <input />
                                            <Icon name='lock' />
                                        </Input>
                                        <Input
                                            style={{ marginTop: "10px", display: "flex" }}
                                            iconPosition='left'
                                            name="confirmPassword"
                                            placeholder='Confirm Password'
                                            type="password"
                                            value={confirmPassword}
                                            onChange={(ev) => setConfirmPassword(ev.target.value)}>
                                            <input />
                                            <Icon name='lock' />
                                        </Input>
                                        <Container style={{ marginTop: "5px" }}>
                                            <span> Is active user ? </span>
                                        </Container>
                                        <Radio style={{ marginTop: "5px" }}
                                            label='YES'
                                            name="radioGroup"
                                            type="radio"
                                            checked={radio === "YES"}
                                            onChange={() => setRadio("YES")} />
                                        <Radio style={{ marginLeft: "10px", marginBottom: "10px" }}
                                            label='NO'
                                            name="radioGroup"
                                            type="radio"
                                            checked={radio === "NO"}
                                            onChange={() => setRadio("NO")}
                                        />

                                        <Select 
                                            placeholder='Select your job title ' 
                                            options={registerOptions}
                                            style={{ display: "flex" }}
                                            value={selected}
                                            onChange={hendleDropdownValue}
                                        />
                                        {/* Select options={options} value={sortBy} selection onChange={handleOnChange}
      /> */}
                                        <Container style={{ marginTop: "10px" }}>
                                            <Checkbox label={<label>Admin</label>}
                                                value="Admin"
                                                checked={checkBox === "Admin"}
                                                onChange={() => checkBoxValue("Admin")}
                                            />
                                            <Checkbox label={<label>User</label>} style={{ marginLeft: "10px" }}
                                                value="User"
                                                checked={checkBox === "User"}
                                                onChange={() => checkBoxValue("User")}
                                            />
                                        </Container>
                                    </Segment>
                                    <Grid.Column style={{ display: "flex", justifyContent: "center" }}>
                                        <Button color='blue' disabled={!email || !password || !username || !confirmPassword || !radio || !checkBox} style={{ borderRadius: "15px", width: "400px" }} >
                                            Submit
                                        </Button>
                                    </Grid.Column>
                                    <Container style={{ marginTop: "10px" }}><span>Already have an account?  <Link to="/">Sing In</Link></span></Container>
                                </Form>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default Register
