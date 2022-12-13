import Link from '@mui/material/Link';
import React from 'react';
import { useParams } from 'react-router-dom';

interface ProjectsProps {
    prop?: string;
}

const Projects = (props: ProjectsProps) => {
    return (
        <>
            <div style={{ textAlign: 'center' }}>Projects</div>
        </>
    );
};

export default Projects;
