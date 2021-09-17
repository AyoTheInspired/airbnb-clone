import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
	size: 4,
	color: "#FE595E",
	className: "z-50",
	delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;

// pk.eyJ1IjoidGhlaW5zcGlyZWQiLCJhIjoiY2t0bm0wbDFqMDQyYzJvbDR4YnV5ZnA1eiJ9
// 	.IZe0o30IZ2Jd24xoaTOqKg;
