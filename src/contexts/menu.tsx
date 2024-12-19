import { createContext } from 'react';
import React from 'react';

export const menuContext= createContext({
state: false,
set: React.Dispatch<React.SetStateAction<boolean>>
});
