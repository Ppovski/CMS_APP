import React from 'react'
import { Input, Button, TextArea } from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import { Grid, Segment,  Icon, } from 'semantic-ui-react'
import "react-datepicker/dist/react-datepicker.css";
import Moment from 'moment';




const EditEvent = (props) => {

    return (
        <div>
            { props.eventViewIsOpen &&


                <Segment style={{ marginLeft: "22px", marginRight: "-40px",  }}>
                    <h3 style={{ display: "flex", justifyContent: "center" }}>Edit Event</h3>
                    <Segment >
                        <label>Title</label>
                        <Input
                            style={{ width: "100%" }}
                            placeholder="Name"
                            type="text"
                            value={props.eventViewName}
                            onChange={(e) => props.setEventViewName(e.target.value)}
                        />

                        <Grid.Column>

                            <label style={{ marginRight: "5px" }} >From:</label>
                            <Icon name="calendar alternate outline" size="large" />
                            <DatePicker
                                value={(Moment(props.eventViewStartDateEventFrom)).format("MM / DD / yyyy h:mm a")}
                                minDate={Moment().toDate()}
                                onChange={(date) => props.setStartEventFrom(date)}
                            />

                        </Grid.Column>
                        <Grid.Column>


                            <label style={{ marginRight: "22px" }}>To:</label>
                            <Icon name="calendar alternate outline" size="large" />
                            <DatePicker
                                value={(Moment(props.eventViewStartDateEventTo)).format("MM / DD / yyyy h:mm a")}
                                minDate={Moment().toDate()}
                                onChange={(date) => props.setStartEventTo(date)}
                            />

                        </Grid.Column>
                        <label>Description:</label>
                        <TextArea
                            id="segmentTextAreaId"
                            name="eventViewDescription"
                            style={{ marginTop: "15px", width: "100%", resize: "vertical", padding: "5px 5px 5px 5px" }}
                            placeholder='Description'
                            value={props.eventViewDescription}
                            onChange={(e) => props.setEventViewDescription(e.target.value)}

                        />
                    </Segment>
                    <Button color='blue' style={{ marginTop: "10px", width: "100%" }} onClick={props.editEventSaveClick} >Save</Button>
                    <Button color='red' style={{ marginTop: "10px", width: "100%" }} onClick={props.deleteEventValidation} >Delete</Button>
       
                </Segment>

            }
        </div>
    )
}
export default EditEvent