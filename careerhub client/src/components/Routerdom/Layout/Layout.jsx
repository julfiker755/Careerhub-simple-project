import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Footder from '../../Shared/Footder/Footder';

const Layout = () => {
    return (
        <div>
           <Header></Header>
           <Outlet></Outlet>
           <Footder></Footder>
        </div>
    );
};

export default Layout;