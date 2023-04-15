import { FC, PropsWithChildren } from 'react';
import styles from './Tag.module.css';

type TagProps = {
	color?: string;
	className?: string;
};

export const Tag: FC<PropsWithChildren<TagProps>> = ({ color = '#3369F3', children, className }) => {
	return (
		<span style={{ background: color }} className={`${styles.tag} ${className || ''}`}>
			{children}
		</span>
	);
};
