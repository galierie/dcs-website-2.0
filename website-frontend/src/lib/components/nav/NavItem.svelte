<script lang="ts">
    import { slide } from "svelte/transition";
    export let href: string, to: string, position: string = '';

    let show = false;
</script>

<li 
    class="relative"
    on:pointerenter={() => {show = true}} 
    on:pointerleave={() => {show = false}}
>
    <a {href}>{to}</a>
    {#if show}
        <ul
            class="absolute w-40 {position}" 
            transition:slide
        >
            <slot />
        </ul>
    {/if}
</li>