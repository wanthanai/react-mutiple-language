//! i18next
import { useTranslation } from 'react-i18next'
import i18n from "i18next";


//! App Commponent
function App() {
  //! useTranslation
  const { t } = useTranslation();

  //! Functions
  // change language
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }

  //! Return Component
  return (
    <center>
      <h1>{t('welcome_to_react')}</h1>

      <select onChange={(e) => changeLanguage(e.target.value)} style={{ padding: '10px', fontSize: '2rem' }}>
        <option value="th">th</option>
        <option value="en">en</option>
      </select>
    </center>
  )
}


export default App;
