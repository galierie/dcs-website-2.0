import {
	array,
	isoDate,
	lazy,
	nullable,
	number,
	object,
	partial,
	pipe,
	string,
	union,
	type InferOutput
} from 'valibot';
import { Laboratory } from './laboratories';
import { PublicationsRelated } from './junctions/publications_related';

const Author = partial(
	object({
		first_name: string('publication author has no first name'),
		last_name: string('publication author has no last name'),
		link: union([
			object({
				key: string('publication author link has no key')
			}),
			string('publication author link is missing')
		])
	})
);

const AccessLink = partial(
	object({
		url: string('publication access link has no url'),
		display: nullable(string())
	})
);

export const Publication = partial(
	object({
		id: string('publication has no id'),
		title: string('publication has no title'),
		publish_date: nullable(pipe(string('publication has no publish date string'), isoDate())),
		authors: array(Author),
		abstract: string('publication has no abstract'),
		laboratory: union([string('publication has no laboratory'), lazy(() => Laboratory)]),
		hero_image: string('publication has no hero image'),
		publication_tags: nullable(union([array(number('publication has no tags')), lazy(() => PublicationsRelated)])),
		access_links: nullable(array(AccessLink))
	})
);

export const Publications = array(Publication);

export type Author = InferOutput<typeof Author>;
export type AccessLink = InferOutput<typeof AccessLink>;
export type Publication = InferOutput<typeof Publication>;
export type Publications = InferOutput<typeof Publications>;
