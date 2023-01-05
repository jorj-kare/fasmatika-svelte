<script>
	import Modal from '../../lib/Modal.svelte';
	import CloseBtn from '../../lib/CloseBtn.svelte';
	let username;
	let password;
	let passwordConfirm;
	let profileImg;

	async function signUp() {
		try {
			const form = new FormData();
			form.append('username', username);
			form.append('password', password);
			form.append('passwordConfirm', passwordConfirm);
			form.append('profileImg', document.getElementById('profileImgInput').files[0]);

			const res = await fetch(
				'https://fasmatika-api-production.up.railway.app/api/v1/user/signUp/',
				{
					method: 'Post',

					body: form
				}
			);
			const data = await res.json();
			console.log(data);

			if (!res.ok) throw data.message;
		} catch (err) {
			alert(err);
		}
	}
</script>

<Modal opacity="1" backgroundColor="#975c8d">
	<form on:submit|preventDefault={signUp}>
		<label for="usenameInput">Όνομα</label>
		<input id="usernameInput" bind:value={username} type="text" />
		<label for="passwordInput">Κωδικός</label>
		<input id="passwordInput" bind:value={password} type="password" />
		<label for="passwordConfirmInput">Επαλήθευση κωδικού</label>
		<input id="passwordConfirmInput" bind:value={passwordConfirm} type="password" />
		<label for="profileImgInput">Φωτογραφία προφίλ</label>
		<input id="profileImgInput" name="profileImg" type="file" accept="image/*" />
		<button type="submit">Δημιουργία</button>
	</form>
	<CloseBtn page="account" />
</Modal>
