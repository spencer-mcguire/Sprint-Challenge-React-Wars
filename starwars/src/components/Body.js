import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";
import Card from "./Card";
import Buttons from "./Buttons";

const Body = () => {
	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);

	const Next = () => {
		setPage(page + 1);
	};
	const Prev = () => {
		setPage(page - 1);
	};

	useEffect(() => {
		axios
			.get(`https://lambda-swapi.herokuapp.com/api/people/?page=${page}`)
			.then(res => setData(res.data.results))
			.catch(err => console.log(`HOLD ON: `, err));
	}, [page]);
	return (
		<Container>
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
			<Buttons next={Next} prev={Prev} />
		</Container>
	);
};
export default Body;
