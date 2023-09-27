import React from 'react';

const Subscribe = () => {
	return (
		<div className="w-full h-[499px] md:px-[422px] pt-[91px] pb-[137px] bg-white justify-center items-center inline-flex">
			<div className="self-stretch flex-col justify-center items-center gap-10 inline-flex">
				<div className="flex-col justify-start items-center gap-[5px] flex">
					<div className="flex-col justify-start items-center gap-[22px] flex">
						<div className="text-green-500 text-xl font-medium font-['Poppins'] uppercase">SUBSCRIBE</div>
						<div className="w-full text-center text-black text-3xl font-semibold font-['Poppins'] capitalize">Subscribe to get the latest news about us</div>
					</div>
					<div className="text-center text-zinc-500 text-base font-medium font-['Avenir'] capitalize">Please drop your email below to get daily update about what we do</div>
				</div>
				<div className="w-full h-[62px] flex-col justify-start items-end flex">
					
					<form className="md:w-full w-11/12 mx-auto">
						<label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
						<div className="relative">
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
								</svg>
							</div>
							<input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-600 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter Your Email Address" required/>
							<button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-orange-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Subscribe</button>
						</div>
					</form>
				
				</div>
			</div>
		</div>
	);
};

export default Subscribe;