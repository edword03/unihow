import { FC, PropsWithChildren } from 'react';

import styles from './Title.module.css';

type TitleTagsType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TitleProps = {
	tag: TitleTagsType;
	className?: string;
};

export const Title: FC<PropsWithChildren<TitleProps>> = ({ tag = 'h3', children, className }) => {
	const Tag = tag;

	return <Tag className={`${styles.title} ${styles[tag]} ${className || ''}`}>{children}</Tag>;
};
