import { connect } from 'react-redux';

import Timer from './Timer';


const mapStateToProps = (state) => {
    let min = (Math.floor(state.timer.timeRemaining / 60)).toString();
    min = min.length === 1 ? "0" + min : min;
    let sec = (state.timer.timeRemaining % 60).toString();
    sec = sec.length === 1 ? "0" + sec : sec;

    return { min, sec };
}

const TimerContainer = connect(mapStateToProps, null)(Timer);

export default TimerContainer;
