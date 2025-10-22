import React from 'react';
import { ActionIcon } from '@mantine/core';
import { IconLayoutSidebarLeftCollapseFilled } from '@tabler/icons-react';

const Header = () => {
  return (
    <div className='w-full h-16 bg-cyan-100'>
    <ActionIcon variant="transparent" size="xl">
      <IconLayoutSidebarLeftCollapseFilled style={{width:'70%', height:'70%'}}  stroke={1.5}/>
    </ActionIcon>
    </div>
  )
};

export default Header;