import React from 'react';
import { Sidebar, Accordion, Menu, Icon, Item, Container } from 'semantic-ui-react';
import './sidebar.css';




const SideBar = (props) => {


    const currentUser = JSON.parse(localStorage.currentUser)
    const role = currentUser.checkBox === "Admin";
   
    const showOnlyToAdmin = { display: role ? "block" : "none" }
    return (
        <div>
            <Sidebar
                as={Menu}
                inverted
                className="blue"
                vertical
                visible
                animation="overlay"
                style={{ width: "210px" }}
            >

                <Item >
                    <Container>
                        <h5 onClick={props.Dashboard} >
                            <Icon name="user" size="huge" />&nbsp; &nbsp;
                            {currentUser.username}
                        </h5>
                    </Container>
                </Item>
                <Accordion inverted>
                    <Menu.Item  onClick={props.Dashboard}
                         >
                        <h5>
                            <Icon name="tachometer alternate" size="large" />&nbsp; &nbsp;
                            Dashboard
                        </h5>
                    </Menu.Item>
                    <Menu.Item  onClick={props.EventCalendar}
                        to="calendar" >
                        <h5>
                            <Icon name="calendar alternate outline" size="large" onClick={props.EventCalendar} />&nbsp; &nbsp;
                            Events  Calendar
                        </h5>
                    </Menu.Item>
                    {/*  */}
                    <Menu.Item  onClick={props.Users}
                        to="calendar"
                        style={showOnlyToAdmin}>

                        <h5>
                            <Icon name="users" size="large" onClick={props.Users} />&nbsp; &nbsp;
                            Users
                        </h5>
                    </Menu.Item>
                    <Menu.Item  onClick={props.LogOut}
                        to="/" >
                        <h5>
                            <Icon name="sign-out alternate" size="large" />&nbsp; &nbsp;
                            Log Out
                        </h5>
                    </Menu.Item>
                </Accordion>
            </Sidebar>
        </div>
    )
}
export default SideBar