import React from 'react';

export default ({ match }) => {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}