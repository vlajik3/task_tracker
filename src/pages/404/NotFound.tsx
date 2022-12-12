import React from 'react';

import styles from './NotFound.module.scss';
interface NotFoundProps {
    prop: string;
}
const NotFound = (props: NotFoundProps) => {
    const { prop } = props;
    return <div>404{prop}</div>;
};
export default NotFound;
