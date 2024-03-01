import React, { useState } from 'react'
import style from '../styles/modules/Weather.module.css'
import { FaSearch } from 'react-icons/fa'
import WeatherDetails from './WeatherDetails'

function Weather() {
	const [city, setCity] = useState('')
	const [weather, setWeather] = useState()
	const [error, setError] = useState('')

	const API_KEY = '0fc18f5926a2fb971a66e54791326cc2'
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`

	function handleOnChange(event) {
		setCity(event.target.value)
	}

	async function fetchData() {
		try {
			if (city !== '') {
				let response = await fetch(url)
				let output = await response.json()
				if (response.ok) {
					setWeather(output)
					setError('')
				} else {
					setError('No data found, Please enter a valid city name')
					setWeather(null)
				}
			}
		} catch (error) {
			setError('Error fetching data')
			setWeather(null)
		}
	}

	return (
		<div className={style.container}>
			<div className={style.city}>
				<input
					type='text'
					value={city}
					onChange={handleOnChange}
					placeholder='Enter city name'
				/>
				<button onClick={fetchData}>
					<FaSearch />
				</button>
			</div>

			{error && <p className={style.errorMessage}>{error}</p>}
			{weather && weather.weather && <WeatherDetails weather={weather} />}
		</div>
	)
}

export default Weather
