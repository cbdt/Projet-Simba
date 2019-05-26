import React, { useState } from 'react'
import { Wizard, Steps, Step } from 'react-albus';
import Card from '../Card';
import './Poll.css'

let data = {
  "id" : 35,
  "title" : "Cinema",
  "location" : "Gaumont Rennes",
  "description" : "Un petit cine voila quoi ...",
  "has_meal" : true,
  "choices" : ["Avengers","Detective Pikachu","Tchoupi Origins"],
  "users" : ["Kevin","Clement","Daouda","Salome"],
  "votes" :[
      {
          "choice":"Avengers",
          "vote":["Kevin","Clement"]
      },
      {
          "choice":"Detective Pikachu",
          "vote":["Salome","Daouda"]
      },
      {
          "choice":"Tchoupi Origins",
          "vote":["Clement"]
      }
  ]
}

const Informations = ({next, previous}) => {
  const footer = (
    <>
      { 
      <button className="Btn-primary" onClick={next}>Confirmer</button>
      }
    </>
  )
  return (
    <Card title="Titre sondage" subtitle="par XXXXXXX • il y a XX heures" footer={footer}>
      <div className="Poll_Form">
        { (data.location.length !==0) && <p className="Poll_Location">{data.location}</p>}
        { data.has_meal && 
          <div className="Poll_Has_Meal">
            <p>Cet évènement contient un repas</p>
            <button className="Btn-primary" title="Bientôt disponible" onClick={setMealPreference}>Indiquer ses préférences alimentaires</button>
          </div>
        }
        { (data.description.length !==0) && <p className="Poll_Description">{data.description}</p>}
        

        <div className="Poll_Vote_Wrapper">
          {pollTable()}
        </div>

      </div>
    </Card>
  )
}

const pollTable = () => {
  return (
    <div className="Poll_Vote_Content">
        {renderUsers()}
        {renderChoices()}
    </div>
    
  )
}

const renderUsers =() =>{
  return (
    <aside>
      <header className="Cell_Poll_Header">
        <div className="Cell_Participants_Header"></div>
        <div className="Cell_Participant_Count">
          <span>X participants</span>
        </div>
        <div className="Cell_New_Participant">
          <input type="text" id="newParticipantName" placeholder="Saisissez nom" required="required" maxLength="64"/>
        </div>
      </header>
      <ul className="Cell_Participants">
        {data.users.map((name)=>(
          <li className="Cell_Participant" key={name}>
            {name}
          </li>
        )
        )}
      </ul>
    </aside>
  )
}

const renderChoices = () =>{

  return (
    <ul className="Cell_Options">
      
      {ChoiceEx()}      
      {ChoiceEx()}
      {ChoiceEx()}      
      {ChoiceEx()}
      {ChoiceEx()}      
      {ChoiceEx()}
      {ChoiceEx()}      
      {ChoiceEx()}
      {ChoiceEx()}      
      {ChoiceEx()}
      {ChoiceEx()}      
      {ChoiceEx()}

    </ul>


  )

}

const ChoiceEx = () =>{
  return(<li className="Cell_Option">
  <label className="Cell_Poll_Header">
    <div className="Cell_Option_Name">
      Nom du choix
    </div>
    <div className="Cell_Option_Count">
      <span>X V</span>
    </div>
    <div className="Cell_Option_New_Participant_Vote">
      <input type="checkbox"></input>
    </div>
  </label>
  <ul className="Cell_Option_Votes">
    <li className="Cell_Option_Vote_Yes">Yes</li>
    <li className="Cell_Option_Vote_No">No</li>
    <li className="Cell_Option_Vote_No">No</li>
    <li className="Cell_Option_Vote_Yes">Yes</li>
  </ul>
</li>)
}


const setMealPreference = () =>{

}


const Poll = () => {


  return (

    <Wizard>
    <Steps>
      <Step
        id="poll"
        render={({ next }) => (
          <Informations next={next}/>
        )}
      />
      <Step
        id="voted"
        render={({ next, previous }) => (
          <div>
            <h1>Merci d'avoir voté</h1>
            <button onClick={next}>Next</button>
            <button onClick={previous}>Previous</button>
          </div>
        )}
      />
      </Steps>
    </Wizard>
    
  )
}

export default Poll