import { useEffect, useState } from "react";

import SearchPresentational from "../presentational/SearchPresentational";

const SearchContainer = () => {
    const [user, setUser] = useState();
    const [darkMode, setDarkMode] = useState(true);

    const toggleTheme = () => {
        setDarkMode(prev => !prev);
    };

    useEffect(() => {
        document.body.className = darkMode ? 'dark' : '';
    }, [darkMode]);

    

    const handleSearch = async (username) => {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();

            setUser(data);
            console.log(data);

        } catch (err) {
            console.log(err);
        }
    }
    
    useEffect(() => {
        handleSearch('octocat');
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        handleSearch(username);
        e.target.reset();
    }

  return (
    <SearchPresentational toggleTheme={toggleTheme} darkMode={darkMode} handleSubmit={handleSubmit} user={user}  />
  );
}

export default SearchContainer;
