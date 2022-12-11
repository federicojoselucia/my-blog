import { ThemeToggler } from "@components/theme-toggler";
import Link from "next/link";
import React from "react";

export const Navbar = () => (
	<header className="bg-navbar sticky w-full top-0 h-14">
		<div className="lg:max-w-screen-md 2xl:max-w-screen-xl mx-auto flex items-center h-full px-4">
			<Nav>
				<NavItem href={"/"} text={"Home"}/>
				<NavItem href={"/posts"} text={"Posts"}/>
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
		<ul className="flex flex-row space-x-6">
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
			<a className="text-text-primary font-medium">{text}</a>
		</Link>
	</li>
);