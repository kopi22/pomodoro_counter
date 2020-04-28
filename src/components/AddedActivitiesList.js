import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import AddActivityBar from './AddActivityBarContainer';
import FinishedActivitiesList from './FinishedActivitiesList';
import QueuedActivitiesList from './QueuedActivitiesList';
import CurrentActivity from './CurrentActivity';

import './AddedActivitiesList.css';

class AddedActivitiesList extends React.Component {
    render () {
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell >
                            <div>
                                <div style={{height: "10px", display: "box", float: "left", width: "49%"}}>
                                    <p style={{textAlign: "center", position: "relative", top: "50%"}}>Activity</p>
                                </div>
                                <AddActivityBar />
                            </div>
                        </TableCell>
                        <TableCell align="center" className="desc">Description</TableCell>
                        <TableCell align="right">Total Time (work/break)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody style={{marginBottom: "10px"}}>
                    <FinishedActivitiesList />
                    <CurrentActivity />
                    <QueuedActivitiesList />
                </TableBody>
            </Table>
        );
    }
}

export default AddedActivitiesList;