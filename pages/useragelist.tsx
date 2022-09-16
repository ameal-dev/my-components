import React, { useState } from "react";
import { FormInput } from "../components/user_age_list/FormInput";
import UserList from "../components/user_age_list/UserList";
import { Z_Container } from "../components/Z_Atoms";
import Modal from "../components/user_age_list/Modal";

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
	const [showModal, setShowModal] = useState(false);

	return (
		<Z_Container dark>
			<FormInput setUsers={setUsers} setShowModal={setShowModal} />
			<UserList users={users} />
			<Modal
				onClose={() => setShowModal(false)}
				show={showModal}
				title={"Invalid Input"}
			/>
		</Z_Container>
	);
}
