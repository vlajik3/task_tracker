import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import React from 'react';

interface CopyrightProps {
    sx: {
        mt: number;
        mb: number;
    };
}
export const Copyright = ({ sx }: CopyrightProps) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...sx}>
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/vlajik3">
                vlajik3
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};
