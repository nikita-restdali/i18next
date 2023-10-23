import {useTranslation} from 'react-i18next';


function App() {

  const { t } =useTranslation()
  return (
    <div className="Container ">
      <div className="d-flex flex-column align-items-start">
          {t('welcome')}
      </div>
    </div>
  );
}

export default App;
