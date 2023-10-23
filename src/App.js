import {useTranslation} from 'react-i18next';


function App() {

  const { t } =useTranslation();

  const releaseDate = new Date('2023-10-23');
  const timeDifference = new Date() - releaseDate ;
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return (
    <div className="Container ">
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
