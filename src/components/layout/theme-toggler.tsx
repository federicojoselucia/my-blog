import React from "react";
import useTheme, { Theme } from "src/hooks/use-theme";
import { SunIcon, MoonIcon } from '@heroicons/react/outline'

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  const iconClassName = "h-5 w-5 text-text-primary";
  let icon = theme === Theme.light
  ? <SunIcon className={iconClassName}/>
  : <MoonIcon className={iconClassName}/>

  return (
    <button onClick={toggleTheme}>
      {icon}
    </button>
  );
}

export default ThemeToggler