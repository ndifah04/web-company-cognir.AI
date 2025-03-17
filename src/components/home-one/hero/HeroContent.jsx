import { Link } from "react-router-dom";
import ShapeImg from "../../../assets/images/v1/shape1.png";
import StarImg from "../../../assets/images/v1/star.png";
import GeminiLogo from "../../../assets/images/v1/gemini-logo.png";
import DeepSeekLogo from "../../../assets/images/v1/deepseek-logo.png";
import OpenAILogo from "../../../assets/images/v1/openai-logo.png"
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";
function HeroContent() {
	return (
		<div className="aximo-hero-content">
			<FadeInStaggerTwo>
				<FadeInStaggerTwoChildren>
					<h1>
						<span className="aximo-title-animation">
							AI for Better
							<img src={StarImg} alt="StarImg" />
						</span>
						Future
					</h1>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
					<p>
						{`Empowering Innovation, Transforming Industries, and Advancing the Boundaries of Humanity's Potential for a Smarter and More Sustainable Future.`}
					</p>
				</FadeInStaggerTwoChildren>
				{/* <FadeInStaggerTwoChildren>
					<div className="aximo-hero-user-wrap">
						<div className="aximo-hero-user-thumb">
							<div className="aximo-hero-user-thumb-item">
								<img src={OpenAILogo} alt="open ai" />
							</div>
							<div className="aximo-hero-user-thumb-item">
								<img src={DeepSeekLogo} alt="deepseek" />
							</div>
							<div className="aximo-hero-user-thumb-item">
								<img src={GeminiLogo} alt="gemini" />
							</div>
						</div>
						<div className="aximo-hero-user-data">
							<p>AI Support, AI Training,and Optimation</p>
						</div>
					</div>
				</FadeInStaggerTwoChildren> */}
				<FadeInStaggerTwoChildren>
					<Link className="aximo-call-btn" to="/contact-us">
						Book a consultation <i className="icon-call"></i>
					</Link>
					{/* <div className="aximo-hero-shape">
						<img src={ShapeImg} alt="ShapeImg" />
					</div> */}
				</FadeInStaggerTwoChildren>
			</FadeInStaggerTwo>
		</div>
	);
}

export default HeroContent;
