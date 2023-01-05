<script>
	import CloseBtn from '../../lib/CloseBtn.svelte';
	import Modal from '../../lib/Modal.svelte';
	import Page from '../account/+page.svelte';
	let username;
	let password;
	async function login() {
		try {
			const form = {
				username,
				password
			};
			let headers = new Headers();

			headers.append('Content-Type', 'application/json');
			headers.append('Accept', 'application/json');

			const res = await fetch('http://127.0.0.1:3000/api/v1/user/login', {
				credentials: 'include',
				method: 'POST',
				headers: headers,
				body: JSON.stringify(form)
			});

			const data = await res.json();
			if (!res.ok) console.log(data.message);
			console.log(data);
		} catch (err) {
			console.log(err);
		}
	}
</script>

<Modal opacity="1" , backgroundColor="#1f4690">
	<form on:submit|preventDefault={login}>
		<label for="usernameInput">Όνομα χρήστη</label>
		<input type="text" id="usernameInput" bind:value={username} />
		<label for="passwordInput">Κωδικός</label>
		<input type="password" id="passwordInput" bind:value={password} />
		<button type="submit">Σύνδεση</button>
	</form>
	<CloseBtn page="account" />
</Modal>
