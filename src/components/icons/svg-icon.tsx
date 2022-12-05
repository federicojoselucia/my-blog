interface SvgIconProps {
	className?: string
  children: React.ReactNode
};

export const SvgIcon = ({ className, children }: SvgIconProps) => (
	<svg 
		xmlns="http://www.w3.org/2000/svg" 
		className={className}
		viewBox="0 0 24 24" 
		stroke-width="1.5" 
		stroke="currentColor" 
		fill="none" 
		stroke-linecap="round" 
		stroke-linejoin="round"
		role="img">
   		{children}
	</svg>
);