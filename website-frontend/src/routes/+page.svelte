<script lang="ts">
	/** @type {import('./$types').PageData} */
	import * as Carousel from '$lib/@shadcn-svelte/ui/carousel';
	import { Button } from '$lib/@shadcn-svelte/ui/button';
	import LandingHero from '$lib/components/carousels/LandingHero.svelte';
	import FeaturedEventCard from '$lib/components/cards/FeaturedEventCard.svelte';
	import NewsCard from '$lib/components/cards/NewsCard.svelte';
	import { ArrowRight } from 'lucide-svelte';

	export let data;

	$: ({ news, events } = data);
</script>

<LandingHero {news} />

<div class="container mx-auto my-8 flex flex-col justify-center gap-y-5">
	<div class="flex justify-between">
		<h2 class="text-xl font-bold md:text-2xl">Recent News</h2>
		<Button href="#more-news" variant="outline" class="flex gap-x-2 rounded-full">
			<p>View all</p>
			<ArrowRight class="size-4" />
		</Button>
	</div>
	<Carousel.Root opts={{ align: 'start', dragFree: true }}>
		<Carousel.Content>
			{#each news as news_item}
				<Carousel.Item class="-mr-10 basis-full pr-10 md:-mr-5 md:basis-1/4 md:pr-5">
					<NewsCard {news_item} />
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Next />
	</Carousel.Root>
	<div class="flex justify-between">
		<h2 class="text-xl font-bold md:text-2xl">Recent Events</h2>
		<Button href="/events" variant="outline" class="flex gap-x-2 rounded-full">
			<p>View all</p>
			<ArrowRight class="size-4" />
		</Button>
	</div>
	<Carousel.Root opts={{ align: 'start', dragFree: true }}>
		<Carousel.Content>
			{#each events as event}
				<Carousel.Item class="-mr-10 basis-full pr-10 md:-mr-5 md:basis-1/4 md:pr-5">
					<FeaturedEventCard {event} />
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Next />
	</Carousel.Root>
</div>

<div id="more-news" class="bg-background-dark py-24 text-primary-foreground">
	<div class="container flex h-full flex-col justify-center gap-y-8">
		<h2 class="text-center text-xl font-bold md:text-2xl">More News from UPD DCS</h2>
		<div class="flex flex-col gap-5 md:grid md:grid-cols-4">
			{#each news as news_item}
				<NewsCard onDark {news_item} />
			{/each}
		</div>
	</div>
</div>
