import React from 'react';
import style from './App.module.css';
function Footer(){
	return(
		<div className={style.footcontainer}>
		<footer className={style.footer}>
		<a href="#Hello">Privacy & Policy</a>
		<a href="#World">Contact</a>
		<a href="#Hi">Ratings</a></footer>
		</div>
	)
}
export default Footer;