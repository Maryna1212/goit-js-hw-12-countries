import './sass/main.scss';
import fetchCountries from './js/fetchCountries.js';
import '@pnotify/core/dist/BrightTheme.css';
import { alert } from '@pnotify/core';
import countryExample from './templates/countryExample.hbs';
import allCountries from './templates/allCountries.hbs';
const debounce = require('lodash.debounce');

const refs = {
    input: document.querySelector('.search-input-js'),
    countries: document.querySelector('.all-countries-js'),
};

const onInputDebounce = debounce(onInputCountry, 500);

refs.input.addEventListener('input', onInputDebounce);

function onInputCountry(evt) {
    if (!evt.target.value) {
        return;
    };
    const serchCountry = evt.target.value;
    fetchCountries(serchCountry)
      .then(renderCountryMarkup)
      .catch(onCatch)
};

function renderCountryMarkup(countries) {
    if (countries.length === 1) {
        renderCountry(countries);
    } else
        if (countries.length >= 2 && countries.length <= 10) {
            renderCountries(countries);
        } else {
            errorResult()
        };
};

function errorResult() {
    error({
        text:
            "Too many matches found. Please enter a more specific query.",
        delay: 4000,
    })
};

function renderCountry(countries) {
    countries.forEach(country => {
        refs.countries.innerHTML = countryExample(country);
            refs.input.value = '';
    });
};

function renderCountries(countries) {
    const allCountriesArray = countries.map(country => country.name);
    refs.render.innerHTML = allCountries(allCountriesArray);
};

function onCatch(error) {
    alert(`${error}`)
};