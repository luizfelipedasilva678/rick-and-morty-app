'use client';

import { NUMBER_OF_PAGES } from '@/src/constants';
import { Pagination } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';

const PaginationBox = () => {
  const { push } = useRouter();
  const { get } = useSearchParams();
  const page = get('page') ?? '';

  return (
    <Pagination
      count={NUMBER_OF_PAGES}
      defaultPage={page !== '' ? Number(page) : 1}
      variant="outlined"
      color="primary"
      onChange={(_, page) => {
        push(`/?page=${page}`);
      }}
      sx={{
        marginTop: '16px',
        '& .MuiPaginationItem-ellipsis': {
          color: 'primary.main',
        },
        '& .MuiPaginationItem-previousNext': {
          backgroundColor: 'primary.main',
          '&:hover': {
            backgroundColor: 'primary.main',
          },
        },
        '& .MuiPaginationItem-page': {
          backgroundColor: 'primary.main',
          color: 'primary.light',
          '&:hover': {
            backgroundColor: 'primary.main',
          },
        },
        '& .Mui-selected.MuiPaginationItem-page': {
          backgroundColor: 'primary.100',
          borderColor: 'primary.100',
        },
      }}
    />
  );
};

export default PaginationBox;
