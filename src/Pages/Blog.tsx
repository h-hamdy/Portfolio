import { BlogCard } from "../components/BlogCard";

export function Blog () {
	return (
		<>
			<div className="text-gray-200 text-2xl lg:p-10 p-6" >
				<div className="flex flex-col">
					<div className="font-semibold">Blog</div>
					<div className="border border-[1px] rounded-lg border-[#4e77e7] w-[50px]"></div>
				</div>
			</div>
			<div className="flex flex-wrap h-full w-full justify-center lg:justify-start lg:gap-[50px] gap-[20px] overflow-y-auto overflow-hidden lg:pb-48 pb-28 lg:px-10 px-6">
				<BlogCard link="https://medium.com/@houssamhamdy223/the-power-of-merkle-trees-revolutionizing-the-decentralized-web-1d54b284ac2a" img="https://raw.githubusercontent.com/h-hamdy/Portfolio/main/src/assets/tree.webp" time="Writed: Feb 1, 2022" title="The Power of Merkle Trees" desc="Revolutionizing the Decentralized Web"/>
				<BlogCard link="https://medium.com/@houssamhamdy223/completing-42-network-common-core-a-glimpse-into-my-journey-through-the-challenges-05880c0c686b" img="https://raw.githubusercontent.com/h-hamdy/Portfolio/main/src/assets/intra.webp" time="Writed: Feb 1, 2022" title="Completing 1337 (42 Network) Common Core"/>
			</div>
		</>
	)
}