import React, { useState } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const SidebarLink = styled(Link)`
    display: flex;
    color: white;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 20px;
    text-decoration: none;
    font-size: 18px;

    &:hover{
        background: #22a665;
        color: white;
        cursor: pointer;
    }
`;

const SidebarLable = styled.span`

`;

const DropdownLink = styled(Link)`
    background: #1f2642;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #737a93;
    font-size: 18px;
    &:hover {
    background: #2b324c;
    cursor: pointer;
    color: #22a665;
    }
    `;

const SubMenu = ({item}) => {
 const [subnav, setSubnav] = useState(false);
 const showSubnav = () => setSubnav(!subnav);
  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
            {/* <span style={{'padding-right': '5px'}}>{item.icon}</span> */}
            <SidebarLable>{item.title}</SidebarLable>
        </div>
        <div>
            {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
        </div>
      </SidebarLink>
      {subnav && item.subNav.map((item, index) => {
        return (
            <DropdownLink to={item.path} key={index}>
                {item.icon}
                <SidebarLable>{item.title}</SidebarLable>
            </DropdownLink>
        )
      })}
    </>
  )
}

export default SubMenu
