import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";
function GoogleMap({ location }) {
	return (
		<div className="section">
			<div className="container">
				<div className="aximo-map-wrap">
					<div id="map">
						<GoogleMapReact
							bootstrapURLKeys={{ key: "" }}
							defaultCenter={location.center}
							defaultZoom={location.zoom}
						>
							<LocationPin lat={-5.181694} lng={119.452444} />
						</GoogleMapReact>
					</div>
				</div>
			</div>
		</div>

	);
}

export default GoogleMap;
