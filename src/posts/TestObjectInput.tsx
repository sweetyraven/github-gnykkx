import { Stack, TextField } from '@mui/material';
import SelectInput from '@mui/material/Select/SelectInput';
import React, { useState, useEffect } from 'react';
import { InputProps, useInput } from 'react-admin';

const TestObjectInput = (props: InputProps) => {
  const { field } = useInput(props);
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    field.onChange({ [key]: value });
  }, [key, value]);

  return (
    <Stack spacing={2}>
      <TextField label="result" value={JSON.stringify(field.value)} disabled />
      <TextField
        value={key}
        label="key"
        onChange={(e) => setKey(e.target.value)}
      />
      <TextField
        value={value}
        label="value"
        onChange={(e) => setValue(e.target.value)}
      />
    </Stack>
  );
};

export default TestObjectInput;
