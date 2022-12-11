interface Props {
	className?: string
  children: React.ReactNode
};

export const SvgIcon = ({ className, children }: Props) => (
	<svg 
		xmlns="http://www.w3.org/2000/svg" 
		className={className}
		viewBox="0 0 24 24"
		fill="none" 
		stroke="currentColor" 
		strokeWidth="1.5" 
		strokeLinecap="round" 
		strokeLinejoin="round"
		role="img">
   		{children}
	</svg>
);