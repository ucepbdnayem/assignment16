async function getStatList() {
	const res = await fetch(process.env.BASE_URL+"api/StatList")
	if (!res.ok){
		throw new Error("Stat list data call fail")
	}
	return res.json();
}

const StatList = async () => {
	const data = await getStatList();
	return (
		<div className="w-full mx-auto h-auto bg-white justify-center items-center inline-flex">
			<div className="md:flex grow justify-center items-start gap-[45px] mb-3">

				<div className="md:w-72 w-full flex-col justify-center items-center inline-flex">
					<div className="w-72 h-[290px] relative">
						<div className="w-72 h-[290px] left-0 top-0 absolute bg-white rounded-[20px] shadow" />
						<div className="w-[135px] h-[196px] left-[77px] top-[47px] absolute">
							<div className="w-[100px] h-[100px] left-[18px] top-0 absolute bg-emerald-100 rounded-[10px]" />
							<div className="w-10 h-10 pl-[5px] pr-[5.17px] pt-[6.67px] pb-[5.83px] left-[48px] top-[30px] absolute justify-center items-center inline-flex">
								<img className="mx-auto h-8" src="images/Scan.svg" alt=""/>
							</div>
							<div className="left-[30px] top-[123px] absolute text-center text-black text-3xl font-semibold font-['Poppins']">{data['followers']}</div>
							<div className="w-full top-[172px] absolute text-center text-black text-base font-medium font-['Poppins']">Followers</div>
						</div>
					</div>
				</div>
				
				<div className="md:w-72 w-full h-[290px] flex-col justify-center items-center inline-flex">
					<div className="w-72 h-[290px] relative">
						<div className="w-72 h-[290px] left-0 top-0 absolute bg-white rounded-[20px] shadow" />
						<div className="w-[135px] h-[196px] left-[77px] top-[47px] absolute">
							<div className="w-[100px] h-[100px] left-[18px] top-0 absolute bg-emerald-100 rounded-[10px]" />
							<div className="w-10 h-10 pl-[5px] pr-[5.17px] pt-[6.67px] pb-[5.83px] left-[48px] top-[30px] absolute justify-center items-center inline-flex">
								<img className="mx-auto h-8" src="images/Group.svg" alt=""/>
							</div>
							<div className="left-[30px] top-[123px] absolute text-center text-black text-3xl font-semibold font-['Poppins']">{data['solved']}</div>
							<div className="w-full top-[172px] absolute text-center text-black text-base font-medium font-['Poppins']">Solved</div>
						</div>
					</div>
				</div>
				
				<div className="md:w-72 w-full h-[290px] flex-col justify-center items-center inline-flex">
					<div className="w-72 h-[290px] relative">
						<div className="w-72 h-[290px] left-0 top-0 absolute bg-white rounded-[20px] shadow" />
						<div className="w-[135px] h-[196px] left-[77px] top-[47px] absolute">
							<div className="w-[100px] h-[100px] left-[18px] top-0 absolute bg-emerald-100 rounded-[10px]" />
							<div className="w-10 h-10 pl-[5px] pr-[5.17px] pt-[6.67px] pb-[5.83px] left-[48px] top-[30px] absolute justify-center items-center inline-flex">
								<img className="mx-auto h-8" src="images/Like.svg" alt=""/>
							</div>
							<div className="left-[30px] top-[123px] absolute text-center text-black text-3xl font-semibold font-['Poppins']">{data['customers']}</div>
							<div className="w-full top-[172px] absolute text-center text-black text-base font-medium font-['Poppins']">Customers</div>
						</div>
					</div>
				</div>
				
				<div className="md:w-72 w-full h-[290px] flex-col justify-center items-center inline-flex">
					<div className="w-72 h-[290px] relative">
						<div className="w-72 h-[290px] left-0 top-0 absolute bg-white rounded-[20px] shadow" />
						<div className="w-[135px] h-[196px] left-[77px] top-[47px] absolute">
							<div className="w-[100px] h-[100px] left-[18px] top-0 absolute bg-emerald-100 rounded-[10px]" />
							<div className="w-10 h-10 pl-[5px] pr-[5.17px] pt-[6.67px] pb-[5.83px] left-[48px] top-[30px] absolute justify-center items-center inline-flex">
								<img className="mx-auto h-8" src="images/Happy.svg" alt=""/>
							</div>
							<div className="left-[30px] top-[123px] absolute text-center text-black text-3xl font-semibold font-['Poppins']">{data['projects']}</div>
							<div className="w-full top-[172px] absolute text-center text-black text-base font-medium font-['Poppins']">Projects</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
};

export default StatList;