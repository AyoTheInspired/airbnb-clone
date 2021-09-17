import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

function Map() {
	const [viewPort, setViewPort] = useState({
		width: "100%",
		height: "100%",
		latitude: 37.7577,
		longitude: -122.4376,
		zoom: 11,
	});

	return (
		<ReactMapGL
			mapStyle="mapbox://styles/theinspired/cktnnsdsn0grt17llmbjc89fi"
			mapboxApiAccessToken={process.env.mapbox_key}
			{...viewPort}
			onViewStateChange={(nextViewport) =>
				setViewPort(nextViewport)
			}></ReactMapGL>
	);
}

export default Map;
