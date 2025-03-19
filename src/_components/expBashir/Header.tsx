import { useContext } from 'react';
import { ThemeContext } from '../expBashir/ThemeContext';

const Header = () => {
    const useTheme = useContext(ThemeContext)
    console.log(useTheme);

    return (
        <header style={{ backgroundColor: useTheme.theme === 'light' ? 'white' : 'black', color: useTheme.theme === 'light' ? 'black' : 'white' }}>
            {/* Your header content */}
            <button onClick={useTheme.toggleTheme}>Toggle Theme</button>
        </header>
    );
};

export default Header