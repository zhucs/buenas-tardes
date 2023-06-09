// Context for passing language state to children
import {createContext} from 'react';

export const LanguageContext = createContext({language: null, updateLanguage: null});