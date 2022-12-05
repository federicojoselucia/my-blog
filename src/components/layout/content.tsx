interface Props {
  children: React.ReactNode
}
const Content = ({ children }: Props) => (
	<main className="grow bg-background">
		<div className="lg:container lg:mx-auto h-full">
			{children}
		</div>
	</main>
)

export default Content;