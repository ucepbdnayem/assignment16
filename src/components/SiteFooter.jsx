import React from 'react';

const SiteFooter = () => {
	return (
		<footer className="footer p-10 bg-base-200 text-base-content">
			<aside>
				<p><b className="text-3xl font-bold"> WEB LOGO</b><br/>Providing reliable tech since 1992</p>
			</aside>
			<nav>
				<header className="footer-title">Services</header>
				<a className="link link-hover">Branding</a>
				<a className="link link-hover">Design</a>
				<a className="link link-hover">Marketing</a>
				<a className="link link-hover">Advertisement</a>
			</nav>
			<nav>
				<header className="footer-title">Company</header>
				<a className="link link-hover">About us</a>
				<a className="link link-hover">Contact</a>
				<a className="link link-hover">Jobs</a>
				<a className="link link-hover">Press kit</a>
			</nav>
		</footer>
	);
};

export default SiteFooter;