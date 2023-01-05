<script>
	const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
	async function toggleNavigationMenu(e) {
		if (e.target.className.includes('nav__button') || !hidden) {
			animate = !animate;
			rotate = !rotate;
			await sleep(400);
			hidden = !hidden;
		}
	}

	let hidden = true;
	let animate = true;
	let rotate = false;
	let dark;

	function changePage(e) {
		if (e.target.className.includes('nav__item')) {
			store.set({ page: e.target.id });
		}
	}
</script>

<svelte:body on:click={changePage} on:click={toggleNavigationMenu} />
<div class:dark class="nav">
	<button class="nav__button btn-round" class:rotate type="button"> M </button>
	<ul class="nav__menu" class:hidden>
		<li class="nav__item" id="home" class:animate><a href="/">Αρχική</a></li>
		<li class="nav__item" id="newPost" class:animate><a href="/createNewPost">Νέο πόστ</a></li>
		<li class="nav__item" id="profile" class:animate><a href="/account">Προφίλ</a></li>
	</ul>
</div>
<slot />

<style lang="scss">
	@use '../../static/sass/btns';
	@use '../../static/sass/abstracts' as *;
	.nav {
		position: absolute;
		top: 2rem;
		right: 2rem;
		z-index: 1;
	}
	button {
		transition: 0.8s all;
	}

	ul {
		display: flex;
		gap: 0.25rem;
		margin: 0 -1rem;
		list-style: none;
		:nth-child(1) {
			margin-top: 0.5rem;
			animation: slideIn 0.3s forwards ease-out;
		}
		:nth-child(2) {
			margin-top: 2.5rem;
			animation: slideIn 0.5s forwards ease-out;
		}
		:nth-child(3) {
			margin-top: 1.5rem;
			animation: slideIn 0.7s forwards ease-out;
		}
	}

	li {
		writing-mode: vertical-rl;
		text-orientation: upright;
		font-size: 1.3rem;
		font-weight: 300;
		letter-spacing: 0.5rem;
		cursor: pointer;
	}

	.animate {
		animation: slideOut 0.4s forwards !important;
	}
	.hidden {
		display: none;
	}
	.rotate {
		transform: rotate(360deg);
	}
	.dark * {
		color: var(--color-black);
		border-color: var(--color-black);
	}
</style>
