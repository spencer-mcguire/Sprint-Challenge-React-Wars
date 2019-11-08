import React from "react";
import styled from "styled-components";
import { Col } from "reactstrap";
import "../index.css";

const CardContainer = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: space-around;
	width: 250px;
	height: auto;
	background: rgba(0, 0, 0, 0.5);
	color: white;
	margin: 10px;
	padding: 5%;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const H3 = styled.h3`
	font-size: 1.5rem;
`;

const Card = ({ name, gender, birth_year }) => {
	return (
		<Col xs='6' sm='3'>
			<CardContainer>
				<h2>Obituary</h2>
				<H3>{name}</H3>
				<p>Gender: {gender}</p>
				<p>Birth Date: {birth_year}</p>
				<p>
					{" "}
					Today is an extremely sad day. {name} has passed away from dysentery
					on the Oregon Trail. The bison are now eating the remains.
				</p>
			</CardContainer>
		</Col>
	);
};
export default Card;
