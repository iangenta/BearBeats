import React from 'react';
import SideBar from "../components/navigation/SideBar"
import SidebarItem from "../components/navigation/SideBarItem"
import Layout from '../../hocs/layouts/layout';
import '../../assets/styles/index.css'
function Home(){
    return (
        <Layout>
            <SideBar></SideBar>
            <SidebarItem></SidebarItem>
        </Layout>

    )
}
export default Home