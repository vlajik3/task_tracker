import React from 'react';

import styles from './Tasks.module.scss';

interface TasksProps {
    prop?: string;
}

const Tasks = (props: TasksProps) => {
    const { prop } = props;

    return <div>TASKS</div>;
};

export default Tasks;
