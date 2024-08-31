export const questions = [
    {
        question: 'How active are you?',
        answers: [
            { text: 'Very Active', trait: 'active', score: 4 },
            { text: 'Moderately Active', trait: 'active', score: 3 },
            { text: 'Not Very Active', trait: 'active', score: 2 },
            { text: 'Sedentary', trait: 'active', score: 1 }
        ]
    },
    {
        question: 'How social are you?',
        answers: [
            { text: 'Very Social', trait: 'social', score: 5 },
            { text: 'Moderately Social', trait: 'social', score: 4 },
            { text: 'Not Very Social', trait: 'social', score: 3 },
            { text: 'Not Social', trait: 'social', score: 2 }
        ]
    },
    {
        question: 'How much time can you commit to pet care?',
        answers: [
            { text: 'A lot of time', trait: 'lowMaintenance', score: 1 },
            { text: 'Some time', trait: 'lowMaintenance', score: 3 },
            { text: 'Minimal time', trait: 'lowMaintenance', score: 5 }
        ]
    },
    {
        question: 'Why do you want a pet?',
        answers: [
            { text: 'I’d like to come home to some low-key company after a long day.', trait: 'social', score: 3 },
            { text: 'I’m longing to care for a pint-sized companion.', trait: 'lowMaintenance', score: 5 },
            { text: 'I’m searching for the perfect roommate: fun, clean, and a good listener.', trait: 'cleaning', score: 4 },
            { text: 'I’m looking for a BFF to share outdoor adventures and movie nights.', trait: 'active', score: 4 },
            { text: 'I’d like a pet just like me: chirpy and quirky.', trait: 'social', score: 4 }
        ]
    },
    {
        question: 'How much time are you able to devote to your new friend?',
        answers: [
            { text: 'Sometimes my life gets busy, but I can find an extra hour or two each day.', trait: 'lowMaintenance', score: 3 },
            { text: 'Not a lot. My calendar is often packed full.', trait: 'lowMaintenance', score: 4 },
            { text: 'I have very little time available for daily care or interaction.', trait: 'lowMaintenance', score: 5 },
            { text: 'Plenty. I’m a homebody and I know a great pet sitter to back me up.', trait: 'lowMaintenance', score: 2 },
            { text: 'Tons! I have a flexible schedule and plan to hire help as needed.', trait: 'lowMaintenance', score: 1 }
        ]
    },
    {
        question: 'What’s your home like?',
        answers: [
            { text: 'It’s perfect for me, but I’m not so sure I want a pet roaming around…', trait: 'homeSpace', score: 2 },
            { text: 'Pretty fly, with plenty of perches.', trait: 'homeSpace', score: 3 },
            { text: 'I have plenty of space in my home, plus a backyard.', trait: 'homeSpace', score: 4 },
            { text: 'Cozy, with an abundance of sunny windowsills.', trait: 'homeSpace', score: 3 },
            { text: 'It’s perfect for me, and I’m positive I don’t want a pet roaming around.', trait: 'homeSpace', score: 2 }
        ]
    },
    {
        question: 'How much training are you willing to do?',
        answers: [
            { text: 'A good amount. I’m prepared for the basics, and anything else that might benefit my pet.', trait: 'training', score: 4 },
            { text: 'As much as it takes. I plan to work with a trainer and am looking forward to learning along with my pet.', trait: 'training', score: 5 },
            { text: 'I’m not against training, but I wasn’t planning on it.', trait: 'training', score: 3 },
            { text: 'I’d prefer a pet that doesn’t require any training.', trait: 'training', score: 1 },
            { text: 'A little bit. Tricks sound especially fun!', trait: 'training', score: 2 }
        ]
    },
    {
        question: 'What does your pet budget look like?',
        answers: [
            { text: 'Generous. In addition to budgeting for the basics, I plan to have an emergency fund set aside.', trait: 'budget', score: 5 },
            { text: 'After the initial costs for a habitat and supplies, I’d like to spend very little.', trait: 'budget', score: 2 },
            { text: 'Pretty good, but I’d like to avoid any major expenses.', trait: 'budget', score: 3 },
            { text: 'Healthy. I can afford both routine and unexpected costs, if necessary.', trait: 'budget', score: 4 },
            { text: 'Basic. I can afford start-up supplies and inexpensive recurring costs.', trait: 'budget', score: 2 }
        ]
    },
    {
        question: 'How much cleaning are you willing to do?',
        answers: [
            { text: 'Habitat maintenance is fine, but anything beyond that is a deal breaker.', trait: 'cleaning', score: 3 },
            { text: 'I’m OK with muddy paws and the occasional chewed-up cushion.', trait: 'cleaning', score: 4 },
            { text: 'The occasional spill or shedding won’t bother me.', trait: 'cleaning', score: 3 },
            { text: 'I’ve been called a neat freak, and I’m looking for a similar pet.', trait: 'cleaning', score: 5 },
            { text: 'As long as most of the mess remains in a cage, I don’t mind.', trait: 'cleaning', score: 4 }
        ]
    }
];
