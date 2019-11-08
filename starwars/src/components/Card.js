import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
text-align: center
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: space-around;
width: 300px;
height: 300px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const Card = () => {
	return (
		<CardContainer>
			<h2>Name</h2>
			<p>Gender</p>
			<p>BirthDate</p>
		</CardContainer>
	);
};
export default Card;
