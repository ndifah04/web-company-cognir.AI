'use client'


import SolutionContainer from "@/components/SolutionContainer"

const useCase = [
    {
        icon: 'Mic',
        title: 'Real-Time Transcription',
        description: 'Records and transcribes meeting conversations into text instantly, capturing every detail accurately'
    },
    {
        icon: 'FileText',
        title: 'Automatic Summarization',
        description: 'Condenses discussions into concise summaries, highlighting key points, decisions, and action items'
    },
    {
        icon: 'User',
        title: 'Speaker Identification',
        description: 'Distinguishes and labels speakers in the transcription, ensuring clarity on who said what'
    },
    {
        icon: 'Star',
        title: 'Key Point Highlighting',
        description: 'Identifies and emphasizes critical elements like decisions, deadlines, and assigned tasks for easy reference'
    },
    {
        icon: 'Link',
        title: 'Collaboration Tool Integration',
        description: 'Seamlessly connects with platforms like Microsoft Teams, Zoom, or Google Meet for effortless meeting management'
    },
    {
        icon: 'Download',
        title: 'Exportable Minutes',
        description: 'Saves minutes in editable formats like Word or PDF, or emails them directly to participants for convenience'
    }
]

export default function MeetingPage() {
    return (

        <>

            <SolutionContainer useCases={useCase} header={"Cognir AI Automatic Meeting Minutes"} description={"Transform meetings with AI-powered automatic minutes, leveraging NLP to transcribe, summarize, and organize discussions for enhanced productivity and clarity."} useCaseHeader={"Cognir AI for Meeting Minutes Use Cases"} solutionImage={"https://cdn.prod.website-files.com/6262a9705cabe0833039d5c8/652e7e0b042b5b749f5d55d6_bwsGDTFI20AbiWA0v_222HBB-cEGJ-SEPP1seh6V52qK-S3RUXBhr62EnlUXy7tMHc5j9_Qdr3E9X576BBNpSf_ufPKCBDeFh0QQ6iBGSuInUhSJdd-JcUZI1QMVzrpOUvHOjRC38GS9.jpeg"} />
        </>
    )
}