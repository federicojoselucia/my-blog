import { GitHubIcon, LinkedinIcon, MailIcon } from "../icons/social";

const Footer = () => (
	<footer className="bg-footer w-full h-14">
		<div className="lg:container lg:mx-auto flex justify-between items-center h-full">
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

export default Footer;