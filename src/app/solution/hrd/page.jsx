'use client'

import SolutionContainer from "@/components/SolutionContainer"

const useCase = [

    {
        icon: 'FileText',
        title: 'CV Information Extraction',
        description: 'Automatically extracts key details like work experience, education, and skills from CVs, streamlining the screening process'
    },
    {
        icon: 'CheckCircle',
        title: 'Qualification Matching',
        description: 'Matches candidate qualifications with job requirements, ensuring only relevant candidates advance in the recruitment process'

    },
    {
        icon: 'Star',
        title: 'Automated Candidate Scoring',
        description: 'Assigns scores or ranks to candidates based on their fit for the role, enabling data-driven selection decisions'
    },
    {
        icon: 'Scale',
        title: 'Bias Detection',
        description: 'Reduces human bias by objectively evaluating CVs, promoting fairness and diversity in recruitment'
    },
    {
        icon: 'Briefcase',
        title: 'ob Description Matching',
        description: 'Intelligently matches candidates to job openings based on skills, experience, and preferences, optimizing placement accuracy'
    },
    {
        icon: 'BarChart2',
        title: 'ATS Integration & Reporting',
        description: 'Seamlessly integrates with Applicant Tracking Systems and provides detailed reports or dashboards for efficient recruitment management'
    }

]

export default function HRDPage() {
    return (
        <SolutionContainer useCases={useCase} header={"Cognir AI HRD Solutions"} description={"Streamline recruitment with AI-powered CV screening, job matching, and candidate ranking, enhancing efficiency, objectivity, and quality in talent acquisition."} useCaseHeader={"Cognir AI for HRD Use Cases"} useCaseDesc={"The Cognir Suite leverages advanced Natural Language Processing (NLP) to automate and optimize recruitment processes, ensuring the best candidates are selected efficiently and fairly."} solutionImage={"https://unstract.com/wp-content/uploads/2024/11/guide-to-ai-llm-resume-parsing-with-unstract-api.png"} />
    )
}