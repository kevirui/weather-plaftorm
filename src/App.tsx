import styles from './App.module.css';
import Alert from './components/Alert/Alert';
import Form from './components/Form/Form';
import useWeather from './components/hooks/useWeather';
import Spinner from './components/Spinner/Spinner';
import WeatherDetail from './components/WeatherDetail/WeatherDetail';

function App() {

  const { weather, fetchWeather, notFound, hasWeatherData, loading } = useWeather()

  return (
    <>
      <h1 className={styles.title}>Buscador de Clima</h1>

      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />
        {loading && <Spinner />}
        {hasWeatherData && <WeatherDetail weather={weather} />}
        {notFound && <Alert>Ciudad no encontrada</Alert>}
      </div>
    </>
  )
}

export default App
