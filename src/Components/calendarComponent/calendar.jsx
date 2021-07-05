import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Grid, Segment, Container, Button } from 'semantic-ui-react'
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from 'uuid';
import EditEvent from "./editEvent"
import NewEvent from './newEvent';
import DeleteValidation from "./deleteValidationForEditEvent"
import "./calendarDatePicker.css";
import SideBar from '../../navigationBar/sideBar';
import TopBar from '../../navigationBar/topBar';






const Calendar = (props) => {

    const LogOut = () => {
        props.history.push("/");
    }
    const Dashboard = () => {
        props.history.push("dashboard");
    }
    const Users = () => {
        props.history.push("users");
    }


    const [openModal, setOpenModal] = useState(false);
    const [addEventStartDatePickerFrom, setAddEventStartDateFrom] = useState(new Date());
    const [addEventStartDatePickerTo, setAddEventStartDateTo] = useState(new Date());
    const [addEventName, setModalName] = useState("");
    const [addEventDescription, setTextArea] = useState("");

    const [eventList, setEventList] = useState(JSON.parse(localStorage.getItem('eventView')) || []);

    const [eventViewIsOpen, setEventViewOpen] = useState(false);

    const [deleteEventOpenValidation, setDeleteEventOpenValidation] = useState(false);

    const [eventViewName, setEventViewName] = useState("");
    const [eventViewStartDateEventFrom, setStartEventFrom] = useState(new Date())
    const [eventViewStartDateEventTo, setStartEventTo] = useState(new Date())
    const [eventViewDescription, setEventViewDescription] = useState("")

    const [eventViewEditId, setEditViewId] = useState("");
    console.log(eventViewEditId)
    const getItemsList = () => localStorage.getItem("eventView") ? JSON.parse(localStorage.getItem("eventView")) : [];




    const deleteEventFromCalendar = () => {
        const eventList = getItemsList()
        const newList = eventList.filter((it) => it.id !== eventViewEditId);
        localStorage.setItem("eventView", JSON.stringify(newList));
        setEventList(newList)
        setEventViewOpen(false)
        setDeleteEventOpenValidation(false)

    }


    const addEventSaveClick = (event) => {
        event.preventDefault();
        const eventView = localStorage.getItem("eventView") ? JSON.parse(localStorage.getItem("eventView")) : []
        if (eventView.some(x => addEventName === x.addEventName && x.addEventStartDatePickerFrom === addEventStartDatePickerFrom)) {
            alert("the event has already been created ")
            return;
        }
        eventView.push({
            id: uuidv4(),
            addEventName,
            addEventStartDatePickerFrom,
            addEventStartDatePickerTo,
            addEventDescription
        })
        localStorage.setItem("eventView", JSON.stringify(eventView));
        setEventList(eventView)
        setModalName("")
        setTextArea("")
        setAddEventStartDateFrom(new Date())
        setAddEventStartDateTo(new Date())
        setOpenModal(false)
    }

    const editEventSaveClick = (event) => {
        const eventList = getItemsList();
        const newEventList = eventList.filter((it) => it.id !== eventViewEditId)

        newEventList.push({
            id: eventViewEditId,
            addEventName: eventViewName,
            addEventStartDatePickerFrom: eventViewStartDateEventFrom,
            addEventStartDatePickerTo: eventViewStartDateEventTo,
            addEventDescription: eventViewDescription
        })
        localStorage.setItem("eventView", JSON.stringify(newEventList));
        setEventViewOpen(false)
        setEventList(newEventList)
    }

    const closeAddNewEvent = () => {
        setModalName("")
        setTextArea("")
        setAddEventStartDateFrom(new Date())
        setAddEventStartDateTo(new Date())
        setOpenModal(false)
    };
    const closeEditEvent = () => {
        setEventViewOpen(false)
    };
    const deleteEventCloseValidation = () => {
        setDeleteEventOpenValidation(false)
    };
    const deleteEventValidation = () => {
        setDeleteEventOpenValidation(true)
    };




    return (
        <div>
            <TopBar
                LogOut={LogOut}
            />
            <SideBar
                Dashboard={Dashboard}
                LogOut={LogOut}
                Users={Users}
            />
            <Container  >
                <Grid style={{ marginTop: "15px", display: "flex", justifyContent: "centre", marginLeft: "200px" }} >
                    <Grid.Column width={9}  >
                        <Segment style={{ width: "550px", height: "auto" }} >
                            <FullCalendar
                                plugins={[dayGridPlugin]}
                                weekends={false}
                                initialView="dayGridMonth"
                                eventClick={(calEvent, jsEvent, view) => {
                                    setEventViewOpen(true)
                                    const item = getItemsList().find(function idCompare(el, ind) {
                                        return parseInt(calEvent.event.id) === ind;
                                    });
                                    if (item) {
                                        setEventViewName(item.addEventName);
                                        setStartEventFrom(item.addEventStartDatePickerFrom)
                                        setStartEventTo(item.addEventStartDatePickerTo)
                                        setEventViewDescription(item.addEventDescription)
                                        setEditViewId(item.id)
                                    }
                                }
                                }
                                events={eventList.map((event, ind) => {
                                    return {
                                        id: ind,
                                        title: event.addEventName,
                                        start: event.addEventStartDatePickerFrom,
                                        end: event.addEventStartDatePickerTo,
                                        description: event.addEventDescription,
                                    }
                                })
                                }
                            />
                            <Button color='green' style={{ marginTop: "10px", }} onClick={setOpenModal}>Add Event</Button>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={5} >
                        <EditEvent
                            eventViewIsOpen={eventViewIsOpen}
                            setEventViewOpen={closeEditEvent}
                            deleteEventFromCalendar={deleteEventFromCalendar}
                            editEventSaveClick={editEventSaveClick}
                            eventViewName={eventViewName}
                            setEventViewName={setEventViewName}
                            eventViewStartDateEventFrom={eventViewStartDateEventFrom}
                            setStartEventFrom={setStartEventFrom}
                            eventViewStartDateEventTo={eventViewStartDateEventTo}
                            setStartEventTo={setStartEventTo}
                            eventViewDescription={eventViewDescription}
                            setEventViewDescription={setEventViewDescription}
                            deleteEventValidation={deleteEventValidation}

                        />
                    </Grid.Column>
                </Grid>
            </Container>
            <NewEvent
                openModal={openModal}
                setOpenModal={closeAddNewEvent}
                addEventSaveClick={addEventSaveClick}
                addEventName={addEventName}
                setModalName={setModalName}
                addEventStartDatePickerFrom={addEventStartDatePickerFrom}
                setAddEventStartDateFrom={setAddEventStartDateFrom}
                addEventStartDatePickerTo={addEventStartDatePickerTo}
                setAddEventStartDateTo={setAddEventStartDateTo}
                addEventDescription={addEventDescription}
                setTextArea={setTextArea}

            />
            <DeleteValidation
                deleteEventOpenValidation={deleteEventOpenValidation}
                setDeleteEventOpenValidation={deleteEventCloseValidation}
                deleteEventFromCalendar={deleteEventFromCalendar}
            />
        </div >

    )
}
export default Calendar
