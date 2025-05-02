'use client'

import SolutionContainer from "@/components/SolutionContainer"


const useCase = [
    {
        icon: 'ThumbsUp',
        title: 'Sentiment Classification',
        description: 'Categorizes customer reviews or comments as positive, negative, or neutral, offering clear insights into customer perceptions'
    },
    {
        icon: 'Tag',
        title: 'Topic Analysis',
        description: 'Identifies key product or service aspects frequently mentioned in customer feedback, highlighting areas for improvement.'
    },
    {
        icon: 'Smile',
        title: 'Emotion Detection',
        description: 'Analyzes emotions like happiness, disappointment, or frustration in customer feedback to better understand their experiences'
    },
    {
        icon: 'BarChart2',
        title: 'Automated Reporting',
        description: 'Generates detailed reports or dashboards, simplifying data analysis and supporting strategic decision-making'
    },
    {
        icon: 'ShoppingCart',
        title: 'E-commerce Platform Integration',
        description: 'Seamlessly connects with platforms like Shopify, Tokopedia, or Shopee for real-time feedback analysis'
    },
    {
        icon: 'Zap',
        title: 'Operational Efficiency',
        description: 'Eliminates time-intensive manual analysis, boosting team productivity and enabling faster responses to customer needs'
    }
]


export default function EComercePage() {
    return (
        <SolutionContainer useCases={useCase} solutionImage={"/img/sentymen-screenshot.png"} header={"Cognir AI Sentiment Analysis"} description={"Unlock customer insights with AI-driven sentiment analysis, leveraging NLP to enhance satisfaction, loyalty, and business growth in e-commerce."} useCaseHeader={"Cognir AI for Sentiment Analysis Use Cases"} useCaseDesc={"The Cognir Suite utilizes advanced Natural Language Processing (NLP) to analyze customer feedback, providing actionable insights to optimize products, services, and customer experiences."} />
    )
}