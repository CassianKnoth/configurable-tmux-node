const parsePath = (
	path: string,
	pattern: RegExp,
	replacement: string,
): string => {
	const parsedPath = path.replace(pattern, replacement);
	return parsedPath;
};

export const formatCompoundPath = (
	basePath: string,
	subPath: string,
): string => {
	const leadingSlashRegex = /^\/+/;
	const trailingSlashRegex = /\/+$/;

	const parsedBasePath = parsePath(basePath, trailingSlashRegex, '');
	const parsedSubPath = parsePath(subPath, leadingSlashRegex, '');

	const compoundPath = `${parsedBasePath}/${parsedSubPath}`;

	return compoundPath;
};
