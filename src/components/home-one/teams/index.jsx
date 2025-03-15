import Star2Img from "../../../assets/images/v1/star2.png";
import FadeInStagger from "../../animation/FadeInStagger";
import TeamCard from "./TeamCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";


const swiperSettings = {
	loop: true,
	spaceBetween: 20,
	grabCursor: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	modules: [Navigation],
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 1.5,
		},
		900: {
			slidesPerView: 2.5,
		},
		1200: {
			slidesPerView: 2.5,
		},
		1400: {
			slidesPerView: 3.5,
		},
	},
};

function Teams({ teams }) {
	return (
		<div className="section aximo-section-padding2">
			<div className="container">

				<div className="row aximo_screenfix_right">
					<div className="swiper aximo-iconbox-slider">
						<div className="aximo-section-title">
							<h2>
								Meet our team
								<span className="aximo-title-animation">
									<span className="aximo-title-icon">
										<img src={Star2Img} alt="Star2Img" />
									</span>
								</span>
							</h2>
						</div>
						<Swiper {...swiperSettings}>
							{teams.map((team, index) => (
								<SwiperSlide key={team.id}>
									<FadeInStagger key={team.id} index={index} className="col-xl-12 col-md-6">
										<TeamCard team={team} />
									</FadeInStagger>
								</SwiperSlide>
							))}
						</Swiper>
						<div className="aximo-iconbox-slider-arrows">
							<div className="swiper-button-prev"></div>
							<div className="swiper-button-next"></div>
						</div>

					</div>
				</div>

			</div>
		</div>
	);
}

export default Teams;
