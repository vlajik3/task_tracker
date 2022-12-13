import React from 'react';
import { useParams } from 'react-router-dom';

interface ProjectProps {
    prop: string;
}
const Project = (props: ProjectProps) => {
    const params = useParams();
    console.log(params);
    return (
        <>
            <div style={{ textAlign: 'center' }}>Project</div>
        </>
    );
};
export default Project;
