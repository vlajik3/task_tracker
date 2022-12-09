import React from 'react';

import styles from './ProjectsPage.module.scss';

interface ProjectsPageProps {
    prop?: string;
}

const ProjectsPage = (props: ProjectsPageProps) => {
    const { prop } = props;

    return <div>ProjectsPage</div>;
};

export default ProjectsPage;
