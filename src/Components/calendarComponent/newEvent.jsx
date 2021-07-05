import React from 'react'
import { Input, Button, TextArea, Modal } from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import { Grid, Segment,  Icon } from 'semantic-ui-react'
import "react-datepicker/dist/react-datepicker.css";
import Moment from 'moment';



const NewEvent = (props) => {
    return (
        <div>
            <Grid>
                <Modal open={!!props.openModal} onClose={props.closeAddNewEvent} style={{ width: "500px" }} dimmer="blurring" >
                    <Modal.Content>
                        <h2 style={{ display: "flex", justifyContent: "center" }}>Add new event</h2>
                        <Segment>
                            <label>Title: </label>
                            <Input
                                id="modalViewNameId"
                                name="modalViewName"
                                style={{ width: "100%", }}
                                type="text"
                                value={props.addEventName}
                                onChange={(ev) => props.setModalName(ev.target.value)}
                            />
                            <Grid.Column>
                                <label style={{ marginRight: "5px" }} >From:</label>
                                <Icon name="calendar alternate outline" size="large" />
                                <DatePicker
                                    selected={props.addEventStartDatePickerFrom}
                                    dateFormat="MM / dd / yyyy h:mm aa"
                                    showTimeSelect
                                    onChange={date => {
                                        if (date > props.addEventStartDatePickerTo){
                                            props.setAddEventStartDateTo(date)
                                        }
                                            props.setAddEventStartDateFrom(date)
                                    }
                                    }
                                    minDate={Moment().toDate()}

                                />
                            </Grid.Column>
                            <Grid.Column>
                                <label style={{ marginRight: "22px" }}>To:</label>
                                <Icon name="calendar alternate outline" size="large" />
                                <DatePicker
                                    showTimeSelect
                                    selected={props.addEventStartDatePickerTo}
                                    dateFormat="MM / dd / yyyy h:mm aa"
                                    onChange={date => props.setAddEventStartDateTo(date)}
                                    minDate={props.addEventStartDatePickerFrom}
                                />
                            </Grid.Column>
                            <label >Description:</label>
                            <TextArea
                                id="modalTextAreaId"
                                name="modalViewDescription"
                                style={{ marginTop: "10px", width: "100%", resize: "vertical", padding: "5px 5px 5px 5px" }}
                                value={props.addEventDescription}
                                onChange={(ev) => props.setTextArea(ev.target.value)}
                            />
                        </Segment>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button type="button" basic color='black' onClick={props.setOpenModal} style={{ float: "right", marginBottom: "10px" }}>Cancel</Button>
                        <Button type="button" color='blue' onClick={props.addEventSaveClick} style={{ float: "right", marginBottom: "10px" }}>Save</Button>
                    </Modal.Actions>
                </Modal>


            </Grid>

        </div>
    )
}

export default NewEvent