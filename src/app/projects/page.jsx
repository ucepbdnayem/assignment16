import Subscribe from "@/components/Subscribe";
import FeaturedProject from "@/components/FeaturedProject";
import Link from "next/link";


const Page =  () => {
	
	return (
		<div>
			<div className="mb-2 w-11/12 relative">
				<Link href="/allprojects" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded absolute top-0 right-0">
					All Projects
				</Link>
			</div>
			<FeaturedProject></FeaturedProject>
			<Subscribe></Subscribe>
		</div>
	);
};

export default Page;