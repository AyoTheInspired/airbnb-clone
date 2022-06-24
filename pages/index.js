import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCards from "../components/MediumCards";
import SmallCard from "../components/SmallCard";

// tEMOgP7YcxstvMfRJI8s9c9piAM7eYwmCpxwtIMDy15A9EBD

export default function Home({ exploreData, cardsData }) {
	return (
		<div className="">
			<Head>
				<title>AirBnb</title>
				<link rel="icon" href="/favicon.ico" />
				<script
					id="ze-snippet"
					src="https://static.zdassets.com/ekr/snippet.js?key=eb46e8fa-d883-4b01-a8a3-b0fdd59e9592"></script>
			</Head>

			<Header />
			<Banner />

			<main className="max-w-7xl mx-auto px-8 sm:px-16">
				<section className="pt-6">
					<h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{exploreData?.map(({ img, distance, location }) => (
							<SmallCard
								key={img}
								img={img}
								distance={distance}
								location={location}
							/>
						))}
					</div>
				</section>

				<section>
					<h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
					<div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
						{cardsData?.map(({ img, title }) => (
							<MediumCards key={img} img={img} title={title} />
						))}
					</div>
				</section>

				<LargeCard
					img="https://links.papareact.com/4cj"
					title="The Greatest Outdoors"
					description="Wishlists curated by AirBnb."
					buttonText="Get Inspired"
				/>

				<Footer />
			</main>
		</div>
	);
}

export async function getStaticProps() {
	const exploreData = await fetch("https://links.papareact.com/pyp").then(
		(res) => res.json()
	);

	const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
		res.json()
	);

	return {
		props: {
			exploreData,
			cardsData,
		},
	};
}
