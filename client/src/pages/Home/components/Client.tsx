import { useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import img1 from "@/assets/images/img-8.jpg";
import img2 from "@/assets/images/img-9.jpg";
import img3 from "@/assets/images/img-10.jpg";
import img4 from "@/assets/images/img-11.jpg";
import img5 from "@/assets/images/img-12.jpg";

const client = [
	{
		id: 1,
		desc:
			'"Brook presents your services with flexible, convenient and pose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se."',
		img: img1,
		clientName: "Butler",
	},
	{
		id: 2,
		desc:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consectetur, magnam eos optio laboriosam quaerat voluptates! Inventore molestiae voluptatibus repudiandae quos blanditiis, soluta ratione? Totam quos voluptas a laborum exercitationem",
		img: img2,
		clientName: "Chris Harris",
	},
	{
		id: 3,
		desc:
			'"Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se."',
		img: img3,
		clientName: "Martin",
	},
	{
		id: 4,
		desc:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consectetur, magnam eos optio laboriosam quaerat voluptates! Inventore molestiae voluptatibus repudiandae quos blanditiis, soluta ratione? Totam quos voluptas a laborum exercitationem",
		img: img4,
		clientName: "Thomas",
	},
	{
		id: 5,
		desc:
			'"Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se."',
		img: img5,
		clientName: "David",
	},
];

export default function Client() {
	const [currSlide, setCurrSlide] = useState(0);

	const prevSlide = () => {
		const prev = currSlide === 0;
		const index = prev ? client.length - 1 : currSlide - 1;
		setCurrSlide(index);
	};

	const nextSlide = () => {
		const next = currSlide === client.length - 1;
		const index = next ? 0 : currSlide + 1;
		setCurrSlide(index);
	};
	setTimeout(() => {
		console.log("Delayed for 1 second.");
	}, 1000);

	const dotClick = (i: number) => {
		setCurrSlide(i);
	};

	return (
		<section className=" w-full min-h-screen px-20">
			<div className=" flex justify-between items-center gap-20 max-container padding-hero-y relative max-lg:flex-col padding-x">
				<div className=" relative flex-1 flex justify-center items-center max-lg:w-full">
					<img src={client[currSlide].img} alt="clientImg" className="object-cover object-center h-[700px] w-[95%] max-lg:w-full transition-transform ease-in-out duration-200 max-sm:h-[400px]" />
					<RiDoubleQuotesL className=" absolute top-[50%] translate-y-[-50%] -right-[75px] text-[#f04e3c] text-[180px] max-lg:hidden" />
				</div>

				<div className=" flex-1">
					<p className=" text-[#f04e3c] relative before:absolute before:w-20 before:h-1 before:bg-[#f04e3c] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%]">CLIENT FEEDBACK</p>
					<div className=" my-7 text-5xl leading-[60px] font-semibold text-black max-sm:text-3xl">
						<h1>WHAT OUR CLIENT THINK</h1>
						<h1>ABOUT OUR GYM</h1>
					</div>

					<div className=" flex relative">
						<p className="font text-lg text-slate-500 mb-8 w-[85%] max-sm:w-full">{client[currSlide].desc}</p>
					</div>

					<h1 className=" text-xl font-semibold flex gap-4 items-center">
						{client[currSlide].clientName}
						<span className=" text-slate-500 text-base">Gym Trainer</span>
					</h1>

					<div className=" flex text-4xl mt-20 justify-start max-lg:mt-5">
						{client.map((_, index) => (
							<div key={index} onClick={() => dotClick(index)} className={` cursor-pointer ${currSlide === index ? " text-[#f04e3c]" : "text-4xl"}`}>
								<BsDot />
							</div>
						))}
					</div>
				</div>

				<div
					className=" absolute left-4 max-lg:top-[25%] h-10 w-10 flex justify-center items-center max-lg:left-1 max-lg:-translate-y-[-50%] text-4xl max-lg:text-2xl text-[#f04e3c] cursor-pointer rounded-full hover:bg-black hover:text-white duration-300 max-sm:top-[460px] max-sm:left-32 max-sm:rounded-full"
					onClick={prevSlide}>
					<IoIosArrowBack />
				</div>

				<div
					className=" absolute right-4 max-lg:top-[25%] h-10 w-10 flex justify-center items-center max-lg:right-1 max-lg:-translate-y-[-50%] text-4xl max-lg:text-2xl text-[#f04e3c] cursor-pointer rounded-full hover:bg-black hover:text-white duration-300 max-sm:top-[460px] max-sm:right-32"
					onClick={nextSlide}>
					<IoIosArrowForward />
				</div>
			</div>
		</section>
	);
}
