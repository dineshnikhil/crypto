import React from 'react';
import { useState } from 'react';
import classes from './CryptoCard.module.css';
// importing the icons from fontawsome
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CryptoCard(props) {
	// maintaing the wishlist start
	const [is_added_to_wishlist, set_is_added_to_wishlist] = useState(false);
	const [is_added_to_portfolio, set_is_added_to_portfolio] = useState(false);
	function add_to_wishlist_handler() {
		set_is_added_to_wishlist(!is_added_to_wishlist);
	}
	function add_to_portfolio_handler() {
		set_is_added_to_portfolio(!is_added_to_portfolio);
	}
	return (
		<div className={classes.crypto_card}>
			<div className={classes.inner_card_div} id="wishlist_div">
				<button
					onClick={add_to_wishlist_handler}
					className={
						is_added_to_wishlist == false ? 'not_in_wishlist' : 'in_wishlist'
					}
				>
					<FontAwesomeIcon
						icon={is_added_to_wishlist === false ? faStar : solidStar}
					/>
				</button>
			</div>
			<div className={classes.inner_card_div} id="card_rank">
				<h4>{props.coin.market_cap_rank}</h4>
			</div>
			<div className={classes.inner_card_div} id="card_name_div">
				<img src={props.coin.image} alt="coin logo" />
				<h4>{props.coin.name}</h4>
				<h4>{props.coin.symbol}</h4>
			</div>
			<div className={classes.inner_card_div}>
				<h4>{props.coin.current_price}</h4>
			</div>
			<div className={classes.inner_card_div}>
				<h4
					className={
						props.coin.price_change_percentage_24h > 0 ? 'green' : 'red'
					}
				>
					{props.coin.price_change_percentage_24h.toFixed(2)}
				</h4>
			</div>
			<div className={classes.inner_card_div}>
				<h4>{props.coin.market_cap}</h4>
			</div>
			<div className={classes.inner_card_div}>
				<h4
					className={
						props.coin.market_cap_change_percentage_24h > 0 ? 'green' : 'red'
					}
				>
					{props.coin.market_cap_change_percentage_24h.toFixed(2)}
				</h4>
			</div>
			<div className={classes.inner_card_div}>
				<h4>{props.coin.total_volume}</h4>
			</div>
			<div className={classes.inner_card_div} id="porfolio_div">
				<button
					onClick={add_to_portfolio_handler}
					className={
						is_added_to_portfolio == false ? 'not_in_portfolio' : 'in_portfolio'
					}
				>
					<FontAwesomeIcon
						icon={is_added_to_portfolio === false ? faPlus : faCheck}
					/>
				</button>
			</div>
		</div>
	);
}

export default CryptoCard;
