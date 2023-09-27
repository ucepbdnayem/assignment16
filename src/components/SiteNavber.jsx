"use client"
import Link from "next/link";

const SiteNavber = () => {
	return (
		<div className="navbar p-10">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
					</label>
					<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
						<li><Link href="/" className="text-black font-bold">Home</Link></li>
						<li><Link href="/team" className="text-black font-bold">Team</Link></li>
						<li><Link href="/services" className="text-black font-bold">Service</Link></li>
						<li><Link href="/projects" className="text-black font-bold">Projects</Link></li>
						<li><Link href="/testimonials" className="text-black font-bold">Testimonials</Link></li>
						<li><a className="btn bg-green-100 border text-black border-green-600 hover:bg-green-600 hover:border-green-600 hover:text-white">Login</a></li>
						<li><a className="btn bg-green-100 border text-black border-green-600 hover:bg-green-600 hover:border-green-600 hover:text-white ml-3">Register</a></li>
					</ul>
				</div>
				<a href="/" className="text-black text-xl font-bold">Design<span className="text-red-700 uppercase">AGENCY</span></a>
			</div>
			<div className="navbar-end hidden lg:flex">
				<ul className="menu menu-horizontal px-1 items-end">
					<li><Link href="/" className="text-black font-bold">Home</Link></li>
					<li><Link href="/team" className="text-black font-bold">Team</Link></li>
					<li><Link href="/services" className="text-black font-bold">Service</Link></li>
					<li><Link href="/projects" className="text-black font-bold">Projects</Link></li>
					<li><Link href="/testimonials" className="text-black font-bold">Testimonials</Link></li>
				</ul>
				<a className="btn bg-green-100 border text-black border-green-600 hover:bg-green-600 hover:border-green-600 hover:text-white">Login</a>
				<a className="btn bg-green-100 border text-black border-green-600 hover:bg-green-600 hover:border-green-600 hover:text-white ml-3">Register</a>
			</div>
		</div>
	);
};

export default SiteNavber;