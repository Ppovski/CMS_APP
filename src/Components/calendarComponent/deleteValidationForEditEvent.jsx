import React from 'react'
import {  Button,  Modal } from 'semantic-ui-react'
import { Grid, Icon } from 'semantic-ui-react'
import "react-datepicker/dist/react-datepicker.css";
import "./calendarDatePicker.css";

const DeleteValidation = (props) => {
    console.log(props)
    return (
        <div>
            <Grid>
                <Modal open={!!props.deleteEventOpenValidation} onClose={props.deleteEventCloseValidation} style={{ width: "500px" }} dimmer="blurring" >
                    <Modal.Content>

                        <Grid.Column style={{ display: "flex", justifyContent: "center" }} >
                            <Icon name="trash alternate outline" size="huge" style={{color:"#db2828"}}  />
                        </Grid.Column>

                        <h2 style={{ display: "flex", justifyContent: "center" }}>Are you sure ?</h2>
                        <p style={{ display: "flex", justifyContent: "center" }}>Do you really want to delete these event ?</p>

                    </Modal.Content>
                    <Modal.Actions>
                        <Button type="button" color='red' onClick={props.deleteEventFromCalendar} style={{ float: "right", marginBottom: "10px" }}>Delete Event</Button>
                        <Button type="button" basic color='black' onClick={props.setDeleteEventOpenValidation} style={{ float: "right", marginBottom: "10px" }}>Cancel</Button>

                    </Modal.Actions>
                </Modal>


            </Grid>
        </div>
    )
}
export default DeleteValidation
