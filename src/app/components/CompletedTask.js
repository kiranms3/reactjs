import React from 'react';

export default class CompletedTask extends React.Component {
    constructor(props)
    {
      super(props)
    }

    render ()
    {
        var completedTaskItems= this.props.tasks;
        var completedItemsPanelContent = completedTaskItems.map((task,i)=>{

            return (
                <div className="panel panel-default">
                <div className="panel-heading">{task.title}</div>
                <div className="panel-body">{task.description}</div>
              </div>
            );
        });

        return(
            <div className="panel-body">
            {completedItemsPanelContent}
              </div>
        )
    }
}
