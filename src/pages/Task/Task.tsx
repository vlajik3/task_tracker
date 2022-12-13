import React from 'react';
import { useParams } from 'react-router-dom';

interface TaskProps {
    prop: string;
}
const Task = (props: TaskProps) => {
    const { prop } = props;
    const params = useParams();
    console.log(params);
    return <div style={{ textAlign: 'center' }}>Task</div>;
};
export default Task;
