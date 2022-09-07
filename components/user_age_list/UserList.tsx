import styled from "styled-components";
import React from "react";

interface User {
	username: string;
	age: number | undefined;
}

interface Props {
	users: User[];
}

const StyledUl = styled.ul`
	display: flex;
	flex-direction: column;
	width: 400px;
	/* border: 2px solid white;
	border-radius: 0.5rem;
	background-color: black; */
	gap: 1rem;
	padding: 1rem 1rem;
`;

const Card = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: black;
	border: 2px solid white;
	border-radius: 0.5rem;
	width: 350px;
	padding: 0 1rem;
`;

const UserName = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 75px;
	color: white;
`;

const Age = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 75px;
	color: white;
`;

const List: React.FC<Props> = ({ users }) => {
	return (
		<StyledUl>
			{users.map((user, idx) => {
				return (
					<li key={idx}>
						<Card>
							<UserName children={`Username: ` + user.username} />
							<Age children={`Age: ` + user.age} />
						</Card>
					</li>
				);
			})}
		</StyledUl>
	);
};

export default List;
