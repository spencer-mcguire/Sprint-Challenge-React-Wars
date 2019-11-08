import React from "react";
import "./App.css";
import { Container } from "reactstrap";
import Body from "./components/Body";
import styled from "styled-components";

const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.

	// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.

	const H1 = styled.h1`
		text-align: center;
		margin: 35px;
		color: #443e3e;
		text-shadow: 1px 1px 5px #fff;
	`;

	const Footer = styled.footer`
		text-align: center;
		color: white;
		margin-top: 35px;
	`;

	return (
		<Container>
			<H1>React Wars</H1>
			<Body />
			<Footer>Copywrite 2019</Footer>
		</Container>
	);
};

export default App;
