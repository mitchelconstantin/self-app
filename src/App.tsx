import React from 'react';
import { Box } from '@material-ui/core';
import { Header } from './Components/Header';
import { Form } from './Components/Form';

export const App = () => {
  return (
    <Box display='flex'>
      <Header />
      <Form />
    </Box>
  );
};
