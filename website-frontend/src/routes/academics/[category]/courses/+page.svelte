<script>
	/** @type {import('./$types').PageData} */
	import Banner from '$lib/components/banners/Banner.svelte';
	import DataTable from '$lib/components/table/DataTable.svelte';
	import Breadcrumb from '$lib/components/breadcrumbs/PageBreadcrumb.svelte';

	export let data;
	$: ({ academics_category, academics_courses } = data);
</script>

<body>
	{#if academics_category}
		<Banner title="Academics" />

		<div class="container mx-auto my-8 mb-5">
			<Breadcrumb />
		</div>

		<br />
		<h1 class="mb-8 px-4 text-3xl font-bold text-gray-900 md:px-16">
			{academics_category.name} courses offered by the department
		</h1>
		<DataTable data={academics_courses} />
	{:else}
		<p>Page not found</p>
	{/if}
</body>
