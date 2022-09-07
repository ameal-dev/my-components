import React, { useState } from "react";
import { FormInput } from "../components/user_age_list/FormInput";
import UserList from "../components/user_age_list/UserList";
import { Container } from "../components/_atoms";

interface Element {
	dark?: boolean;
	id: number;
	name?: string;
	type: string;
	placeholder?: string;
	value?: string;
}

interface User {
	username: string;
	age: number;
}

export default function UserAgeList() {
	const [users, setUsers] = useState<User[]>([]);

	return (
		<Container dark>
			<FormInput setUsers={setUsers} />
			<UserList users={users} />
		</Container>
	);
}
