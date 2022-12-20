import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CryptoCard from '../cryptoCard/CryptoCard';
import classes from './Home.module.css';

function Home() {
	// creating the state for the coins array
	const [coins, setCoins] = useState([]);
	const [currence, setCurrence] = useState('usd');
	var api_link = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currence}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
	// console.log(api_link);
	// now fetching the coins data from api
	useEffect(() => {
		fetch(api_link)
			.then((response) => {
				// console.log(response);
				return response.json();
			})
			.then((coins_result) => {
				setCoins(coins_result);
			});
	}, [currence]);

	// ================ search logic section =============
	const [search, setSearch] = useState('');
	var filtered_coins = coins.filter((coin) => {
		return coin.id
			.toString()
			.toLowerCase()
			.includes(search.toString().toLowerCase());
	});
	return (
		<div>
			<h1>All you can find is about crypto coins Here</h1>
			<h3>Be caution when you invest in crypto market</h3>
			<div className={classes.search_box}>
				<div>
					<button>whishlist</button>
					<button>portfolio</button>
				</div>
				<div>
					<select
						name="currence"
						id="currence"
						onChange={(event) => {
							setCurrence(event.target.value);
						}}
					>
						<option value="usd">USD</option>
						<option value="inr">INR</option>
						<option value="eur">EUR</option>
						<option value="gbp">GBP</option>
					</select>
					<input
						type="search"
						name="coin"
						id="coin_search"
						onChange={(event) => {
							setSearch(event.target.value);
						}}
					/>
				</div>
			</div>
			<div className={classes.crypto_display_div}>
				<div className={classes.crypto_display_heading}>
					<h1>headings comes here</h1>
				</div>
				{filtered_coins.map((coin) => {
					return <CryptoCard coin={coin} />;
				})}
			</div>
		</div>
	);
}

export default Home;
