import React, { useState, useEffect } from "react";
import GitHubRepo from "./GitHubRepo";
import "./PortfolioPage.css";

const PortfolioPage = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/Pauleerama93/repos");
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="portfolio-page">
      <h1>Paul Nelson's Portfolio</h1>
      <div className="github-repos">
        {repos.map((repo) => (
          <GitHubRepo key={repo.id} repo={repo} />
        ))}
      </div>
      <div className="github-profile">
        <a
          href="https://github.com/Pauleerama93"
          target="_blank"
          rel="noopener noreferrer"
        >
          View My GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default PortfolioPage;