<script lang="ts">
	import type { SubmitFunction } from './../../../.svelte-kit/types/src/routes/todos/$types.d.ts';
    import { enhance } from '$app/forms';
    import type { ActionData, PageData } from './$types';

    export let data: PageData;
    export let form: ActionData;

    let loading = false;

    const addTodo: SubmitFunction = () => {
        loading = true;
        return async ({update}) => {
            await update();
        }
    }
</script>

<ul>
    {#each data.todos as todo}
        <li>
            <span>{todo.text}</span>
            <form method="POST" action="?/removeTodo" use:enhance>
                <input type="hidden" name="id" value={todo.id}>
            <button type="submit" class="delete">X</button>
        </form>
        </li>
    {/each}
</ul>

<form method="POST" action="?/addTodo" use:enhance={addTodo}>
    <input type="text" name="todo" id="todo"/>
    {#if form?.missing}
        <p class="error">This field is required</p>
    {/if}
    {#if form?.success}
        <p>Todo added successfully</p>
    {/if}
    <button type="submit" aria-busy={loading} class:secondary={loading} >{#if !loading}+ Add Todo{/if}</button>
    <button formaction="?/clearTodos" class="secondary" type="submit">Clear</button>
</form>



<style>
    ul {
        padding:0;
    }

    li {
        display: flex ;
        justify-content: space-between;
        align-items: center;
    }

    span {
        text-transform: capitalize;
    }

    .delete {
        margin: 0;
        background: none;
        border: none  ;
        color: red;
    }

    .error {
        color: red;
    }
</style>