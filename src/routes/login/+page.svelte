<script lang="ts">
	import { SubmitFunction } from './../../../.svelte-kit/types/src/routes/todos/$types.d.ts';
	import { applyAction, enhance } from '$app/forms';
    import type { ActionData} from './$types';

    export let form: ActionData;

    const login: SubmitFunction = () => {
        return async ({result}) => {
            if(result.type === 'redirect') {
                await applyAction(result);
            }
        }
    }
</script>
<pre>{JSON.stringify(form, null, 2)}</pre>
<form method="POST" action="/login" use:enhance={login}>
    <input type="text" name="username" value={form?.data?.username ?? ''}/>
    {#if form?.errors?.username}
        <p class="error">This field is required</p>
    {/if}
    <input type="password" name="password" value={form?.data?.password ?? ''}/>
    {#if form?.errors?.password}
        <p class="error">This field is required</p>
    {/if}
    <button>Login</button>
</form>

<style>
    .error {
        color: tomato;
    }
</style>