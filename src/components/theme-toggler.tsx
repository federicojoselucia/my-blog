import React from "react";
import { Theme, useTheme } from "@hooks/use-theme";
import { SunIcon, MoonIcon } from '@heroicons/react/outline'

export const ThemeToggler = () => {
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