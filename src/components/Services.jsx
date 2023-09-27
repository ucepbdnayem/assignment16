import Image from "next/image";

async function getServices() {
	const  res = await fetch(process.env.BASE_URL+"api/AllService")
	if (!res.ok){
		throw new Error("Service list call fail");
	}
	return res.json();
}

const Services = async () => {
	const data = await getServices();
	return (
		<div className="w-full h-auto bg-white">
			<div className="p-5 flex-col justify-start items-start gap-10 inline-flex">
				<div className="p-5 flex-col justify-start items-start gap-[15px] flex">
					<div className="text-green-500 text-xl font-medium font-['Poppins'] uppercase">Our All Services</div>
					<div className="w-full text-black text-3xl font-semibold font-['Poppins']">We Provide BestWeb design services</div>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-4 w-11/12 mx-auto">
				{data.map((item,i)=>{
					return (
						<div key={i} className="w-full md:w-[604px] md:h-[694px] relative">
							<div className="w-full md:w-[604px] md:h-[694px] left-0 top-0 absolute bg-white rounded-[20px] shadow" />
							<div className="left-[30px] top-[40px] absolute text-black text-[26px] font-semibold font-['Poppins'] uppercase">{item['title']}</div>
							<div className="w-full md:w-[527px] left-[30px] top-[99px] absolute text-neutral-400 text-base font-normal font-['Poppins'] capitalize">{item['des']}</div>
							<img className="w-full object-fill md:w-[358px] md:h-[164px] md:left-[34px] md:top-[201px] absolute rounded-[10px] shadow" src={item['image1']} alt={item['tag']} />
							<img className="w-full object-fill md:w-[143px] md:h-[164px] md:left-[425px] md:top-[201px] absolute rounded-[10px] shadow" src={item['image2']} alt={item['tag']} />
							<img className="w-full object-fill md:w-[248px] md:h-[263px] md:left-[320px] md:top-[385px] absolute rounded-[10px] shadow" src={item['image3']} alt={item['tag']} />
							<img className="w-full object-fill md:w-[257px] md:h-[263px] md:left-[30px] md:top-[385px] absolute rounded-[10px] shadow" src={item['image4']} alt={item['tag']} />
						</div>
					)
				})}
			</div>
			
		</div>
	);
};

export default Services;