import { FC, memo } from 'react';

import { JobItemInterface } from '@/shared/types/job.types';
import { Title } from '@/shared/ui/Title/Title';
import { Tag } from '@/shared/ui/Tag/Tag';
import { MapMarker } from '@/shared/ui/MapMarker/MapMarker';

import styles from './JobItem.module.css';

type JobItemProps = Omit<JobItemInterface, '__typename'>;

export const JobItem: FC<JobItemProps> = memo(({ jobCategories, company, location, title, openUntil, isUN }) => {
	const utilDate = new Date(openUntil).toLocaleDateString();

	return (
		<div className={styles.jobCard}>
			<div className={styles.titleBlock}>
				<Title tag="h4" className={styles.cardTitle}>
					{isUN && <Tag className={styles.unTag}>ООН</Tag>}
					<span>{title}</span>
				</Title>
			</div>
			<p className={styles.companyTitle}>{company.name}</p>
			<div className={styles.locationBlock}>
				<div>
					<MapMarker />
				</div>
				<span className={styles.locationTitle}>{location.countryObject.rusTrans}</span>
			</div>
			<div className={styles.jobCategories}>
				{jobCategories.map(category => (
					<Tag className={styles.jobCategoriesItem} color={'rgb(255, 93, 93)'} key={category.id}>
						{category.name}
					</Tag>
				))}
			</div>
			<div className={styles.dateBlock}>
				<span>Открыт до:</span>
				<span className={styles.utilDate}>{utilDate}</span>
			</div>
		</div>
	);
});
