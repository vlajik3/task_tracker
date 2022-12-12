import NotFound from '../pages/404/NotFound';
import SignIn from '../pages/SignIn/SignIn';
import Projects from '../pages/Projects/Projects';
import Tasks from '../pages/Tasks/Tasks';
export const appRoutes = [
    { path: '/', component: <Projects /> },
    { path: '/projects', component: <Projects /> },
    { path: '/signin', component: <SignIn /> },
    { path: '/tasks', component: <Tasks /> },
    { path: '*', component: <NotFound /> },
];
