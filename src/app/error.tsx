'use client';

import { Box, Link, Typography } from '@mui/material';

export default function Error() {
  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        minWidth: '100%',
        minHeight: '100vh',
      }}
    >
      <Typography component={'h1'} variant="h1">
        OOPS!
      </Typography>
      <Typography component={'p'} sx={{ fontSize: '20px', marginTop: '10px' }}>
        The page you are looking for might not accessible.
      </Typography>
      <Link href="/" className="text-2xl no-underline">
        Back to home
      </Link>
    </Box>
  );
}
