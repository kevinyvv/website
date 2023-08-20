import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";



const ModeSwitch = () => {
    const [isDarkMode, setDarkMode] = React.useState(true);

    const toggleDarkMode = (checked: boolean) => {
      setDarkMode(checked);
      if (isDarkMode) {
        document.body.classList.add('dark')
      }
      else{
        document.body.classList.remove('dark')
      }
    };
  
    return (
      <DarkModeSwitch
        style={{ marginLeft:'4px' }}
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={40}
        sunColor="#c288fc"
        moonColor="#fcdf88"
      />
    );
}

export default ModeSwitch