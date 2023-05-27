import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CryptoCard from '../cryptoCard/CryptoCard';
import classes from './Home.module.css';
import classes_2 from '../cryptoCard/CryptoCard.module.css';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from '../ui/Loader';

function Home() {
	// creating the state for the coins array
	const [isLoading, setisLoading] = useState(true);
	const [coins, setCoins] = useState([]);
	const [currence, setCurrence] = useState('usd');
	var api_link = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currence}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
	// now fetching the coins data from api
	useEffect(() => {
		fetch(api_link)
			.then((response) => {
				return response.json();
			})
			.then((coins_result) => {
				setCoins(coins_result);
				setisLoading(false);
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

	var search_div = <FontAwesomeIcon icon={faMagnifyingGlass} />;
	return (
		<div className={classes.home_div}>
			<h1>All you can find is about crypto coins Here</h1>
			<h3>Be caution when you invest in crypto market</h3>
			<div className={classes.search_box}>
				<div>
					<button className={classes.feature_btn}>
						<FontAwesomeIcon
							className={classes.feature_btn_icon}
							icon={faStar}
						/>{' '}
						whishlist
					</button>
					<button className={classes.feature_btn}>
						<FontAwesomeIcon
							className={classes.feature_btn_icon}
							icon={faChartPie}
						/>{' '}
						portfolio
					</button>
				</div>
				<div>
					<select
						className={classes.home_select_option}
						name="currence"
						id="currence"
						onChange={(event) => {
							setCurrence(event.target.value);
						}}
					>
						<option value="USD">USD</option>
						<option value="INR">INR</option>
						<option value="EUR">EUR</option>
						<option value="GBP">GBP</option>
					</select>
					<input
						className={classes.search_input}
						type="search"
						name="coin"
						placeholder="search"
						id="coin_search"
						onChange={(event) => {
							setSearch(event.target.value);
						}}
					/>
				</div>
			</div>
			<div className={classes.crypto_display_div}>
				<div className={classes.crypto_display_heading}>
					<div className={classes_2.inner_card_div} id="wishlist_div"></div>
					<div className={classes_2.inner_card_div} id="card_rank">
						<h4>Rank</h4>
					</div>
					<div className={classes_2.inner_card_div} id="card_name_div">
						<h4>Name</h4>
					</div>
					<div className={classes_2.inner_card_div}>
						<h4>Current Price</h4>
					</div>
					<div className={classes_2.inner_card_div}>
						<h4>24%</h4>
					</div>
					<div className={classes_2.inner_card_div}>
						<h4>Market Cap</h4>
					</div>
					<div className={classes_2.inner_card_div}>
						<h4>24%</h4>
					</div>
					<div className={classes_2.inner_card_div}>
						<h4>Total Volume</h4>
					</div>
					<div className={classes_2.inner_card_div} id="porfolio_div"></div>
				</div>
				<div className={classes.content}>
					{isLoading && <Loader />}
					{filtered_coins.map((coin) => {
						return <CryptoCard coin={coin} currence={currence} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default Home;
