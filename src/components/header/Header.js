import React from 'react'
import logo from '../../assets/investment-calculator-logo.png'
import classes from './Header.module.css'

const Header = ({title}) => {
	return (
		<header className={classes.header}>
			<img src={logo} alt='logo' />
			<h1>{title}</h1>
		</header>
	)
}

export default Header
