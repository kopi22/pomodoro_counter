import { arrayDeepCopy } from '../utils/arrayTools';

const ACTIVITIES_ACTIONS = {
    NEXT: 'NEXT',
    ADD: 'ADD'
};

const initialState = {
    activities: [
        // {name: "TIT1", description: "e2eelo1KADSSSSSSSSSSSNJSAKelo1KADNJSAKe2eelo1KADSSSSSSSSSSSNJSAKelo1KADNJSAK", cycles: 1},
        // {name: "TIT2", description: "elo2", cycles: 2},
        // {name: "TIT3", description: "elo2", cycles: 3},
        // {name: "TIT4", description: "elo2", cycles: 4}
    ],
    active: 0
};

const activitiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIVITIES_ACTIONS.NEXT:
            if (state.active < state.activities.length) {
                return {
                    activities: arrayDeepCopy(state.activities),
                    active: state.active + 1
                };
            }
            return state;

        case ACTIVITIES_ACTIONS.ADD:
            const newActivities = arrayDeepCopy(state.activities);
            newActivities.push(action.activity);
            return {
                activities: newActivities,
                active: state.active
            }

        default:
            return state;
    }
};

export default activitiesReducer;
export { ACTIVITIES_ACTIONS };