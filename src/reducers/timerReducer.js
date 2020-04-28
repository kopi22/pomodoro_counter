const TIMER_ACTIONS = {
    SET: 'SET',
    SET_TIMES: 'SET_TIMES',
    UPDATE: 'UPDATE',
    STOP: 'STOP',
    START: 'START',
    CHANGE_PHASE: 'CHANGE_PHASE',
    INC_CYCLE: 'INC_CYCLE',
    RESET: 'RESET'
};

const TIMER_PHASES = {
    WORK: 'WORK',
    BREAK: 'BREAK'
}

// in miliseconds

// TESTING
const workTime = 1/6 * 60 * 1000; 
const breakTime = 1/12 * 60 * 1000;


// PRODUCTION
// const workTime = 25 * 60 * 1000; 
// const breakTime = 5 * 60 * 1000;

const longBreakTimePerCycle = workTime / 4;

const initialPhaseTime = workTime;

const initialState = {
    timeTillEndOfPhase: initialPhaseTime,
    timeRemaining: initialPhaseTime / 1000,
    running: false,
    workTime,
    breakTime,
    longBreakTimePerCycle,
    currentCycle: 1,
    phase: TIMER_PHASES.WORK
};

const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case TIMER_ACTIONS.UPDATE:
            return Object.assign({}, state, {timeRemaining: action.time});
        
        case TIMER_ACTIONS.SET:
            return Object.assign({}, state, {timeTillEndOfPhase: action.remainingTime});
        
        case TIMER_ACTIONS.STOP:
            return Object.assign({}, state, {running: false});
        
        case TIMER_ACTIONS.SET_TIMES:
            return Object.assign({}, state, {
                workTime: action.workTime,
                breakTime: action.breakTime,
                longBreakTimePerCycle: action.workTime / 4
            })

            // THINK ABOUT IT
        case TIMER_ACTIONS.START:
            return Object.assign({}, state, {running: true});

        case TIMER_ACTIONS.INC_CYCLE:
            if (state.phase === TIMER_PHASES.BREAK) {
                return timerReducer(
                    Object.assign({}, state, {currentCycle: state.currentCycle + 1}), 
                    {type: TIMER_ACTIONS.CHANGE_PHASE}
                );
            } else {
                return state;
            }
            
        case TIMER_ACTIONS.CHANGE_PHASE:
            if (state.phase === TIMER_PHASES.WORK) {
                const time = action.time === undefined ? state.breakTime : action.time;

                return Object.assign({}, state, {
                    phase: TIMER_PHASES.BREAK,
                    running: false,
                    timeTillEndOfPhase: time,
                    timeRemaining: time / 1000,
                });
            } else if (state.phase === TIMER_PHASES.BREAK) {
                return Object.assign({}, state, {
                    phase: TIMER_PHASES.WORK,
                    running: false,
                    timeTillEndOfPhase: state.workTime,
                    timeRemaining: state.workTime / 1000
                });
            } else {
                return state;
            }

        case TIMER_ACTIONS.RESET:
            return Object.assign({}, state, {
                phase: TIMER_PHASES.WORK,
                running: false,
                timeTillEndOfPhase: state.workTime,
                timeRemaining: state.workTime / 1000,
                currentCycle: 1
            });

        default:
            return state;
    }
}

export default timerReducer;
export { TIMER_ACTIONS, TIMER_PHASES }