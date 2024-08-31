export const questions = [
    {
        question: 'How active are you?',
        answers: [
            { text: 'Very Active', trait: 'active', score: 4 },
            { text: 'Moderately', trait: 'active', score: 3 },
            { text: 'Not Very', trait: 'active', score: 2 },
            { text: 'Sedentary', trait: 'active', score: 1 }
        ]
    },
    {
        question: 'How social are you?',
        answers: [
            { text: 'Very Social', trait: 'social', score: 5 },
            { text: 'Moderately', trait: 'social', score: 4 },
            { text: 'Not Very', trait: 'social', score: 3 },
            { text: 'Not Social', trait: 'social', score: 2 }
        ]
    },
    {
        question: 'How much time for pet care?',
        answers: [
            { text: 'A lot', trait: 'lowMaintenance', score: 1 },
            { text: 'Some', trait: 'lowMaintenance', score: 3 },
            { text: 'Minimal', trait: 'lowMaintenance', score: 5 }
        ]
    },
    {
        question: 'Why do you want a pet?',
        answers: [
            { text: 'Low-key company', trait: 'social', score: 3 },
            { text: 'Tiny companion', trait: 'lowMaintenance', score: 5 },
            { text: 'Fun roommate', trait: 'cleaning', score: 4 },
            { text: 'Outdoor buddy', trait: 'active', score: 4 },
            { text: 'Chirpy friend', trait: 'social', score: 4 }
        ]
    },
    {
        question: 'How much time for your pet?',
        answers: [
            { text: '1-2 hours/day', trait: 'lowMaintenance', score: 3 },
            { text: 'Not much', trait: 'lowMaintenance', score: 4 },
            { text: 'Very little', trait: 'lowMaintenance', score: 5 },
            { text: 'Plenty', trait: 'lowMaintenance', score: 2 },
            { text: 'Tons', trait: 'lowMaintenance', score: 1 }
        ]
    },
    {
        question: 'What’s your home like?',
        answers: [
            { text: 'Limited space', trait: 'homeSpace', score: 2 },
            { text: 'Perches available', trait: 'homeSpace', score: 3 },
            { text: 'Spacious + yard', trait: 'homeSpace', score: 4 },
            { text: 'Cozy with windows', trait: 'homeSpace', score: 3 },
            { text: 'No roaming', trait: 'homeSpace', score: 2 }
        ]
    },
    {
        question: 'How much training are you willing to do?',
        answers: [
            { text: 'Basic + more', trait: 'training', score: 4 },
            { text: 'As much as needed', trait: 'training', score: 5 },
            { text: 'Not planning', trait: 'training', score: 3 },
            { text: 'No training', trait: 'training', score: 1 },
            { text: 'Just a little', trait: 'training', score: 2 }
        ]
    },
    {
        question: 'What’s your pet budget?',
        answers: [
            { text: 'Generous', trait: 'budget', score: 5 },
            { text: 'Low', trait: 'budget', score: 2 },
            { text: 'Moderate', trait: 'budget', score: 3 },
            { text: 'Healthy', trait: 'budget', score: 4 },
            { text: 'Basic', trait: 'budget', score: 2 }
        ]
    },
    {
        question: 'How much cleaning are you willing to do?',
        answers: [
            { text: 'Habitat only', trait: 'cleaning', score: 3 },
            { text: 'Muddy paws OK', trait: 'cleaning', score: 4 },
            { text: 'Occasional mess', trait: 'cleaning', score: 3 },
            { text: 'Neat freak', trait: 'cleaning', score: 5 },
            { text: 'Cage-contained', trait: 'cleaning', score: 4 }
        ]
    }
];
