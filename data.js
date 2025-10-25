
const moodDatabase = {
    happy: {
        movies: [
            { title: "The Grand Budapest Hotel", description: "A whimsical comedy with stunning visuals and heartwarming characters that will amplify your joy." },
            { title: "Amélie", description: "A charming French film about finding happiness in small moments and spreading joy to others." },
            { title: "Paddington 2", description: "Pure wholesome entertainment that radiates positivity and kindness." },
            { title: "Sing Street", description: "An uplifting musical journey about following your dreams with infectious energy." },
            { title: "Little Miss Sunshine", description: "A heartwarming road trip comedy about family, dreams, and embracing life's imperfections." }
        ],
        books: [
            { title: "The House in the Cerulean Sea by TJ Klune", description: "A delightfully whimsical story about found family and the transformative power of kindness." },
            { title: "Anxious People by Fredrik Backman", description: "A heartwarming comedy about connection, second chances, and the beauty of human imperfection." },
            { title: "Project Hail Mary by Andy Weir", description: "A thrilling space adventure with humor and heart that celebrates human ingenuity." },
            { title: "The Midnight Library by Matt Haig", description: "An uplifting exploration of life's infinite possibilities and finding joy in the present." },
            { title: "Bossypants by Tina Fey", description: "Hilarious memoir that will keep you laughing while inspiring confidence." }
        ],
        music: [
            { title: "Happy - Pharrell Williams", description: "The ultimate feel-good anthem that's impossible not to dance to." },
            { title: "Good as Hell - Lizzo", description: "Empowering pop that celebrates self-love and confidence." },
            { title: "Mr. Blue Sky - Electric Light Orchestra", description: "Classic upbeat track that radiates pure sunshine energy." },
            { title: "Walking on Sunshine - Katrina and The Waves", description: "Infectious 80s hit that captures the essence of pure joy." }
        ],
        activities: [
            { title: "Host a game night", description: "Gather friends for board games, laughter, and creating happy memories together." },
            { title: "Try a new recipe", description: "Channel your positive energy into creating something delicious and shareable." },
            { title: "Dance party", description: "Put on your favorite upbeat music and dance like nobody's watching." },
            { title: "Volunteer", description: "Share your joy by helping others in your community." }
        ],
        analysis: "You're radiating positive energy! This is the perfect time to connect with others, try new experiences, and spread joy. These recommendations will help amplify your happiness and create lasting memories."
    },
    sad: {
        movies: [
            { title: "Inside Out", description: "A beautiful exploration of emotions that validates sadness as an essential part of being human." },
            { title: "About Time", description: "A touching film about appreciating life's moments and finding beauty in ordinary days." },
            { title: "The Pursuit of Happyness", description: "An inspiring story of resilience and hope that reminds us better days are ahead." },
            { title: "Soul", description: "A profound meditation on life's purpose and finding meaning in small moments." },
            { title: "Good Will Hunting", description: "A moving story about healing, growth, and the people who help us through dark times." }
        ],
        books: [
            { title: "The Midnight Library by Matt Haig", description: "A comforting exploration of regret, possibility, and finding reasons to keep going." },
            { title: "When Breath Becomes Air by Paul Kalanithi", description: "A profound meditation on mortality that helps put life in perspective." },
            { title: "The Alchemist by Paulo Coelho", description: "An inspiring tale about following your dreams even through difficult times." },
            { title: "Man's Search for Meaning by Viktor Frankl", description: "A powerful book about finding purpose and meaning even in suffering." },
            { title: "The Book of Lost Things by John Connolly", description: "A dark fairy tale about grief, growth, and finding your way through sorrow." }
        ],
        music: [
            { title: "Fix You - Coldplay", description: "A gentle, comforting song that acknowledges pain while offering hope." },
            { title: "The Night We Met - Lord Huron", description: "Melancholic melody that lets you feel your emotions fully." },
            { title: "Hurt - Johnny Cash", description: "A haunting song that validates deep feelings and the human experience." },
            { title: "Skinny Love - Bon Iver", description: "Emotional acoustic track that creates space for reflection." }
        ],
        activities: [
            { title: "Journaling", description: "Write down your thoughts and feelings to process emotions in a healthy way." },
            { title: "Nature walk", description: "Gentle outdoor time can be healing and provide perspective." },
            { title: "Call a friend", description: "Reach out to someone you trust - connection helps during difficult times." },
            { title: "Creative expression", description: "Paint, draw, or create something - art can be therapeutic." }
        ],
        analysis: "It's okay to feel sad. These recommendations provide comfort while honoring your emotions. Remember, sadness is temporary, and it's healthy to acknowledge what you're feeling. Be gentle with yourself."
    },
    anxious: {
        movies: [
            { title: "My Neighbor Totoro", description: "A gentle, soothing Studio Ghibli film that creates a sense of calm and wonder." },
            { title: "Chef", description: "A relaxing film about starting over and finding peace through simple pleasures." },
            { title: "The Secret Life of Walter Mitty", description: "An inspiring adventure about facing fears and discovering courage within." },
            { title: "Paterson", description: "A quiet, meditative film about finding beauty in routine and stillness." },
            { title: "Julie & Julia", description: "A comforting story about finding purpose and joy through cooking." }
        ],
        books: [
            { title: "The Anxiety and Phobia Workbook by Edmund Bourne", description: "Practical strategies and exercises for managing anxiety effectively." },
            { title: "Wherever You Go, There You Are by Jon Kabat-Zinn", description: "Mindfulness practices that help ground you in the present moment." },
            { title: "The Unlikely Pilgrimage of Harold Fry by Rachel Joyce", description: "A gentle story about a long walk that helps put worries in perspective." },
            { title: "Reasons to Stay Alive by Matt Haig", description: "A compassionate guide through anxiety with humor and hope." },
            { title: "Big Magic by Elizabeth Gilbert", description: "An encouraging book about letting go of fear and embracing creativity." }
        ],
        music: [
            { title: "Weightless - Marconi Union", description: "Scientifically designed to reduce anxiety and promote relaxation." },
            { title: "Breathe Me - Sia", description: "Calming vocals that encourage deep breathing and release." },
            { title: "Holocene - Bon Iver", description: "Soothing soundscape that helps quiet racing thoughts." },
            { title: "Clair de Lune - Debussy", description: "Classical piano piece known for its calming properties." }
        ],
        activities: [
            { title: "Box breathing exercise", description: "Breathe in for 4, hold for 4, out for 4, hold for 4. Repeat to calm your nervous system." },
            { title: "Progressive muscle relaxation", description: "Systematically tense and relax muscle groups to release physical tension." },
            { title: "Gentle yoga or stretching", description: "Slow, mindful movement helps reconnect body and mind." },
            { title: "Grounding technique (5-4-3-2-1)", description: "Name 5 things you see, 4 you hear, 3 you touch, 2 you smell, 1 you taste." }
        ],
        analysis: "Anxiety is challenging, but you're taking a positive step by seeking support. These calming recommendations can help ground you and ease worried thoughts. Remember to breathe deeply and be patient with yourself."
    },
    excited: {
        movies: [
            { title: "Mad Max: Fury Road", description: "Non-stop adrenaline-pumping action that matches your high energy." },
            { title: "Spider-Man: Into the Spider-Verse", description: "Visually explosive and energetic superhero adventure." },
            { title: "Baby Driver", description: "High-octane heist film with incredible energy and style." },
            { title: "The Greatest Showman", description: "Spectacular musical that celebrates ambition and showmanship." },
            { title: "Scott Pilgrim vs. The World", description: "Fast-paced, stylized adventure with infectious energy." }
        ],
        books: [
            { title: "Ready Player One by Ernest Cline", description: "Thrilling sci-fi adventure through virtual worlds and pop culture." },
            { title: "The Hunger Games by Suzanne Collins", description: "Page-turning dystopian thriller that keeps adrenaline pumping." },
            { title: "Six of Crows by Leigh Bardugo", description: "Fast-paced heist fantasy with incredible world-building and action." },
            { title: "Red Rising by Pierce Brown", description: "Epic space opera with revolution, action, and high stakes." },
            { title: "Born to Run by Christopher McDougall", description: "Inspiring true story about ultra-running and pushing human limits." }
        ],
        music: [
            { title: "Eye of the Tiger - Survivor", description: "Classic pump-up anthem for channeling excited energy." },
            { title: "Can't Stop - Red Hot Chili Peppers", description: "High-energy rock that matches your enthusiasm." },
            { title: "Uptown Funk - Mark Ronson ft. Bruno Mars", description: "Irresistibly funky track that keeps the energy high." },
            { title: "Thunder - Imagine Dragons", description: "Powerful anthem for feeling unstoppable." }
        ],
        activities: [
            { title: "High-intensity workout", description: "Channel your energy into cardio, HIIT, or an intense fitness class." },
            { title: "Start that project", description: "Your excitement gives you momentum - begin something you've been planning." },
            { title: "Adventure outing", description: "Try rock climbing, hiking, or another adventure sport." },
            { title: "Learn something new", description: "Your enthusiasm makes this perfect for starting a new skill or hobby." }
        ],
        analysis: "Your excitement is contagious! This high-energy state is perfect for tackling challenges and trying new things. These recommendations will help you channel your enthusiasm productively."
    },
    relaxed: {
        movies: [
            { title: "Lost in Translation", description: "A dreamy, contemplative film perfect for a laid-back viewing experience." },
            { title: "Before Sunrise", description: "Gentle romantic dialogue that flows like a pleasant conversation." },
            { title: "The Secret Life of Walter Mitty", description: "Beautiful cinematography and peaceful pacing for contemplation." },
            { title: "Amélie", description: "Whimsical French cinema with a soothing, magical atmosphere." },
            { title: "Moonlight", description: "Beautifully shot, meditative drama with poetic storytelling." }
        ],
        books: [
            { title: "The Little Prince by Antoine de Saint-Exupéry", description: "A gentle, philosophical tale perfect for peaceful reflection." },
            { title: "The Remains of the Day by Kazuo Ishiguro", description: "Quiet, elegant prose that unfolds at a contemplative pace." },
            { title: "Norwegian Wood by Haruki Murakami", description: "Melancholic yet soothing story with beautiful, flowing writing." },
            { title: "A Year in Provence by Peter Mayle", description: "Charming memoir about slow living in the French countryside." },
            { title: "The Art of Stillness by Pico Iyer", description: "Short essays on finding peace in our busy world." }
        ],
        music: [
            { title: "Flume - Bon Iver", description: "Ethereal soundscape perfect for maintaining tranquility." },
            { title: "River Flows in You - Yiruma", description: "Gentle piano that enhances peaceful moments." },
            { title: "Nude - Radiohead", description: "Mellow, atmospheric track for quiet contemplation." },
            { title: "Sunset Lover - Petit Biscuit", description: "Chill electronic music that flows effortlessly." }
        ],
        activities: [
            { title: "Meditation session", description: "Deepen your relaxed state with mindfulness or guided meditation." },
            { title: "Gentle stretching", description: "Slow, mindful movement to enhance body awareness and calm." },
            { title: "Tea ceremony", description: "Take time to mindfully prepare and enjoy a cup of tea." },
            { title: "Cloud watching", description: "Lie in the grass and simply observe the sky - pure relaxation." }
        ],
        analysis: "You're in a wonderful state of calm. This is the perfect time for introspection, creativity, and enjoying simple pleasures. These recommendations will complement and enhance your peaceful mood."
    },
    energetic: {
        movies: [
            { title: "Whiplash", description: "Intense, fast-paced drama about passion and pushing limits." },
            { title: "The Social Network", description: "Quick-witted dialogue and high-stakes drama that moves at your pace." },
            { title: "Ocean's Eleven", description: "Slick, stylish heist film with clever energy throughout." },
            { title: "Edge of Tomorrow", description: "Action-packed sci-fi with relentless momentum." },
            { title: "The Wolf of Wall Street", description: "High-energy, audacious story of ambition and excess." }
        ],
        books: [
            { title: "Atomic Habits by James Clear", description: "Actionable guide to channeling your energy into productive habits." },
            { title: "The Power of Now by Eckhart Tolle", description: "Harness your energetic state for mindful presence." },
            { title: "Can't Hurt Me by David Goggins", description: "Intense motivation for pushing beyond perceived limits." },
            { title: "The 4-Hour Workweek by Tim Ferriss", description: "Energy and productivity hacks for maximizing output." },
            { title: "Shoe Dog by Phil Knight", description: "Fast-paced memoir about building Nike from the ground up." }
        ],
        music: [
            { title: "Don't Stop Me Now - Queen", description: "Perfect anthem for unstoppable energy and momentum." },
            { title: "Lose Yourself - Eminem", description: "Intense motivation for seizing every opportunity." },
            { title: "Thunderstruck - AC/DC", description: "Raw electric energy that matches your vigor." },
            { title: "Titanium - David Guetta", description: "Powerful electronic beat for sustained energy." }
        ],
        activities: [
            { title: "Sprint training", description: "Short, intense bursts of exercise perfect for high energy." },
            { title: "Tackle your to-do list", description: "Your energy makes this ideal for checking off multiple tasks." },
            { title: "Team sports", description: "Basketball, soccer, or volleyball to channel competitive energy." },
            { title: "Declutter and organize", description: "Use your momentum to transform your space." }
        ],
        analysis: "You're bursting with energy and ready to conquer the world! This is an excellent time for physical activity, productivity, and tackling challenges. These recommendations will help you make the most of your dynamic state."
    },
    thoughtful: {
        movies: [
            { title: "Arrival", description: "Cerebral sci-fi that explores language, time, and human connection." },
            { title: "Her", description: "Philosophical exploration of love, consciousness, and technology." },
            { title: "The Tree of Life", description: "Meditative, visually stunning examination of existence and meaning." },
            { title: "Eternal Sunshine of the Spotless Mind", description: "Mind-bending exploration of memory, love, and identity." },
            { title: "12 Angry Men", description: "Intellectually engaging drama about justice and human nature." }
        ],
        books: [
            { title: "Sapiens by Yuval Noah Harari", description: "Thought-provoking history of humankind and our future." },
            { title: "The Stranger by Albert Camus", description: "Philosophical novel exploring existentialism and meaning." },
            { title: "Thinking, Fast and Slow by Daniel Kahneman", description: "Fascinating deep dive into how we think and make decisions." },
            { title: "The Unbearable Lightness of Being by Milan Kundera", description: "Philosophical meditation on love, fate, and existence." },
            { title: "Meditations by Marcus Aurelius", description: "Timeless Stoic philosophy for contemplating life's big questions." }
        ],
        music: [
            { title: "Comptine d'un autre été - Yann Tiersen", description: "Contemplative piano that encourages deep thought." },
            { title: "Time - Hans Zimmer", description: "Epic, reflective composition perfect for introspection." },
            { title: "Mad World - Gary Jules", description: "Melancholic track that invites philosophical contemplation." },
            { title: "Gymnopédie No.1 - Erik Satie", description: "Minimalist piano for deep, uninterrupted thinking." }
        ],
        activities: [
            { title: "Philosophy reading", description: "Dive into classic or contemporary philosophical texts." },
            { title: "Museum visit", description: "Explore art and history to stimulate further contemplation." },
            { title: "Long walk", description: "Walking meditation to process your thoughts deeply." },
            { title: "Deep conversation", description: "Connect with someone for meaningful, philosophical discussion." }
        ],
        analysis: "You're in a contemplative, introspective state. This is valuable time for deep thinking, learning, and personal growth. These recommendations will stimulate your mind and support meaningful reflection."
    },
    romantic: {
        movies: [
            { title: "Before Sunrise trilogy", description: "The most authentic, conversational romance films ever made." },
            { title: "Pride and Prejudice (2005)", description: "Timeless romance with beautiful cinematography and chemistry." },
            { title: "La La Land", description: "Musical romance that celebrates love, dreams, and sacrifice." },
            { title: "The Notebook", description: "Sweeping, emotional love story that spans decades." },
            { title: "Crazy, Stupid, Love", description: "Romantic comedy that explores love in all its messy glory." }
        ],
        books: [
            { title: "The Night Circus by Erin Morgenstern", description: "Enchanting romance set in a magical, dreamlike circus." },
            { title: "Normal People by Sally Rooney", description: "Intimate, contemporary romance about connection and timing." },
            { title: "The Time Traveler's Wife by Audrey Niffenegger", description: "Unique love story transcending time and circumstance." },
            { title: "Me Before You by Jojo Moyes", description: "Emotional romance about love, choice, and living fully." },
            { title: "Outlander by Diana Gabaldon", description: "Epic historical romance with adventure and passion." }
        ],
        music: [
            { title: "At Last - Etta James", description: "Classic romantic song that captures the feeling of finding love." },
            { title: "Thinking Out Loud - Ed Sheeran", description: "Modern romantic ballad about enduring love." },
            { title: "Make You Feel My Love - Adele", description: "Powerful declaration of unconditional love." },
            { title: "La Vie en Rose - Édith Piaf", description: "Timeless French love song with pure romance." }
        ],
        activities: [
            { title: "Plan a special date", description: "Create a memorable romantic experience for you and your partner." },
            { title: "Write a love letter", description: "Express your feelings through heartfelt, handwritten words." },
            { title: "Couples cooking class", description: "Learn something new together while creating connection." },
            { title: "Stargazing picnic", description: "Romantic outdoor evening under the stars." }
        ],
        analysis: "You're feeling the warm glow of love and connection. This is a beautiful time to express affection, deepen relationships, and celebrate romance. These recommendations will enhance your loving mood."
    }
};
