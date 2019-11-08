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

const Buttons = () => {
	return (
		<Center>
			<Button>Previous</Button>
			<Button>Next</Button>
		</Center>
	);
};
export default Buttons;
