import React from 'react';

export default class InProgressTask extends React.Component {
    constructor(props)
    {
      super(props)
    }

    render ()
    {
          ///get all in progress items and create panels for each
        var inProgressTaskItems= this.props.tasks;
        var inProgressItemsPanelContent = inProgressTaskItems.map((task,i)=>{

            return (
                <div className="panel panel-default">
                <div className="panel-heading">{task.title}</div>
                <div className="panel-body">{task.description}</div>
              </div>
            );
        });

        return(           
                <div className="panel-body">
              {inProgressItemsPanelContent}
                </div>
            
        )
    }
}
