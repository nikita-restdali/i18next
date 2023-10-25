import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import globe from './image/globe.png';
import i18next from 'i18next';
import cookies from 'js-cookie';

const languages = [
  {
    code: 'fr',
    name: 'Français',
    country_code: 'fr',
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'ar',
    name: 'العربية',
    country_code: 'sa',
    dir:'rtl'
  },
]

function App() {
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find( l => l.code === currentLanguageCode)

  const { t } =useTranslation();

  const releaseDate = new Date('2023-10-23');
  const timeDifference = new Date() - releaseDate ;
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));


  useEffect(() =>{
document.body.dir = currentLanguage.dir || 'ltr'
  }, [currentLanguage])
  return (
    <div className="Container ">
      <div className='d-flex justify-content-end'>
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={globe} alt='globe'/>
            </button>
            <ul className="dropdown-menu">
              {languages.map(({code, name, country_code}) => (
                <li key={country_code}>
                  <button className="dropdown-item" onClick={() => i18next.changeLanguage(code)}
                  disabled = {code === currentLanguageCode}
                  >
                    <span className={`flag-icon flag-icon-${country_code} mx-4`}></span>
                    {name}
                  </button>
                </li>
              ))} 
            </ul>
          </div>
        </div>
      <div className="d-flex flex-column align-items-start">
         <h1 className='font-weight-bold mb-4'>
          {t('welcome')}
         </h1>
         <p>
         {t('days_since_release', {number_of_days})}
         </p>
      </div>
    </div>
  );
}

export default App;
