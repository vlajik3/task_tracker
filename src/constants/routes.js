import NotFound from '../pages/404/NotFound';
import SignIn from '../pages/SignIn/SignIn';
import Projects from '../pages/Projects/Projects';
import Tasks from '../pages/Tasks/Tasks';
import SignUp from '../pages/SignUp/SignUp';
import Project from '../pages/Project/Project';
import Task from '../pages/Task/Task';

export const appRoutes = [
    { path: '/', component: <Projects /> },
    { path: 'projects', component: <Projects /> },
    { path: 'projects/:projectName', component: <Project /> },
    { path: 'projects/:projectName/:taskId', component: <Task /> },
    { path: 'tasks', component: <Tasks /> },
    { path: 'signin', component: <SignIn /> },
    { path: 'signup', component: <SignUp /> },
    { path: '*', component: <NotFound /> },
];
