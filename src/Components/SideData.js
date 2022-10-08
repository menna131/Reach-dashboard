import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'ATM Settings',
        path: '/atmSettings',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownFill />,
        iconOpened: <RiIcons.RiArrowUpFill />,
        subNav: [
            {
                title: 'one',
                path: '/atmSettings/one',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'two',
                path: '/atmSettings/two',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Business Settings',
        path: '/businessSettings',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownFill />,
        iconOpened: <RiIcons.RiArrowUpFill />,
        subNav: [
            {
                title: 'one',
                path: '/businessSettings/one',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'two',
                path: '/businessSettings/two',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'User Management',
        path: '/userManagement',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownFill />,
        iconOpened: <RiIcons.RiArrowUpFill />,
        subNav: [
            {
                title: 'Users',
                path: '/userManagement/users',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Profile',
                path: '/userManagement/profiles',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Groups',
                path: '/userManagement/groups',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'License Management',
        path: '/licenseManagement',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownFill />,
        iconOpened: <RiIcons.RiArrowUpFill />,
    },
]
