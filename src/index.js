import './sass/main.scss';
import fetchCountries from './js/fetchCountries.js';
import '@pnotify/core/dist/BrightTheme.css';
import { alert } from '@pnotify/core';
import countryExample from './templates/countryExample.hbs';
import allCountries from './templates/allCountries.hbs';
const debounce = require('lodash.debounce');



