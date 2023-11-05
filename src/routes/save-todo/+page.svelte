<script>
	let userInfo;

	async function loadUsers(type) {
		//
		const res = await fetch('https://dummyjson.com/users');
        const data = await res.json();
        userInfo =data;
	}
	function selectChange(e) {
		loadUsers(e.target.value);
	}
</script>

<div>
	<select name="gender" id="gn" on:change={selectChange}>
		<option value="">Select User List</option>
		<option value="Engineering">Engineering</option>
		<option value="e">Employees</option>
		<option value="f">Founder</option>
	</select>

    {#if userInfo}
    {#each userInfo.users as user, i}
        <p>{user.lastName}, {user.firstName }</p>
    {/each}
    {/if}
	<!-- <input type="text" name="userid" id="userid" />

	<input type="email" name="email" id="sd" placeholder="Enter email" />
	<input type="submit" value="Submit" /> -->
</div>
