import { GitHubIcon, LinkedinIcon, MailIcon } from "@components/icons/social";

export const Footer = () => (
	<footer className="bg-footer w-full h-14">
		<div className="lg:max-w-screen-md 2xl:max-w-screen-xl mx-auto flex justify-between items-center h-full px-4">
			<CopyrightNotice/>
			<ContactIcons/>
		</div>
	</footer>
);

const CopyrightNotice = () => (
	<span className="text-text-primary text-sm">Federico Jose Lucia © 2023</span>
);

const ContactIcons = () => {
	const iconClassName = "h-5 w-5 text-text-primary";

	return (
		<div className="flex items-center space-x-4">
			<a href={"mailto:federicojoselucia@gmail.com"}>
				<MailIcon className={iconClassName}/>
			</a>
			<a href={"https://github.com/federicojoselucia"}>
				<GitHubIcon className={iconClassName}/>
			</a>
			<a href={"https://www.linkedin.com/in/federicojoselucia"}>
				<LinkedinIcon className={iconClassName}/>
			</a>
		</div>
	);
};