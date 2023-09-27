import Image from 'next/image'
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Worklist from "@/components/Worklist";
import StatList from "@/components/StatList";
import FeaturedProject from "@/components/FeaturedProject";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
      <div>
          <Hero></Hero>
          <Brands></Brands>
          <Worklist></Worklist>
          <StatList></StatList>
          <FeaturedProject></FeaturedProject>
          <Subscribe></Subscribe>
      </div>
  )
}
