interface WithTypenameInterface {
	__typename: string;
}

interface CompanyInterface extends WithTypenameInterface {
	id: string;
	name: string;
}

interface JobCategoryInterface extends WithTypenameInterface {
	id: string;
	name: string;
}

interface CountryObjectInterface extends WithTypenameInterface {
	country: string;
	id: string;
	rusTrans: string;
}

interface LocationInterface extends WithTypenameInterface {
	countryObject: CountryObjectInterface;
}

export interface JobItemInterface extends WithTypenameInterface {
	id: string;
	company: CompanyInterface;
	jobCategories: JobCategoryInterface[];
	location: LocationInterface;
	openUntil: string;
	title: string;
	isUN: boolean;
}

export interface GetJobListInterface extends WithTypenameInterface {
	jobs: JobItemInterface[];
}

export interface GetJobListResponseInterface extends WithTypenameInterface {
	getJobList: GetJobListInterface;
}
