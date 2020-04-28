import { connect } from 'react-redux';

import { getCurrentActivity } from '../utils/processingActivities';
import Header from './Header';


const mapStateToProps = (state) => {
    return {activity: getCurrentActivity(state.activities.activities, state.activities.active)};
}

const HeaderContainer = connect(mapStateToProps, null)(Header);

export default HeaderContainer;
