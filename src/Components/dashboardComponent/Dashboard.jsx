import React from 'react'
import { Grid, Segment, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import SideBar from "../../navigationBar/sideBar"
import TopBar from '../../navigationBar/topBar'

const Dashboard = (props) => {
    const LogOut = () => {
        props.history.push("/");
    }
    const EventCalendar = () => {
        props.history.push("calendar");
    }
    const Dashboard = () => {
        props.history.push("dashboard");
    }
    const Users = () => {
        props.history.push("users");
    }
    return (
        <div>
            < SideBar
                EventCalendar={EventCalendar}
                Users={Users}
                LogOut={LogOut}
                Dashboard={Dashboard}
            />
            <TopBar
                EventCalendar={EventCalendar}
                LogOut={LogOut}
                Users={Users}
                Dashboard={Dashboard}
            />
            <Grid  >
                <Grid.Column >
                    <h2 style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}  >Events calendar</h2>
                    <Grid.Column style={{ display: "flex", justifyContent: "center" }}>
                        <Link to="calendar" >
                            <Segment color="red" style={{ width: "500px", }}>
                                <Image src="image/4.png" />
                            </Segment>
                        </Link>
                 
                    </Grid.Column>
                </Grid.Column>
            </Grid>
        </div>
    )

}

export default Dashboard
