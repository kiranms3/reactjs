import React from 'react';

export  default class NotStartedTask extends React.Component {
    constructor(props)
    {
      super(props)
    }

    render ()
    {
          ///get all not started items and create panels for each
        var notStartedItems= this.props.tasks;
        var notStartedItemsPanelContent = notStartedItems.map((task,i)=>{

            return (
                <div className="panel panel-default">
                <div className="panel-heading">{task.title}</div>
                <div className="panel-body">{task.description}</div>
              </div>
            );
        });

        return(
            <div className="panel-body">
              {notStartedItemsPanelContent}
                </div>
        )
    }
}
