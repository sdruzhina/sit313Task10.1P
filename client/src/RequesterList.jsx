import React from 'react';
import requestersData from './requestersData'
import RequesterCard from './RequesterCard'


function RequesterList() {
  return (
    requestersData.map((requester) => 
      <RequesterCard 
        key = {requester.key}
        avatar = {requester.avatar}
        name = {requester.name}
        description = {requester.description}
      />
  ));
}

export default RequesterList;
