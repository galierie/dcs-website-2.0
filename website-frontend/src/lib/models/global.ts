import { array, intersect, nullable, object, partial, string, type InferOutput } from 'valibot';

const Metadata = partial(
	object({
		title: string('metadata has no title'),
		description: string('metadata has no description'),
		favicon: string('metadata has no favicon')
	})
);

const Header = partial(
	object({
		primary_logo: string('header has no primary logo'),
		secondary_logo: string('header has no secondary logo'),
		secondary_logo_link: nullable(string('header has no secondary logo link'))
	})
);

const Footer = partial(
	object({
		address: array(
			object({
				address_line: string('footer has no address line')
			})
		),
		contact_number: string('footer has no contact number'),
		contact_email: string('footer has no contact email'),
		quick_links: array(
			object({
				name: string('footer (quick link) has no name'),
				link: string('footer (quick link) has no url')
			})
		),
		facebook_link: string('footer has no facebook link'),
		x_link: string('footer has no x link')
	})
);

export const Global = intersect([Metadata, Header, Footer]);
export type Global = InferOutput<typeof Global>;
