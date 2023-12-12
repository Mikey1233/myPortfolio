import React, { useState, useEffect } from "react";
import gitHub from "../../Assets/github2.png";
import gitLogo from "../../Assets/profile2.jpg";


const GithubComp = ({ username }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await window.fetch(
          `https://api.github.com/users/${username}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setUser(data);
          console.log(data)

          setIsLoading(false);
        } else {
          console.error(`Error fetching user data: ${response.status}`);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const fetchRepos = async () => {
      try {
        const response = await window.fetch(
          `https://api.github.com/users/${username}/repos`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setRepos(data);
          setIsLoading(false);
        } else {
          console.error(`Error fetching repository data: ${response.status}`);
        }
      } catch (error) {
        console.error("Error fetching repository data:", error);
      }
    };

    fetchUser();
    fetchRepos();
  }, []);

  return (
    <div>
      {isLoading && <span>error...</span>}
      {!isLoading && (
        <a href="https://github.com/Mikey1233" target="blank">
          <aside>
            <img
              className="githubLogo2"
              src={gitLogo}
              alt={user.name}
            />
            <img src={gitHub} alt="github logo" className="githubLogo" />
          </aside>

          <h2>{user.name}</h2>
          <span>Repositories : {repos.length}</span>

          <span>Bio: {user.bio}</span>
        </a>
      )}
    </div>
  );
};

export default GithubComp;
