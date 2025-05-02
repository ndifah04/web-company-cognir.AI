'use client'

import SolutionContainer from "@/components/SolutionContainer"


const useCase = [
    {
        icon: 'FileText',
        title: 'Text Analysis',
        description: 'Scans news content to identify patterns or red flags that indicate potential misinformation, ensuring thorough content evaluation',
    },
    {
        icon: 'ShieldCheck',
        title: 'Source Verification',
        description: 'Checks the credibility of news sources against trusted databases, ensuring only reliable information is shared'
    },
    {
        icon: 'AlertTriangle',
        title: 'Emotion & Sensationalism Detection',
        description: 'Identifies emotionally charged or sensational language commonly used in fake news to manipulate audiences'
    },
    {
        icon: 'Bell',
        title: 'Automatic Alerts',
        description: 'Issues real-time warnings when potentially false news is detected, enabling swift action to prevent misinformation spread'
    },
    {
        icon: 'Globe',
        title: 'Media Platform Integration',
        description: 'Seamlessly integrates with social media or news platforms for real-time monitoring and filtering of content'
    },
    {
        icon: 'Zap',
        title: 'Automated Efficiency',
        description: 'Replaces time-consuming manual detection with fast, accurate automation, streamlining the fight against fake news'
    }
]



export default function SecurityPage() {
    return (
        <SolutionContainer useCases={useCase} solutionImage="https://www.keele.ac.uk/about/news/2025/january/artificial-intelligence/fake-news-detector-960.jpg" header="Cognir AI Fake News Detection" description={"Combat the spread of misinformation with AI-powered fake news detection, leveraging advanced NLP to ensure accurate, credible information in real-time."} useCaseHeader={"Cognir AI for Fake News Detection Use Cases"} useCaseDesc={"The Cognir Suite harnesses Natural Language Processing (NLP) to analyze and verify news content, empowering platforms and organizations to maintain information integrity and public trust."} />
    )
}