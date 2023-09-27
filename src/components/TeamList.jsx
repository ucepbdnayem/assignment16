import moment from "moment/moment";

async function getTeam() {
	const res = await fetch(process.env.BASE_URL+"api/TeamList")
	if (!res.ok) {
		throw new Error("Team list calling error");
	}
	return res.json();
}

const TeamList = async () => {
	const data = await getTeam();
	return (
		<div className="w-full h-auto md:pl-[105px] md:pr-[45px] pt-[67px] pb-[84px] bg-white flex-col justify-start md:items-start gap-[66px] md:inline-flex">
			<div className="self-stretch flex-col justify-start items-start gap-10 md:inline-flex">
				<div className="flex-col ml-3 justify-start items-start gap-[15px] md:flex">
					<div className="text-green-500 text-xl font-medium font-['Poppins'] uppercase">Our Team Member</div>
					<div className="w-full text-black text-3xl font-semibold font-['Poppins']">Check our awesome team members</div>
				</div>
			</div>
			<div className="justify-start items-start gap-5 md:inline-flex">
				{data.map((item,i)=>{
					return(
						<div key={i} className="card card-compact text-black shadow-xl py-5">
							<figure className="w-full"><img src={item['image']} alt="Shoes" className="w-full" /></figure>
							<div className="card-body">
								<h2 className="card-title font-bold">{item['name']}</h2>
								<p>{item['bio']}</p>
							</div>
						</div>
					)
				})
				}
			</div>
		</div>
	);
};

export default TeamList;