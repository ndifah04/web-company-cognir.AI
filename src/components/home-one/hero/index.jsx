import HeroContent from "./HeroContent";
import GLBViewer from "../../gltf-viewer";
function HeroSection() {
	return (
		<div className="aximo-hero-section dark-bg position-relative">
			<GLBViewer />
			<div className="aximo-hero-tagline-hero">
				<div className="row">
					<div className="col-lg-8">
						<HeroContent />
					</div>
					<div className="col-lg-4">

					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
