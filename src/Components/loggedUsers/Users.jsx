import React, { useState } from 'react'
import { Header, Table, Button } from 'semantic-ui-react'
import SideBar from '../../navigationBar/sideBar'
import TopBar from '../../navigationBar/topBar'


const Users = (props) => {
  const [usersList, setUsersList] = useState(JSON.parse(localStorage.getItem('users')) || []);
  const LogOut = () => {
    props.history.push("/");
  }
  const Dashboard = () => {
    props.history.push("dashboard");
  }
  const EventCalendar = () => {
    props.history.push("calendar");
  }

  const deleteUser = (id) => {
    const newItems = [...usersList]
    newItems.splice(id, 1)
    localStorage.setItem("users", JSON.stringify(newItems));
    setUsersList(newItems)
}




  return (
    <div>
      <TopBar
        LogOut={LogOut}
      />
      <SideBar
        Dashboard={Dashboard}
        LogOut={LogOut}
        EventCalendar={EventCalendar}
      />
      <div >
        {usersList.map((user, id) => (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Table celled padded style={{ width: "700px", marginTop: "30px" }}  >
              <Table.Header >
                <Table.Row>
                  <Table.HeaderCell textAlign='center' >Username</Table.HeaderCell>
                  <Table.HeaderCell textAlign='center'>Email</Table.HeaderCell>
                  <Table.HeaderCell textAlign='center'>Role</Table.HeaderCell>
                  <Table.HeaderCell textAlign='center'>Job Title</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Header
                      as='h2'
                      textAlign='center'
                    >
                      <span>{user.username}</span>
                    </Header>
                  </Table.Cell>
                  <Table.Cell
                    textAlign='center'
                  >
                    <span>{user.email}</span>
                  </Table.Cell>
                  <Table.Cell
                    textAlign='center'
                  >
                    <span>{user.checkBox}</span>
                  </Table.Cell>
                  <Table.Cell
                    textAlign='center'
                  >
                    <span>{user.select}</span>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <Button color="red" style={{  height: "40px", marginTop: "91px" }} onClick={()=>deleteUser(id)} >Delete User</Button>


          </div>
        ))}

      </div>
    </div>
  )
}
export default Users