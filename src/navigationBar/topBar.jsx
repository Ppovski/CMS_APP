import React from 'react'
import { Menu } from 'semantic-ui-react'


const TopBar = (props) => {
  const handleItemClick = (e, { name, to }) => {
    props.history.push(to);
    this.setState({ activeItem: name })
  }
  const currentUser = JSON.parse(localStorage.currentUser)
  return (

    <div>
  
      <Menu color="blue" inverted style={{ borderRadius: "0", marginTop: "0" , height:"46px"}}>
        <Menu.Menu position='right'>
          
          <Menu.Item name='user'>
            {currentUser.checkBox}
          </Menu.Item>
          <Menu.Item
            name='logout'
            onClick={props.LogOut}
            to="/"
          >
            Log Out
              </Menu.Item>
          <Menu.Item
            name='help'
            onClick={handleItemClick}
            to='/admin/help/'
          >
            Help
              </Menu.Item>
        </Menu.Menu>
      </Menu>

    </div>
  )
}
export default TopBar