<script>
	import AccountBtn from '../../lib/AccountBtn.svelte';
</script>

<div class="account">
	<AccountBtn id="login"><a href="/login">Σύνδεση</a></AccountBtn>
	<AccountBtn id="createAccount"><a href="/signUp">Δημιουργία λογαριασμού</a></AccountBtn>
</div>

<style lang="scss">
	@use '../../../static/sass/abstracts' as *;
	.account {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		height: 100%;
		background-color: $color-black;
	}
</style>
