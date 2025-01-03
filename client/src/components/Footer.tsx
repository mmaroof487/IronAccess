import logo from "@/assets/images/logo-2.png";

const footer = [
	{
		title: "COMPANY",
		footerLinks: [{ link: "About Us" }, { link: "Company" }, { link: "Press & Blog" }, { link: "Privacy Policy" }],
	},
	{
		title: "OPEN HOUR",
		footerLinks: [{ link: "Monday 11am-7pm" }, { link: "Tuesday-Friday 11am-8pm" }, { link: "Saturday 10am-6pm" }, { link: "Sunday 11am-6pm" }],
	},
	{
		title: "RESOURCES",
		footerLinks: [{ link: "Home Insurance" }, { link: "Travel Insurance" }, { link: "Car Insurance" }, { link: "Business Insurance" }, { link: "Heal Insurance" }],
	},
];

import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { TbArrowBigUpFilled } from "react-icons/tb";

interface Props {
	nav: boolean;
}

export default function Footer({ nav }: Props) {
	const date = new Date().getFullYear();

	return (
		<section className=" text-white min-h-[65vh] w-full bg-footer-pattern bg-center bg-cover bg-no-repeat p-20">
			{nav ? (
				<a href="#home">
					<div className="bg-[red] w-14 h-14 fixed right-10 bottom-10 text-2xl flex justify-center items-center rounded-full cursor-pointer hover:bg-black hover:border-2 hover:border-[red]">
						<TbArrowBigUpFilled />
					</div>
				</a>
			) : (
				"none"
			)}
			<div className="max-container grid grid-cols-4 gap-10 padding-hero-y px-20 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:px-10 max-sm:grid-cols-1">
				{footer.map((val) => (
					<div key={val.title}>
						<h1 className=" text-2xl font-medium mb-8">{val.title}</h1>
						{val.footerLinks.map((li) => (
							<ul key={li.link} className=" mb-3">
								<li className=" text-xl tracking-wide text-gray-400 font font-thin hover:translate-x-1 duration-300">
									<a href="#home">{li.link}</a>
								</li>
							</ul>
						))}
					</div>
				))}

				<div>
					<a href="#home" className=" font-semibold text-5xl flex items-center gap-1 text-white">
						<img src={logo} alt="logo" width={60} height={60} />
						Iron Access
					</a>

					<p className=" mt-5 font text-start">GThe trade war currently ensuing between te US anfd several natxions around thdhe globe, most fiercely with.</p>

					<div className=" flex items-center gap-6 cursor-pointer text-2xl mt-[35px] text-slate-200 max-sm:text-xl">
						<BiLogoFacebook className=" hover:-scale-x-110 duration-300" />
						<BsTwitter className=" hover:-scale-x-110 duration-300" />
						<FaGlobe className=" hover:-scale-x-110 duration-300" />
						<BsInstagram className=" hover:-scale-x-110 duration-300" />
					</div>
				</div>
			</div>

			<div className=" border-t border-[#3e3e3e] max-container pt-10 pb-16 text-[#c4c4c4] text-center px-4">
				<p className=" font">Copyright &copy;{date} All rights reserved</p>
			</div>
		</section>
	);
}
