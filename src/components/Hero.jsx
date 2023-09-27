import Link from "next/link";

export async function getHeroData(){
	const res=await fetch(process.env.BASE_URL+"api/HeroList");
	if(!res.ok){
		throw new Error("HeroList Calling Fail");
	}
	return res.json();
}
const Hero = async () => {
	const heroData = await getHeroData();
	return (
		<div>
			<section className='relative'>
				<div className='relative pt-12 lg:pt-20 pb-20 z-10'>
					<div className='container mx-auto px-4'>
						<div className='flex flex-wrap -mx-4'>
							<div className='w-full lg:w-1/2 px-4 mb-12 lg:mb-0 flex items-center'>
								<div className='w-full text-center lg:text-left'>
									<div className='max-w mx-auto lg:mx-0'>
										<h2 className='mb-3 text-black text-4xl lg:text-5xl font-bold font-heading'>
                                            <span>
                                                 {heroData['title']}
                                            </span>
										</h2>
									</div>
									<div className='max-w mx-auto lg:mx-0'>
										<p className='mb-6 text-black font-bold leading-loose'>
											{heroData['description']}
										</p>
										<div>
											<Link
												className='inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-3 px-6 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition duration-200'
												href=''>Get Started</Link>
										</div>
									</div>
								</div>
							</div>
							<div className='w-full lg:w-1/2 px-4'>
								<div className='flex flex-wrap lg:mb-4'>
									<img className='w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-xl' src={heroData['image2']} alt=''/>
									<img className='w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-xl' src={heroData['image1']} alt=''/>
								</div>
								<div className='flex flex-wrap lg:mb-4 lg:mr-6'>
									<img className='w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-xl' src={heroData['image4']} alt=''/>
									<img className='w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-xl' src={heroData['image3']} alt=''/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Hero;