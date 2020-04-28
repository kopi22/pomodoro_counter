import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

import { TIMER_PHASES } from '../reducers/timerReducer';
import Timer from './TimerContainer';
import ControlPanel from './ControlPanelContainer';
import Header from './HeaderContainer';

const styles = {
    dashboard: {
        padding: "20px 20px 10px 20px",
        textAlign: "center"
    }
};

class ClockDashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            intervalId: null,
            startTime: null,
            timePassed: null
        };

        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handleSkip = this.handleSkip.bind(this);
        this.updateTimer = this.updateTimer.bind(this);
    }

    updateTimer() {
        this.setState({
            timePassed: Date.now() - this.state.startTime
        });
        if (this.props.timer.timeTillEndOfPhase > this.state.timePassed) {

            const timeRemainingInSeconds = Math.floor((this.props.timer.timeTillEndOfPhase - this.state.timePassed) / 1000);
            this.props.updateCounter(timeRemainingInSeconds);
        } else {
            this.handleStop();
        }
    }

    moveToNextPhase() {
        if (this.props.timer.phase === TIMER_PHASES.BREAK) {
            if (this.props.timer.currentCycle === this.props.noCycles) {
                this.props.resetCounter();
                this.props.nextActivity();
            } else {
                this.props.incrementCycle();
            }
        } 
        else if (this.props.timer.phase === TIMER_PHASES.WORK) {
            if (this.props.timer.currentCycle === this.props.noCycles) {
                this.props.changePhase(this.props.timer.longBreakTimePerCycle * this.props.noCycles);
            } else {
                this.props.changePhase();
            }
        }
    }

    handleSkip() {
        this.props.stopCounter();
        if (this.props.timer.running) {
            clearInterval(this.state.intervalId);
        }
        this.moveToNextPhase();
        this.resetTimerState();
    }

    handleStart() {
        if (this.props.timer.timeRemaining > 0 && !this.props.timer.running) {
            this.props.startCounter();
            this.setState({
                startTime: Date.now(),
                intervalId: setInterval(this.updateTimer, 200) 
            });
        }
    }

    handleStop() {
        if (this.props.timer.running) {
            this.props.stopCounter();
            clearInterval(this.state.intervalId);
            if (this.props.timer.timeTillEndOfPhase > this.state.timePassed) {
                this.props.setRemainingTime(this.props.timer.timeTillEndOfPhase - this.state.timePassed);
            } else {
                this.moveToNextPhase();
            }
        }
    }

    resetTimerState() {
        this.setState({
            intervalId: null,
            startTime: null
        });
    }

    render() {
        const { classes, timer, description } = this.props;

        return (
            <Grid item xs={12}>
                <Header />
                <Paper className={classes.dashboard}>
                    <Timer />
                    <Typography variant="body1" className={classes.description}>
                        {description}
                    </Typography>
                    <ControlPanel 
                        start={this.handleStart}
                        stop={this.handleStop}
                        skip={this.handleSkip}
                        running={timer.running} />
                </Paper>
            </Grid>
        );
    }
}

export default withStyles(styles)(ClockDashboard);