'use client';

import CalculateIcon from '@mui/icons-material/Calculate'
import CodeIcon from '@mui/icons-material/Code'
import HistoryIcon from '@mui/icons-material/History'
import LeaderboardIcon from '@mui/icons-material/Leaderboard'
import MenuIcon from '@mui/icons-material/Menu'
import { Drawer, IconButton } from '@mui/material'
import React from 'react'

interface HeaderProps {
  history: string[];
}

export const Header = ({ history }: HeaderProps) => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [openHistory, setOpenHistory] = React.useState(false);

  const menuItems = [
    { name: 'Обычный', icon: <CalculateIcon /> },
    { name: 'Инженерный', icon: <LeaderboardIcon /> },
    { name: 'Программист', icon: <CodeIcon /> },
  ];

  const toggleDrawerMenu = (newOpen: boolean) => () => {
    setOpenMenu(newOpen);
  };

  const toggleDrawerHistory = (newOpen: boolean) => () => {
    setOpenHistory(newOpen);
  };

  return (
    <div className="flex">
      <div className="flex justify-between w-full">
        <div className="flex">
          <IconButton onClick={toggleDrawerMenu(true)} color="inherit" aria-label="menu">
            <MenuIcon fontSize="large" />
          </IconButton>
          <h1 className="font-bold text-2xl mt-2.5">Калькулятор</h1>
        </div>
        <div>
          <IconButton onClick={toggleDrawerHistory(true)} color="inherit" aria-label="history">
            <HistoryIcon fontSize="large" />
          </IconButton>
        </div>
      </div>

      {/* Меню Drawer */}
      <Drawer
        open={openMenu}
        onClose={toggleDrawerMenu(false)}
        PaperProps={{
          sx: {
            backgroundColor: 'var(--background)',
            color: 'var(--foreground)',
          },
        }}
      >
        {menuItems.map(({ name, icon }) => (
          <div key={name} className="flex items-center" onClick={toggleDrawerMenu(false)}>
            <div className="cursor-pointer hover:bg-gray-400 transition-colors duration-200 w-full p-2">
              {icon}
              <span className="ml-2">{name}</span>
            </div>
          </div>
        ))}
      </Drawer>

      {/* История Drawer */}
      <Drawer
        open={openHistory}
        onClose={toggleDrawerHistory(false)}
        anchor="bottom"
        PaperProps={{
          sx: {
            backgroundColor: 'var(--background)',
            color: 'var(--foreground)',
          },
        }}
      >
        <div className="p-4 max-h-72">
          <h1 className="font-bold text-2xl mb-2">История</h1>
          <div className="flex flex-col space-y-2">
            {history.length > 0 ? (
              history.map((entry, index) => (
                <div
                  key={index}
                  className="p-2 bg-gray-700 rounded text-white"
                >
                  {entry}
                </div>
              ))
            ) : (
              <p className="text-gray-400">История пуста</p>
            )}
          </div>
        </div>
      </Drawer>
    </div>
  );
};
