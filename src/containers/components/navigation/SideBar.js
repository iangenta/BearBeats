import React, { useMemo } from 'react';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { connect } from 'react-redux';
import { Box } from './Box'; // 
import SidebarItem from './SideBarItem';
import Library from './Library';

function SideBar({ children }) {
  const routes = useMemo(() => [
    {
      Icon: HiHome,
      label: 'Home',
      href: '/'
    },
    {
      Icon: BiSearch,
      label: 'Search',
      href: '/search',
    }
  ], []);

  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y py-2">
        {children}
      </main>
    </div>
  );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(SideBar);
