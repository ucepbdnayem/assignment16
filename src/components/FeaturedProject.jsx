import moment from "moment";

async function getData(){
	const res=await fetch(process.env.BASE_URL+"api/FeaturedProject");
	if(!res.ok){
		throw new Error("Featured Project Calling Fail");
	}
	return res.json();
}

const FeaturedProject = async () => {
	const data = await getData();
	return (
		<div className="w-full py-5">
		<div className="w-10/12 mx-auto mb-10">
			<div className="text-green-500 text-xl font-medium font-['Poppins'] uppercase pt-5">Featured Project</div>
			<div className="w-full text-black text-3xl font-semibold font-['Poppins'] py-3">We provide the Perfect Solution to your business growth</div>
			<div className="grid md:grid-cols-4 grid-cols-1 gap-4 py-3">
				
				{data.map((item,i)=>{
					return (
						<div key={i} className="card card-compact text-black shadow-xl">
							<figure><img src={item['image']} alt="Shoes" /></figure>
							<div className="card-body">
								<p>App Design - {moment(item['created_at']).format('MMMM DD, YYYY')}</p>
								<h2 className="card-title font-bold">{item['title']}</h2>
							</div>
						</div>
					)
				})}
					
			</div>
		</div>
		</div>
	);
};

export default FeaturedProject;