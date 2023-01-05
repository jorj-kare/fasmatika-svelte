<script>
</script>

<button>
	<slot />
</button>

<style>
	button {
		border: none;
		padding: 0.5rem;
		font-size: 1.2rem;
		letter-spacing: 0.1rem;
		transition: color 1.5s ease-in, border 2s, background-color 0.8s;
	}
	button:hover,
	button:active {
		background-color: transparent;
		color: #eee;
		border-radius: 5px;
		border-left: 0.5px solid #eee;
		border-right: 0.5px solid #eee;
	}
</style>
