type PageHeadingProps = {
	children: React.ReactNode;
};

const PageHeading = ({ children }: PageHeadingProps) => {
	return <h1 className='text-3xl font-medium mb-8 mt-8'>{children}</h1>;
};

export default PageHeading;
