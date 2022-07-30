import { useState } from 'react';
import { Drawer as DrawerP, Container } from '@toptal/picasso';

interface DrawerProps {
  title: string;
  anchor: 'left' | 'right';
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Drawer = ({ title, anchor, open, onClose, children }: DrawerProps) => (
  <DrawerP title={title} width='' anchor={anchor} open={open} onClose={onClose}>
    <div className="ml-7 mr-12">{children}</div>
  </DrawerP>
);
