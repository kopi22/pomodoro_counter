import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

class ActivityExpansionPanel extends ExpansionPanel {

    render() {
        const { activity, classes, expanded } = this.props;

        return (
            <ExpansionPanel style={{borderRadius: "0px"}}>
                <ExpansionPanelSummary
                    aria-controls="panel-content"
                    id="panel-header"
                    style={{padding: "0px"}}
                >
                    <TableCell className={classes.cell} component="th" scope="row" style={{borderBottom: "none"}}>
                        {activity.name}
                    </TableCell>
                    <TableCell className={classes.cell} style={{borderBottom: "none", width: "100%"}}>
                        { 
                            activity.description.length > 50 
                            ? activity.description.slice(0, 45) + "..."
                            : activity.description 
                        }
                    </TableCell>
                    <TableCell className={classes.cell} align="center" style={expanded && {borderBottom: "none"}}>1:00</TableCell>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

export default ActivityExpansionPanel;