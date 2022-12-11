interface Props {
  children: React.ReactNode
}
export const Content = ({ children }: Props) => (
	<main className="grow bg-background">
		<div className="lg:max-w-screen-md 2xl:max-w-screen-xl mx-auto h-full px-4 my-6">
			{children}
		</div>
	</main>
)