<script>
	import Header from '../lib/Header.svelte';
	import Post from '../lib/Post.svelte';
	async function fetchData() {
		const res = await fetch('https://fasmatika-api-production.up.railway.app/api/v1/posts');
		const data = await res.json();

		return data;
	}
</script>

<Header />
{#await fetchData()}
	loading...
{:then posts}
	<section class="posts">
		{#each posts.data as { title, content, img }}
			<Post {title} {content} {img} />
		{/each}
	</section>
{/await}

<style lang="scss">
	@use '../../static/sass/abstracts/' as *;
	.posts {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background-color: $color-black;
	}
</style>
