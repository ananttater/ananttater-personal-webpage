import React from 'react'
import { GithubRepo } from '../APIs/GithubRepoAPI'

export const GHRepos = () => {
   const repos = [
      'ananttater/Video-Chat-WEB-APP',
      'ananttater/classAttendence',
      'ananttater/Chat-with-PDF',
      'ananttater/Web-News-App-PressWire',
   ]

   return (
      <div className="gh-repo-cont">
         {repos.map((repo) => (
            <GithubRepo repoName={repo} key={repo} className="github-repo" />
         ))}
      </div>
   )
}
