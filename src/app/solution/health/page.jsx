'use client'

import SolutionContainer from "@/components/SolutionContainer"


const useCase = [
    {
        icon: 'MessageSquare',
        title: 'Interactive Conversations',
        description: 'Engage with an AI assistant powered by NLP to ask health-related questions and receive clear, relevant answers tailored to your needs.'

    },
    {
        icon: 'Bell',
        title: 'Health Reminders',
        description: 'Stay on track with automated reminders for medication schedules, routine check-ups, or other health-related activities.'
    },
    {
        icon: 'Activity',
        title: 'Symptom Analysis',
        description: 'Report symptoms and receive preliminary advice, helping you make informed decisions about your health.'
    },
    {
        icon: 'Watch',
        title: 'Wearable Integration',
        description: 'Sync with wearable devices like smartwatches to monitor vital health data in real-time for a holistic view of your wellness.'
    },
    {
        icon: 'BookOpen',
        title: 'Trusted Health Resources',
        description: 'Access accurate and reliable health information quickly, ensuring you make well-informed health choices.'
    },
    {
        icon: 'Clock',
        title: 'Time-Saving Efficiency',
        description: 'Streamline health management tasks, saving time spent on scheduling or researching health information.'
    }
]



export default function HealthPage() {
    return (
        <SolutionContainer useCases={useCase} header="Cognir AI Health Assistant" description="Empower your daily health management with an AI-driven virtual assistant, designed to enhance treatment adherence, monitor symptoms, and deliver trusted health insights." useCaseHeader="Cognir AI for Health Management Use Cases" useCaseDesc="The Cognir Suite leverages advanced Natural Language Processing (NLP) and AI to create personalized health management solutions, improving accessibility, compliance, and overall well-being." solutionImage="https://www.inbenta.com/wp-content/uploads/2023/06/Healthcare-chatbot-hero-1024x780-1.png" />
    )
}