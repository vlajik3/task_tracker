import React from 'react';

import styles from './Projects.module.scss';

interface ProjectsProps {
    prop?: string;
}

const Projects = (props: ProjectsProps) => {
    const { prop } = props;

    return <div>Projects</div>;
};

export default Projects;
