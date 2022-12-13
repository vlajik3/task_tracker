import AccountBoxIcon from '@mui/icons-material/AccountBox';
import TaskIcon from '@mui/icons-material/Task';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { INavBarItems } from '../interfaces/interfaces';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';

export const mainNavbarItems: INavBarItems[] = [
    {
        id: 0,
        icon: <AccountBoxIcon />,
        label: 'Authentication',
        route: '/signin',
    },
    {
        id: 1,
        icon: <AssignmentIcon />,
        label: 'Projects',
        route: '/projects',
    },
    {
        id: 2,
        icon: <TaskIcon />,
        label: 'Completed tasks',
        route: '/completed',
    },
    {
        id: 4,
        icon: <InfoIcon />,
        label: 'Authentication',
        route: '/about',
    },
    {
        id: 5,
        icon: <LogoutIcon />,
        label: 'Logout',
        route: '/logout',
    },
];
