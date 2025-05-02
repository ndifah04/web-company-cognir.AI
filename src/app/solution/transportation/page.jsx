'use client'

import SolutionContainer from "@/components/SolutionContainer";


const useCase = [
    {
        icon: 'Car',
        title: 'Pothole Detection',
        description: 'Automated detection of potholes using AI vision.',
    },
    {
        icon: 'Camera',
        title: 'Automatic Number Plate Recognition',
        description: 'Real-time identification of vehicles through ANPR technology.',
    },
    {
        icon: 'Eye',
        title: 'Eye Gaze Detection',
        description: 'Monitoring driver attentiveness and stress levels via eye tracking.',
    },
    {
        icon: 'AlertTriangle',
        title: 'Abandoned Luggage Detection',
        description: 'Automatic identification of suspicious or dangerous objects in public areas.',
    },
    {
        icon: 'HardHat',
        title: 'PPE Detection',
        description: 'Automated monitoring of personal protective equipment compliance.',
    },
    {
        icon: 'Smile',
        title: 'Facial Emotion Analysis',
        description: 'Analyzing facial attributes such as gender, age, and emotion.',
    },
];

// 

export default function TransportationPage() {
    return (
        <SolutionContainer useCases={useCase} header="Cognir AI Applications for Transportation" description="Digitize and automate operations with visual artificial intelligence to improve efficiency, safety, and service levels in the transportation sector." useCaseHeader="Cognir AI for Transportation Use Cases" useCaseDesc="Cognir Suite enables the creation and scaling of real-time computer vision and deep learning systems to enhance operational efficiency, security, and quality.
" solutionImage="https://miro.medium.com/v2/resize:fit:896/1*4atR_wq8Wk4J4Z7JejfkCQ.png" />
    )
}
