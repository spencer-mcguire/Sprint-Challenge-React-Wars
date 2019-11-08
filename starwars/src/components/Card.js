import React from "react";
import styled from "styled-components";
import { Col } from "reactstrap";

const CardContainer = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: space-around;
	width: 250px;
	height: 250px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const Card = ({ name, gender, birth_year }) => {
	return (
		<Col xs='12' s='6' md='4'>
			<CardContainer>
				<h2>{name}</h2>
				<p>Gender: {gender}</p>
				<p>Birth Date: {birth_year}</p>
			</CardContainer>
		</Col>
	);
};
export default Card;
