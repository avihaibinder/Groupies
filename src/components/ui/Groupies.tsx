import React from 'react'
import { Group } from '../shared/Group';
import { groupList } from '../../data';
export const Groupies = () => {
  return (
    <div className='main-container'>

        {groupList.map((group, index) => (
            <div className='row-container'>
                <Group group={group} />
            </div>
         ))}
    </div>
  )
}
