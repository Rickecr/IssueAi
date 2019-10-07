// @flow
import * as React from 'react';
import ReactTooltip from 'react-tooltip';
import type { Repository } from './repository';

import './Repository.css';

type RepositoryProps = {
    repository: Repository,
};

type StatProps = {
    iconClass: string,
    statCount: number,
    tooltipMessage: string,
};

const Stat = ({ iconClass, statCount, tooltipMessage }: StatProps) => (
    <div className="stat" data-tip={tooltipMessage}>
        <i className={`fas ${iconClass}`} />
        <span className="stat-count">{statCount}</span>
    </div>
);

const RepositoryStats = ({ repository }: RepositoryProps) => (
    <div className="repository-stats">
        <Stat
            iconClass="fa-star"
            statCount={repository.stargazersCount}
            tooltipMessage="Stars"
        />
        <Stat
            iconClass="fa-exclamation-circle"
            statCount={repository.issuesCount}
            tooltipMessage="Issues"
        />
        <Stat
            iconClass="fa-code-branch"
            statCount={repository.pullRequestsCount}
            tooltipMessage="Pull Requests"
        />
        <Stat
            iconClass="fa-utensils"
            statCount={repository.forkCount}
            tooltipMessage="Forks"
        />
        <ReactTooltip />
    </div>
);

const RepositoryCard = ({ repository }: RepositoryProps) => (
    <a href={repository.url} target="_blank" rel="noopener noreferrer">
        <div className="repository-card">
            <header className="repository-header">
                <h2 className="repository-name">
                    {repository.nameWithOwner.split('/')[1]}
                </h2>
                <h6 className="repository-owner">
                    {repository.nameWithOwner.split('/')[0]}
                </h6>
            </header>
            <p className="repository-description">{repository.description}</p>
            <RepositoryStats
                className="repository-stats"
                repository={repository}
            />
        </div>
    </a>
);

export default RepositoryCard;
