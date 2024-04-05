import React from 'react'
import { GroupElement } from './shared';
export const Group = ({ group }: { group: GroupElement }) => {
    const {id,title ,items} = group;
  return (
    <div className='group'>
       <h2>{title}</h2>
    </div>
  )
}
