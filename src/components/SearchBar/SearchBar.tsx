'use client';

import { Box, Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { type ChangeEvent, useState } from 'react';
import { escapeHtml } from '@/src/utils/escape-html';
import { debounce } from 'radash';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { push } = useRouter();

  const handleChange = debounce(
    { delay: 300 },
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = escapeHtml(e.target.value);
      setQuery(value);
    }
  );

  const handleClick = () => {
    push(`/s?q=${query}`);
  };

  return (
    <Box className="x1sm:w-full relative">
      <Button className="absolute right-0 top-3 z-50" onClick={handleClick}>
        <SearchIcon style={{ color: '#fff' }} />
      </Button>
      <TextField
        id="seach"
        label="Search"
        variant="filled"
        onChange={handleChange}
        className="x1sm:w-full"
        sx={{
          '& .Mui-focused.MuiFormLabel-root': {
            color: 'primary.light',
          },
          '& .MuiFormLabel-root': {
            color: 'primary.light',
          },
          '& .MuiInputBase-root': {
            borderColor: 'primary.100',
            borderWidth: '1px',
            borderStyle: 'solid',
          },
        }}
      />
    </Box>
  );
};

export default SearchBar;
