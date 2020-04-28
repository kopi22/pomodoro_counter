import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

import { TIMER_PHASES } from '../reducers/timerReducer';

class Activity extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            expanded: props.current !== undefined
        };

        this.handleExpansion = this.handleExpansion.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if(props.current === true && props.currentCycle === 1 && props.timeRemaining === props.workTime / 1000 && props.phase === TIMER_PHASES.WORK) {
            return {expanded: true};
        }
        return null;
    }
    
    handleExpansion = () => {
        this.setState({
            expanded: !this.state.expanded
        });
    }


    render() {
        const { activity, classes } = this.props;
        
        if (activity == null) {
            return null;
        }
        
        const withBorder = {
            borderBottom: "none"
        };

        return (
            <TableRow >
                <TableCell colSpan={4} style={{padding: "0px"}}>
                    <ExpansionPanel className={classes.row} style={{borderRadius: "0px"}} expanded={this.state.expanded} onChange={this.handleExpansion}>
                        <ExpansionPanelSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{padding: "0px"}}
                        >
                            <TableCell className={classes.cell} component="th" scope="row" style={this.state.expanded ? {} : {borderBottom: "none"}}>
                                {activity.name}
                            </TableCell>
                            <TableCell className={classes.cell} style={this.state.expanded ? {width: "100%"} : {borderBottom: "none", width: "100%"}}>
                                { !this.state.expanded &&
                                    (activity.description.length > 50 
                                    ? activity.description.slice(0, 45) + "..."
                                    : activity.description)
                                }
                            </TableCell>
                            <TableCell className={classes.cell} align="center" style={this.state.expanded ? {} : {borderBottom: "none"}}>1:00</TableCell>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                {activity.description}
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </TableCell>
            </TableRow>
        );
    }
}

export default Activity;