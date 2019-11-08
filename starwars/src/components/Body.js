import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";
import Card from "./Card";
import Buttons from "./Buttons";

const Body = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get("https://lambda-swapi.herokuapp.com/api/people/")
			.then(res => setData(res.data.results))
			.catch(err => console.log(`HOLD ON: `, err));
	}, []);
	return (
		<Container>
			<Buttons />
			<Row>
				{data.map((a, index) => {
					return (
						<Card
							key={index}
							name={a.name}
							gender={a.gender}
							birth_year={a.birth_year}
						/>
					);
				})}
			</Row>
		</Container>
	);
};
export default Body;
