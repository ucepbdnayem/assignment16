async function getWorkList() {
	const res = await fetch(process.env.BASE_URL+"api/WorkList")
	if (!res.ok){
		throw new Error("Work list data call fail")
	}
	return res.json();
}

const Worklist = async () => {
	const data = await getWorkList();
	return (
		<div className="w-full h-auto px-3 md:px-[105px] pt-[67px] pb-16 bg-white justify-center items-center inline-flex">
			<div className="md:flex-col justify-start items-start gap-10 md:inline-flex">
				<div className="md:flex-col justify-start items-start md:gap-[15px] md:flex">
					<div className="text-green-500 text-xl font-medium font-['Poppins'] uppercase">Work List</div>
					<div className="w-full text-black text-3xl font-semibold font-['Poppins']">We provide the Perfect Solution to your business growth</div>
				</div>
				<div className="justify-start items-start gap-5 md:inline-flex">
					{ data.map((item,i)=>{
						return(
							<div key={i} className="group w-full md:w-[380px] md:px-[30px] md:py-[50px] bg-white rounded-[30px] flex-col justify-start items-start gap-[43px] inline-flex hover:drop-shadow-lg shadow-gray-600">
								<div className="flex-col justify-start items-start md:gap-[15px] flex">
									<div className="p-[30px] bg-emerald-100 rounded-[20px] justify-center items-center gap-2.5 inline-flex">
										<img className="w-full md:w-[33.33px] h-[33.33px]" src={"images/"+i+".svg"} />
									</div>
									<div className="md:flex-col justify-start items-start gap-[15px] md:flex">
										<div className="text-black text-2xl font-semibold font-['Poppins']">{ item['title'] }</div>
										<div className="w-full md:w-[299px] text-black text-lg font-normal font-['Avenir']">{ item['des'] }</div>
									</div>
								</div>
								<div className="px-5 py-[15px] rounded-[10px] justify-start items-center gap-2.5 inline-flex group-hover:bg-orange-600">
									<div className="text-black text-lg font-normal font-['Avenir'] group-hover:text-white">Learn More</div>
									<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 group-hover:text-white" viewBox="0 0 25 25"><path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/></svg>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	);
};

export default Worklist;