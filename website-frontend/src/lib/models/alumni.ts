import { array, object, string, nullable, type InferOutput, partial, number } from 'valibot';

export const Accolade = partial(
	object({
		name: string()
	})
);

export const Alum = partial(
	object({
		id: number('alumni has no id'),
		first_name: string('alumni has no first name'),
		last_name: string('alumni has no last name'),
		title: nullable(string('alumni has no title')),
		description: nullable(string('alumni has no description')),
		batch: string('alumni has no batch'),
		profile_image: nullable(string('alumni has no profile image')),
		background_image: nullable(string('alumni has no background image')),
		accolade: nullable(array(Accolade))
	})
);

export const Alumni = array(Alum);

export type Accolade = InferOutput<typeof Accolade>;
export type Alum = InferOutput<typeof Alum>;
export type Alumnis = InferOutput<typeof Alumni>;
