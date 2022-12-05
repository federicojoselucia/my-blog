import React from "react";
import useLocalStorage from "./use-local-storage";

const THEME_KEY = "theme";

export const enum Theme {
	light = "light",
	dark = "dark"
};

interface UseThemeOutput {
	theme: string,
	toggleTheme: () => void
};

const useTheme = () : UseThemeOutput => {

	const { value: theme, setValue: setTheme } = useLocalStorage(THEME_KEY, Theme.light);

	React.useEffect(() => {
		const root = document.documentElement;
		root.classList.remove(getOppositeTheme(theme));
		root.classList.add(theme);
	}, [theme]);

	return { 
		theme,
		toggleTheme: () => setTheme(getOppositeTheme(theme))
	};
};

const getOppositeTheme = (theme: string): Theme => 
	theme === Theme.light ? Theme.dark : Theme.light;

export default useTheme;