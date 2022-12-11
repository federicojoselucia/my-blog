interface Props {
	text: string
};

export const Chip = ({ text }: Props) => (
	<div className="bg-text-accent text-sm rounded-full px-3 inline-block">
		{text}
	</div>
);