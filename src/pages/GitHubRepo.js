import React from "react";
import "./PortfolioPage.css";

const GitHubRepo = ({ repo }) => {
  return (
    <div className="github-repo">
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <div className="github-repo-details">
        <p>Language: {repo.language}</p>
        <p>Stars: {repo.stargazers_count}</p>
        <p>Forks: {repo.forks_count}</p>
      </div>
      <a
        className="github-repo-link"
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default GitHubRepo;