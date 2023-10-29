<script lang="ts">
	import { enhance } from '$app/forms';
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>
<form method="POST" action="/login" use:enhance>
    <input type="text" name="user"/>
    <input type="password" name="password" id=""/>
    <button>Login</button>
</form>