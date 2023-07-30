import { Box, CircularProgress } from '@mui/material';

export default function Loading() {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'fixed',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
      }}
    >
      <CircularProgress color="success" />
    </Box>
  );
}
