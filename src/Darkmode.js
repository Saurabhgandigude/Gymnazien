import React from 'react'
const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    useEffect(() => {
      // Apply dark mode styles when isDarkMode changes
      const body = document.body;
      if (isDarkMode) {
        body.classList.add('dark-theme');
      } else {
        body.classList.remove('dark-theme');
      }
    }, [isDarkMode]);
  
    const toggleDarkMode = () => {
      setIsDarkMode((prevMode) => !prevMode);
    };
export default function Darkmode() {
  return (
    <div>
    <header>
      <h1>{isDarkMode ? 'Dark Theme' : 'Light Theme'}</h1>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </header>
    {/* Your app content goes here */}
    <div>Gymnazien</div>
  </div>
  )
}
