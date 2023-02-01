<script>
	export let href;
	export let text;
</script>

<a {href}>
	{text}
</a>

<style lang="scss">
	a {
		border: none;
		padding: 0.5rem;
		background-color: $color-white;
		color: $color-black;
		font-size: 1.2rem;
		letter-spacing: 0.1rem;
		transition: color 1.5s ease-in, border 2s, border-radius 1s, background-color 0.8s;

		&:hover {
			background-color: transparent;
			color: #eee;
			border-radius: 5px;
			border-left: 0.5px solid #eee;
			border-right: 0.5px solid #eee;
		}
	}
</style>
