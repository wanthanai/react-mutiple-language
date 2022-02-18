import React from 'react';
import ReactDOM from 'react-dom';
//! Styles
import './index.css';
//! Components
import App from './App';
//! i18next
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
//! Languages
import lEn from './assets/locales/en/translation.json'
import lTh from './assets/locales/th/translation.json'


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: lEn
      },
      th: {
        translation: lTh
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
  });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
