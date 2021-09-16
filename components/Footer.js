function Footer() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
			<div className="space-y-4 text-xs text-gray-800 mr-auto sm:mx-auto">
				<h5 className="font-bold">ABOUT</h5>
				<p>How Airbnb Works</p>
				<p>NewsRoom</p>
				<p>Investors</p>
				<p>Airbnb Plus</p>
				<p>Airbnb Luxe</p>
			</div>

			<div className="space-y-4 text-xs text-gray-800 mr-auto sm:mx-auto">
				<h5 className="font-bold">COMMUNITY</h5>
				<p>Accessibility</p>
				<p>This is not a real site</p>
				<p>It's just an awesome clone</p>
				<p>Referrals Accepted</p>
				<p>AyoTheInspired</p>
			</div>

			<div className="space-y-4 text-xs text-gray-800 mr-auto sm:mx-auto">
				<h5 className="font-bold">SUPPORT</h5>
				<p>Help Centre</p>
				<p>Trust & Safety</p>
				<p>Send a Gift</p>
				<p>Easter Eggs</p>
				<p>For the Win</p>
			</div>
		</div>
	);
}

export default Footer;
