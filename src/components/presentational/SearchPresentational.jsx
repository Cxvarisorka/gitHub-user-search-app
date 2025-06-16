// Importing icons
import iconMoon from '../../assets/icon-moon.svg';
import iconSun from '../../assets/icon-sun.svg';
import iconSearch from '../../assets/icon-search.svg';
import iconLocation from '../../assets/icon-location.svg';
import iconWebsite from '../../assets/icon-website.svg';
import iconTwitter from '../../assets/icon-twitter.svg';
import iconCompany from '../../assets/icon-company.svg';

const SearchPresentational = ({ toggleTheme, darkMode, handleSubmit, user }) => {

  return (
    <main>
        <section id="top">
            <h1>devfinder</h1>
            <button
            onClick={toggleTheme}
            style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: darkMode ? 'white' : '#4B6A9B',
                fontWeight: 'bold'
            }}
            >
            {darkMode ? 'Light' : 'Dark'}
            <img src={darkMode ? iconSun : iconMoon} alt="Theme Icon" />
            </button>
        </section>

        <section id="search">
            <form onSubmit={handleSubmit}>
            <div>
                <img src={iconSearch} alt="Search Icon" />
                <input type="text" placeholder="Search GitHub username…" name="username" required />
            </div>
            <button>Search</button>
            </form>
        </section>

        {
            user?.status === '404' ? (
            <section id="error" className="error-card">
                <h2>No results found!</h2>
                <p>We couldn’t find any GitHub users matching your search. Please double-check the username and try again.</p>
            </section>
            ) : (
            <section id="info">
                {user ? (
                <div className="user-card">
                    <img className="avatar" src={user.avatar_url} alt={user.login} />

                    <div className="user-content">
                    <div className="user-header">
                        <div className="name-wrSearchPresentationaler">
                        <h2>{user.name || user.login}</h2>
                        <p className="username">@{user.login}</p>
                        </div>
                        <p className="joined">
                        Joined{" "}
                        {new Date(user.created_at).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                        })}
                        </p>
                    </div>

                    <p className="bio">{user.bio || "This profile has no bio"}</p>

                    <div className="user-stats">
                        <div>
                        <p>Repos</p>
                        <strong>{user.public_repos}</strong>
                        </div>
                        <div>
                        <p>Followers</p>
                        <strong>{user.followers}</strong>
                        </div>
                        <div>
                        <p>Following</p>
                        <strong>{user.following}</strong>
                        </div>
                    </div>

                    <div className="user-links">
                        <p>
                        <img src={iconLocation} alt="Location" />
                        {user.location || "Not Available"}
                        </p>
                        <p>
                        <img src={iconWebsite} alt="Website" />
                        {user.blog ? (
                            <a href={user.blog} target="_blank" rel="noreferrer">
                            {user.blog}
                            </a>
                        ) : (
                            "Not Available"
                        )}
                        </p>
                        <p>
                        <img src={iconTwitter} alt="Twitter" />
                        {user.twitter_username || "Not Available"}
                        </p>
                        <p>
                        <img src={iconCompany} alt="Company" />
                        {user.company || "Not Available"}
                        </p>
                    </div>
                    </div>
                </div>
                ) : (
                <p style={{ marginTop: "2rem", textAlign: "center" }}>Please search a user</p>
                )}
            </section>
            )
        }
    </main>
  );
}

export default SearchPresentational;
