<script>
	export let page;
</script>

<a class="btn-round" href="/{page}"> <p /></a>

<style lang="scss">
	@use '../../static/sass/btns';
	a {
		position: absolute;
		top: 2rem;
		right: 2rem;
		z-index: 3;
	}
	a:before {
		content: '|';
		position: absolute;
		top: 1.2rem;
		left: 1.7rem;
		transform: rotate(90deg);
		transition: all 1s;
	}
	a:after {
		content: '|';
		position: absolute;
		top: 1.2rem;
		left: 1.5rem;
		transform: rotate(-90deg);
		transition: all 1s;
	}
	a:hover:after {
		transform: rotate(-398deg) scale(1.2);
	}
	a:hover:before {
		transform: rotate(398deg) scale(1.2);
	}
</style>
