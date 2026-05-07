import React from 'react';
import { statsData } from '../data/statsData';

export const Stats = () => {
  return (
    <div className="stats-bar">
      {statsData.map((stat, idx) => (
        <div key={idx} className="stat-item">
          <div className="stat-num">{stat.number}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};