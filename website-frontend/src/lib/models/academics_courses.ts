import {
	array,
	integer,
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
import { AcademicsProgramsCourses } from './junctions/academics_programs_courses';
import { AcademicsCoursesPrerequisites } from './junctions/academics_courses_prerequisites';
import { AcademicsCoursesCorequisites } from './junctions/academics_courses_corequisites';

export const AcademicsCourse = partial(
	object({
		course_code: string('academic course has no code'),
		course_title: string('academic course has no title'),
		course_units: pipe(number('academic course has invalid units'), integer()),
		course_description: nullable(string('academic course has no description')),
		course_syllabus: nullable(string('academic course has no syllabus')),
		course_prerequisites: nullable(
			union([array(number()), lazy(() => AcademicsCoursesPrerequisites)])
		),
		course_corequisites: nullable(
			union([array(number()), lazy(() => AcademicsCoursesCorequisites)])
		),
		related_academics_programs: nullable(
			union([array(number()), lazy(() => AcademicsProgramsCourses)])
		)
	})
);

export const AcademicsCourses = array(AcademicsCourse);

export type AcademicsCourse = InferOutput<typeof AcademicsCourse>;
export type AcademicsCourses = InferOutput<typeof AcademicsCourses>;
