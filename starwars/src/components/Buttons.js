import React from "react";
import { Button } from "reactstrap";
import styled from "styled-components";

const Center = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	justify-content: space-evenly;
	margin-top: 5%;
	margin-bottom: 5%;
`;

const Buttons = ({ next, prev }) => {
	return (
		<Center>
			<Button onClick={() => prev()}>Previous</Button>
			<Button onClick={() => next()}>Next</Button>
		</Center>
	);
};
export default Buttons;
