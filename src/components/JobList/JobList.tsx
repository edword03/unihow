import { FC, memo } from 'react';

import { JobItemInterface } from '@/shared/types/job.types';

import { JobItem } from '../JobItem/JobItem';

import styles from './JobList.module.css';

type JobListProps = {
	jobList: JobItemInterface[];
};

export const JobList: FC<JobListProps> = memo(({ jobList }) => {
	return (
		<div className={styles.list}>
			{jobList.map(job => (
				<JobItem key={job.id} {...job} />
			))}
		</div>
	);
});
