import React from 'react';
import ToolBar from './headerbar';
import Footer from "./Footer";
import GridView from './gridView.js';
import CustomPaginationActionsTable from './pagination';
import LowerBar from './LowerBar';

require('dotenv').config();

class home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
        }
    }

    render() {
        return (
            <div>
                <ToolBar />
                <div style={{ width: '74%', margin: 'auto' }}>
                    <LowerBar />
                    <GridView />
                </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3%', marginTop: '2%' }}>
                    <CustomPaginationActionsTable />
                </div>
                <Footer />
            </div>
        );
    }

}

export default home;