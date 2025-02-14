import Star2Img from "../../assets/images/v1/star2.png";
import QuestionImg from "../../assets/images/icon/question.svg";
const faqData = {
	faq1: [
		{
			id: crypto.randomUUID(),
			title: "How does your company handle data privacy and security issues?",
			text: "We comply with global privacy standards such as GDPR and ISO 27001. All data is encrypted both in transit and at rest, and access is restricted to authorized personnel only. We also offer on-premise solutions if required by the client.",
		},
		{
			id: crypto.randomUUID(),
			title: "How long does it take to implement AI technology in our company?",
			text: "Implementation time depends on the project’s complexity. For standard solutions like chatbots, the process typically takes 4-6 weeks. However, for custom-developed solutions, implementation can take 3-6 months.",
		},
	],
	faq2: [
		{
			id: crypto.randomUUID(),
			title: "How does your company ensure AI stays relevant to evolving needs?",
			text: "We provide continuous maintenance services, including model updates, retraining with new data, and technical support, ensuring the technology remains relevant and optimized.",
		},
		{
			id: crypto.randomUUID(),
			title: "Are your AI solutions flexible enough to integrate with our existing systems?",
			text: "Yes, our solutions are designed for seamless integration using standard APIs. Our team will also assist in ensuring that our AI systems work well with your existing infrastructure, including making necessary adjustments.",
		},
	],
};
function TwoColumnFaq() {
	return (
		<div className="section aximo-section-padding">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						These FAQs help
						<span className="aximo-title-animation">
							clients learn about us
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="Star" />
							</span>
						</span>
					</h2>
				</div>
				<div className="row">
					<div className="col-lg-6">
						<div className="aximo-accordion-normal-wrap responsive-margin">
							{faqData.faq1.map((faq) => (
								<div key={faq.id} className="aximo-accordion-normal-item">
									<div className="aximo-accordion-normal-icon">
										<img src={QuestionImg} alt="QuestionImg" />
									</div>
									<div className="aximo-accordion-normal-data">
										<h3>{faq.title}</h3>
										<p>{faq.text}</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="col-lg-6">
						<div className="aximo-accordion-normal-wrap">
							{faqData.faq2.map((faq) => (
								<div key={faq.id} className="aximo-accordion-normal-item">
									<div className="aximo-accordion-normal-icon">
										<img src={QuestionImg} alt="QuestionImg" />
									</div>
									<div className="aximo-accordion-normal-data">
										<h3>{faq.title}</h3>
										<p>{faq.text}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TwoColumnFaq;
