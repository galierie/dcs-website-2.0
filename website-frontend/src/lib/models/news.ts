import { cleanHtml } from '$lib/models-helpers';
import {
	array,
	isoTimestamp,
	lazy,
	nullable,
	number,
	object,
	partial,
	pipe,
	required,
	string,
	union,
	type InferOutput
} from 'valibot';
import { DirectusUser } from './directus_users';
import { NewsRelated } from './junctions/news_related';

export const NewsItem = partial(
	object({
		id: string('news item has no id'),
		slug: string('news item has no slug'),
		user_created: union([
			string('news item has no user created'),
			lazy(() => required(DirectusUser, ['first_name', 'last_name']))
		]),
		user_updated: nullable(
			union([
				string('news item has no user updated'),
				lazy(() => required(DirectusUser, ['first_name', 'last_name']))
			])
		),
		date_created: pipe(string('news item has no date created'), isoTimestamp()),
		date_updated: nullable(pipe(string('news item has no date updated'), isoTimestamp())),
		title: string('news item has no title'),
		summary: nullable(string('news item has no summary')),
		flexible_content: pipe(string('news item has invalid content'), cleanHtml),
		background_image: nullable(string('news item has no background image')),
		news_tags: nullable(union([array(number()), lazy(() => NewsRelated)]))
	})
);

export const News = array(NewsItem);

export type NewsItem = InferOutput<typeof NewsItem>;
export type News = InferOutput<typeof News>;
