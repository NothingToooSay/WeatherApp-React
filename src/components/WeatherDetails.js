import React from 'react'
import style from '../styles/modules/WeatherDetails.module.css'
import { FaWind } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { WiHumidity } from 'react-icons/wi'

function WeatherDetails({ weather }) {
	return (
		<div className={style.content}>
			<div className={style.weatherImage}>
				<img
					src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
					alt=''
				/>
				<h3 className={style.description}>{weather.weather[0].description}</h3>
			</div>
			<div className={style.weatherTemp}>
				<h2>{weather.main.temp} ℃</h2>
			</div>
			<div className={style.weatherCity}>
				<div className={style.location}>
					<MdLocationOn />
				</div>
				<p>
					{weather.name}, <span>{weather.sys.country}</span>
				</p>
			</div>
			<div className={style.weatherStats}>
				<div className={style.wind}>
					<div className={style.windIcon}>
						<FaWind />
					</div>
					<h3 className={style.windSpeed}>
						{weather.wind.speed}
						<span>Km/h</span>
					</h3>
					<h3 className={style.windHeading}>wind Speed</h3>
				</div>
				<div className={style.humidity}>
					<div className={style.humidityIcon}>
						<WiHumidity />
					</div>
					<h3 className={style.humidityPercent}>
						{weather.main.humidity}
						<span>%</span>
					</h3>
					<h3 className={style.humidityHeading}>Humidity</h3>
				</div>
			</div>
		</div>
	)
}

export default WeatherDetails
