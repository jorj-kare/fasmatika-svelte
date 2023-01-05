<script>
	import { onDestroy, onMount } from 'svelte';
	import { Circle2 } from 'svelte-loading-spinners';
	import Modal from '../../lib/Modal.svelte';
	let title;
	let content;
	let img;
	let submit;

	async function onsubmit(e) {
		submit = true;

		const form = new FormData();
		form.append('title', title);
		form.append('content', content);
		form.append('img', document.getElementById('imageInput').files[0]);

		const res = await fetch('http://127.0.0.1:3000/api/v1/posts', {
			method: 'Post',
			body: form,

			credentials: 'include'
		});
		const data = res.json();

		if (!res.ok) return alert(data.message);
		location.assign('/');
		sessionStorage.clear();
	}

	function previewImg() {
		const fr = new FileReader();
		fr.readAsDataURL(document.querySelector('#imageInput').files[0]);
		fr.onload = function (e) {
			img = e.target.result;
			document.querySelector('#previewImage').src = img;
		};
	}

	onMount(() => {
		title = sessionStorage.getItem('title');
		content = sessionStorage.getItem('content');
		img = sessionStorage.getItem('img') ? sessionStorage.getItem('img') : '';
		document.querySelector('#previewImage').src = img;
	});
	if (submit) {
		onDestroy(() => {
			sessionStorage.setItem('title', title);
			sessionStorage.setItem('content', content);
			sessionStorage.setItem('img', img);
		});
	}
</script>

<section class="newPost">
	{#if submit}
		<Modal>
			<div class="spinnerWrapper">
				<Circle2
					size="100"
					colorOuter=" #1f4690"
					colorCenter="#975c8d"
					colorInner=" #86c8bc"
					unit="px"
				/>
			</div>
		</Modal>
	{/if}
	<form on:submit|preventDefault={onsubmit}>
		<label id="titleLabel" for="titleInput">Τίτλος</label>
		<textarea id="titleInput" bind:value={title} required />
		<label id="contentLabel" for="contentInput">Περιεχόμενο</label>
		<textarea id="contentInput" bind:value={content} cols="5" required />

		<label id="imageLabel" for="imageInput">Φωτογραφία</label>
		<div id="customImageInput" class="customInputFile">
			<input
				on:change={previewImg}
				id="imageInput"
				name="img"
				type="file"
				accept="image/*"
				title="Πατήστε εδω για να επιλεξέτε φωτογραφία"
				required
			/>
			<img id="uploadIcon" src="/images/uploadImage.png" alt="upload-image" />
		</div>
		<img id="previewImage" src="" />
		<button type="submit"><span id="btn-text">Αποθήκευση</span></button>
	</form>
</section>

<style lang="scss">
	@use '../../../static/sass/abstracts/' as *;
	.newPost {
		display: flex;
		flex-direction: column;
		background-color: $color-black;
	}

	form {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: repeat(12, 1fr);
		gap: 1rem;
		padding: 10rem 3rem 3rem 3rem;

		button {
			grid-column: 2/3;
			grid-row: 2/3;
			width: 12rem;
			height: 12rem;
			margin: auto 0;
			border-radius: 100px;
			border: 1px solid$color-white;
			background-color: #fed049;
			color: $color-black;
			transition: all 1.5s ease-in;
			&:active,
			&:hover {
				cursor: pointer;
				transform: rotate(360deg);
			}
		}

		label {
			font-size: 2rem;
			color: $color-white;
		}
		input,
		textarea {
			padding: 2rem;
			border: 2px solid $color-black;
			border-radius: 15px;
			outline: transparent;
			background-color: transparent;
			word-spacing: normal;
			color: $color-white;

			&[type='file'] {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				opacity: 0;
				z-index: 1;
				&:hover {
					cursor: pointer;
				}
			}
		}
	}

	#btn-text {
		display: flex;
		position: relative;
		width: fit-content;
		padding: 0.3rem 0.5rem;
		font-size: 1.5rem;
		letter-spacing: 0.3rem;
		border-radius: 15px;
		background-color: $color-white;
		left: 40%;
	}
	#titleLabel {
		grid-row: 1/2;
		grid-column: 3/4;
		padding-bottom: 0.5rem;
		writing-mode: vertical-rl;
		text-orientation: upright;
	}
	#titleInput {
		grid-column: 4/10;
		grid-row: 1/2;
		background-color: #975c8d;
		font-size: 3rem;
	}
	#contentLabel {
		grid-column: 7/12;
		grid-row: 2/3;
		display: flex;
		align-items: flex-end;
		letter-spacing: 0.3rem;
	}
	#contentInput {
		grid-column: 7/13;
		grid-row: 3/9;
		background-color: #1f4690;
		font-size: 2rem;
		font-weight: 300;
	}
	#imageLabel {
		grid-column: 2/6;
		grid-row: 3/4;
		display: flex;
		align-items: flex-end;
		letter-spacing: 0.3rem;
	}
	#customImageInput {
		grid-column: 2/6;
		grid-row: 4/5;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		padding: 1rem;
		background-color: #86c8bc;
		border-radius: 15px;
	}
	#customImageInput:hover #uploadIcon {
		transform: scale(1.1);
	}

	#uploadIcon {
		width: 6rem;
		transition: all 0.5s ease-out;
	}
	#previewImage {
		grid-column: 2/6;
		grid-row: 5/13;
		width: 100%;
		border-radius: 15px;
	}
	.spinnerWrapper {
		z-index: 100;
	}
</style>
