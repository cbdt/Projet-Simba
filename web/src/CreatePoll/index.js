import React, { useState } from 'react'
import { Wizard, Steps, Step } from 'react-albus';
<<<<<<< HEAD
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/fr'

import Card from '../Card';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import './CreatePoll.css'

const Informations = ({next, title, location, description, setLocation, setTitle, setDescription}) => {

  const [errorName, setErrorName] = useState(undefined)

  const checkInputs = () => {
    setErrorName(undefined)
    let hasErrors = false
    
    if(title.trim() === "") {
      hasErrors = true
      setErrorName("Veuillez donner un nom au doodle.")
    }

    if(!hasErrors) next()
  }

  const footer = (
    <div className="CreatePoll_Button">
      { next && 
        <button className="Btn-primary" onClick={checkInputs}>Suivant</button>
      }
    </div>
=======
import Card from '../Card';
import './CreatePoll.css'

const Informations = ({next, previous}) => {


  let [title, setTitle] = useState("")
  let [description, setDescription] = useState("")
  let [location, setLocation] = useState("")
  const footer = (
    <>
      { previous && 
      <button className="Btn-primary" onClick={previous}>Précedent</button>
      }
      { next && 
      <button className="Btn-primary" onClick={next}>next</button>
      }
    </>
>>>>>>> master
  )

  return (
    <Card title="Informations" footer={footer}>
      <div className="CreatePoll_Form">
        <div className="CreatePoll_Input">
<<<<<<< HEAD
          { errorName && 
            <span className="CreatePoll_LabelError">{ errorName }</span>
          }
          <input value={title} type="text" placeholder="Soirée SI" onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className="CreatePoll_Input">
          <input value={location} type="text" placeholder="Chez Kévin" onChange={(e)=>setLocation(e.target.value)}/>
        </div>
        <div className="CreatePoll_Input">
          <textarea placeholder="Description" onChange={(e)=>setDescription(e.target.value)} value={description}>
          </textarea>
=======
          <input value={title} type="text" placeholder="Titre" onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className="CreatePoll_Input">
          <textarea placeholder="Description" onChange={(e)=>setDescription(e.target.value)}>
          {description}
          </textarea>
        </div>
        <div className="CreatePoll_Input">
          <input value={location} type="text" placeholder="Localisation" onChange={(e)=>setLocation(e.target.value)}/>
>>>>>>> master
        </div>
      </div>
    </Card>
  )
}

<<<<<<< HEAD
moment.locale('fr');
const localizer = BigCalendar.momentLocalizer(moment)

const sameDay = (d1, d2) => {
  return d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();
}

const messages = {
  allDay: 'journée',
  previous: 'précédent',
  next: 'suivant',
  today: 'aujourd\'hui',
  month: 'mois',
  week: 'semaine',
  day: 'jour',
  agenda: 'Agenda',
  date: 'date',
  time: 'heure',
  event: 'événement', // Or anything you want
  showMore: total => `+ ${total} événement(s) supplémentaire(s)`
}

const Choices = ({next, previous, choices, setChoices}) => {

  const handleCreate = ({start, end}) => {
    if(!sameDay(start, end)) return
    setChoices([...choices, {start, end}])
  }

  const handleSelect = (event) => {
    const newChoices = [...choices]
    newChoices.splice(choices.indexOf(event), 1)
    setChoices(newChoices)
  }

  const footer = (
    <div className="CreatePoll_Buttons">
      { previous && 
        <button className="Btn-primary" onClick={previous}>Précedent</button>
      }
      <button className="Btn-primary" onClick={null}>Créer</button>
    </div>
  )

  return (
    <Card title="Choix" footer={footer}>
      <BigCalendar 
        selectable
        events={choices}
        min={new Date(1970, 1, 1, 6)}
        views={['day', 'week', 'month']}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        defaultView="week"
        messages={messages}
        onSelectSlot={handleCreate}
        onSelectEvent={handleSelect}
      />
    </Card>
  )
}

const CreatePoll = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")
  const [choices, setChoices] = useState([])

  return (
    <Wizard>
    <Steps>
      <Step
        id="informations"
        render={({ next }) => (
          <Informations next={next} title={title} location={location} description={description} setDescription={setDescription} setLocation={setLocation} setTitle={setTitle}/>
=======
const CreatePoll = () => {


  return (

    <Wizard>
    <Steps>
      <Step
        id="merlin"
        render={({ next }) => (
          <Informations next={next}/>
>>>>>>> master
        )}
      />
      <Step
        id="gandalf"
<<<<<<< HEAD
        render={(nav) => (
          <Choices {...nav} choices={choices} setChoices={setChoices} />
=======
        render={({ next, previous }) => (
          <div>
            <h1>Gandalf</h1>
            <button onClick={next}>Next</button>
            <button onClick={previous}>Previous</button>
          </div>
>>>>>>> master
        )}
      />
      </Steps>
    </Wizard>
    
  )
}

export default CreatePoll