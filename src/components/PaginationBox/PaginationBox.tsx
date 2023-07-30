'use client';

import { Pagination } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { type ChangeEvent } from 'react';

interface Props {
  numberOfPages: number;
}

const PaginationBox = ({ numberOfPages }: Props) => {
  const { push } = useRouter();
  const { get, forEach } = useSearchParams();
  const pathname = usePathname();
  const page = Number(get('page'));
  const activePage = page !== 0 && !isNaN(page) ? page : 1;

  const handleChangePage = (_: ChangeEvent<unknown>, page: number) => {
    const queryStringRecord: Record<string, string> = {};

    forEach((value, key) => {
      if (key === 'page') {
        queryStringRecord[key] = String(page);
      } else {
        queryStringRecord[key] = value;
      }
    });

    if (!('page' in queryStringRecord)) queryStringRecord.page = String(page);

    const newQueryString = new URLSearchParams(queryStringRecord).toString();

    push(`${pathname}?${newQueryString}`);
  };

  return (
    <Pagination
      count={numberOfPages}
      page={activePage}
      variant="outlined"
      color="primary"
      onChange={handleChangePage}
      size="small"
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
