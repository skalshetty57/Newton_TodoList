import React from "react"
import logo from "../assests/logo.jpg"
import "./Header.scss"
const Header = () => {
	return (
		<header className="header">
			<nav>
				<div className="logo">
					<img src={logo} alt="logo" />
				</div>
			</nav>
		</header>
	)
}

export default Header
