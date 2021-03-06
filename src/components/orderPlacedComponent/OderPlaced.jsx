import React, { Component } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import "./orderPlaced.scss"
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import orderImage from '../../images/Screenshot.jpg';

class OrderPlaced extends Component {

    render() {
        return (
            <div>
                <div className="mainDiv">
                    <div className="orderImage">
                        <img src={orderImage} />
                    </div>
                    <div className="orderMessage">
                        <p className="messageParagraph"> hurray!!!your order is confirmed</p>
                        <p className="messageParagraph">the order id is #{this.props.data} save the order id</p>
                        <p className="messageParagraph">for further communication..</p>
                    </div>

                    <div className="userDataTable">
                        <TableContainer component={Paper}>
                            <Table aria-label="caption table">
                                <TableHead >
                                    <TableRow style={{ fontWeight: 'bold', backgroundColor: '#fafafa' }}>
                                        <TableCell align="center">Email us</TableCell>
                                        <TableCell align="center">Contact us</TableCell>
                                        <TableCell align="center">Address</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="center">admin@bookStore.com </TableCell>
                                        <TableCell align="center">9876543210</TableCell>
                                        <TableCell align="center">bridgelabz mumbai.</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>

                    <div className="continueShoopingButton">
                        <Button variant="contained" color="primary" onClick={this.props.function} onClick={() => window.location.reload(false)}>
                            CONTINUE SHOPPING
                                </Button>
                    </div>
                </div>
            </div >
        )
    }
}

export default OrderPlaced;