import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

const SelectLanguage = ({
	data,
	selectedLan,
	setSelectedLan,
	defaultSelectedLan,
}) => {
	const [inputValue, setInputValue] = useState('');

	useEffect(() => {
		const defaultLan = data?.filter((i) => {
			return i.label.toLowerCase() === defaultSelectedLan;
		});
		setSelectedLan(defaultLan[0]);
	}, []);

	return (
		<Autocomplete
			value={selectedLan}
			onChange={(_, newValue) => {
				setSelectedLan(newValue);
			}}
			inputValue={inputValue}
			onInputChange={(_, newInputValue) => {
				setInputValue(newInputValue);
			}}
			options={data}
			sx={{ width: 300 }}
			renderInput={(params) => {
				return <TextField {...params} label={'Languages'} />;
			}}
			id='controllable-states-demo'
			className='autoComplete'
		/>
	);
};

export default SelectLanguage;
