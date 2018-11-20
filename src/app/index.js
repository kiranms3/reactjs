import React from 'react';
import ReactDOM from 'react-dom';
///Import all required components
import NotStartedTask  from "./components/NotStartedTask";
import InprogressTask  from "./components/InProgressTask";
import CompletedTask  from "./components/CompletedTask";

export default class  TaskList extends React.Component {
  constructor(props)
  {
    super(props)
  }
    render() {
          
      ///prepare list of tasks with different statuses
               let tasksListItems=
               [{
                  id:"1",
                  title:"Work on Fund Manager - Website build",
                  description : "Work on Fund Manager website build for new client which is getting onboarded.",
                  Status: "InProgress"
                },
                {
                  id:"2",
                  title:"Attend Scrum related to Fund Manager",
                  description : "Make sure to attend scrum today without miss as there is important discussing pending with scrum master.",
                  Status: "NotStarted"
                },
                {
                  id:"3",
                  title:"Work on Security Items- Fund Manager",
                  description : "As there are many security related items, please work on them.",
                  Status: "Completed"
                },
                {
                  id:"4",
                  title:"Update Mindtree Timesheet",
                  description : "Please fill the time sheet - Mindtree till date",
                  Status: "InProgress"
                },
                {
                  id:"5",
                  title:"Fill Jira time sheet for the week",
                  description : "Please fill Jira time sheet till date",
                  Status: "NotStarted"
                },
                {
                  id:"6",
                  title:"Provide HLE for Adviser Portal Items",
                  description : "Provide HLE for the work items related to Adviser portal by Eod",
                  Status: "Completed"
                },
                {
                  id:"7",
                  title:"Provide DLE for Fund Manager Work items",
                  description : "Provide DLE for the work items related to Fund Manager portal by Eod",
                  Status: "InProgress"
                },
                {
                  id:"8",
                  title:"Update Patches in local computer",
                  description : "As there are patches waiting for restart of local computer, find a suitable time for the same.",
                  Status: "NotStarted"
                },
                {
                  id:"9",
                  title:"Speak to Manager about upcoming assignments",
                  description : "As the current work is getting over, speak to PM about next assignments",
                  Status: "Completed"
                },
                {
                  id:"10",
                  title:"Leave early from office",
                  description : "As it is important to spend time for your own, leave early from office.",
                  Status: "Not Started"
                }];
               
                let inProgressItemsList= tasksListItems.filter(x=>x.Status==="InProgress");
                let completedItemsList= tasksListItems.filter(x=>x.Status==="Completed");
                let notStartedItemsList= tasksListItems.filter(x=>x.Status==="NotStarted");
               return(
                 <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                  <h1>Here is your To Do List</h1>
                  </div>
                </div> 
                           
                <div className="row">
                    <div className="col-sm-4">
                      <div className="panel panel-default">
                         <div className="panel-heading"><b>Tasks - Not Started</b></div>
                            <div className="panel-body">
                              <NotStartedTask tasks={notStartedItemsList} />
                           </div>
                         </div>
                      </div>
                    <div className="col-sm-4">
                   
                    <div className="panel panel-default">
                         <div className="panel-heading"><b>Tasks - In Progress</b></div>
                            <div className="panel-body">
                            <InprogressTask tasks={inProgressItemsList} />
                           </div>
                         </div>
                    </div>
                    <div className="col-sm-4">
                  
                    <div className="panel panel-default">
                         <div className="panel-heading"><b>Tasks - Completed</b></div>
                            <div className="panel-body">
                            <CompletedTask tasks={completedItemsList} />
                           </div>
                         </div>
                    </div> 
                  </div>
                  </div>
                )
        }
};
 
ReactDOM.render(<TaskList />, document.getElementById('root'));