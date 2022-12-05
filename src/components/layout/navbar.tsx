import Link from "next/link";
import React from "react";
import ThemeToggler from "./theme-toggler";

const Navbar = () => (
	<header className="bg-navbar sticky w-full top-0 h-14">
		<div className="lg:container lg:mx-auto flex items-center h-full space-x-4">
			<Nav>
				<NavItem href={"/"} text={"Home"}/>
				<NavItem href={"/posts"} text={"Posts"}/>
				<NavItem href={"/about"} text={"About"}/>
			</Nav>
			<ThemeToggler/>
		</div>
	</header>
);

interface NavProps {
  children: React.ReactNode
};

const Nav = ({ children }: NavProps) => (
	<nav className="grow items-center">
		<ul className="flex flex-row space-x-4">
			{children}
		</ul>
	</nav>
);

interface NavItemProps{
	href: string;
	text: string;
};

const NavItem = ({href, text}: NavItemProps) => (
	<li >
		<Link href={href}>
			<a className="text-text-primary">{text}</a>
		</Link>
	</li>
);

export default Navbar;