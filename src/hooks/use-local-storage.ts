import React from "react";

interface UseLocalStorageOutput {
	value: string,
	setValue: (value: string) => void
}

const useLocalStorage = (key: string, initialValue: string): UseLocalStorageOutput => {

	const [value, setValue] = React.useState(initialValue);

	React.useEffect(() => {
		const persistedValue = getFromLocalStorage(key);

		if(persistedValue !== null && persistedValue !== initialValue)
			setValue(persistedValue);
	}, []);

	return {
		value, 
		setValue: (value: string) => {
			setValue(value);
			setToLocalStorage(key, value);
		}
	};
}

const getFromLocalStorage = (key: string) => {
	try {
		return localStorage.getItem(key);
	}
	catch {
		console.warn(`Error reading from local storage; key “${key}”:`);
		return null;
	}
};

const setToLocalStorage = (key: string, value: string) => {
	try {
		localStorage.setItem(key, value);
	}
	catch {
		console.warn(`Error writing to local storage; key “${key}”:`)
	}
};

export default useLocalStorage;