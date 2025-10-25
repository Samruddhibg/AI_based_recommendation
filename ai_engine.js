

class MoodAIEngine {
    constructor(database) {
        this.database = database;
        this.moodSynonyms = this.initializeMoodSynonyms();
        this.moodKeywords = this.initializeMoodKeywords();
    }

    
    initializeMoodSynonyms() {
        return {
            // Happy synonyms
            'joyful': 'happy',
            'cheerful': 'happy',
            'content': 'happy',
            'delighted': 'happy',
            'pleased': 'happy',
            'glad': 'happy',
            'ecstatic': 'happy',
            'blissful': 'happy',
            
            // Sad synonyms
            'depressed': 'sad',
            'down': 'sad',
            'melancholy': 'sad',
            'unhappy': 'sad',
            'sorrowful': 'sad',
            'gloomy': 'sad',
            'miserable': 'sad',
            'blue': 'sad',
            
            // Anxious synonyms
            'worried': 'anxious',
            'nervous': 'anxious',
            'stressed': 'anxious',
            'tense': 'anxious',
            'uneasy': 'anxious',
            'apprehensive': 'anxious',
            'panicked': 'anxious',
            'overwhelmed': 'anxious',
            
            // Excited synonyms
            'thrilled': 'excited',
            'pumped': 'excited',
            'hyped': 'excited',
            'enthusiastic': 'excited',
            'eager': 'excited',
            'exhilarated': 'excited',
            'fired up': 'excited',
            
            // Relaxed synonyms
            'calm': 'relaxed',
            'peaceful': 'relaxed',
            'chill': 'relaxed',
            'serene': 'relaxed',
            'tranquil': 'relaxed',
            'mellow': 'relaxed',
            'laid-back': 'relaxed',
            
            // Energetic synonyms
            'active': 'energetic',
            'motivated': 'energetic',
            'driven': 'energetic',
            'dynamic': 'energetic',
            'vigorous': 'energetic',
            'lively': 'energetic',
            'spirited': 'energetic',
            
            // Thoughtful synonyms
            'contemplative': 'thoughtful',
            'pensive': 'thoughtful',
            'philosophical': 'thoughtful',
            'reflective': 'thoughtful',
            'introspective': 'thoughtful',
            'meditative': 'thoughtful',
            
            // Romantic synonyms
            'loving': 'romantic',
            'affectionate': 'romantic',
            'passionate': 'romantic',
            'sentimental': 'romantic',
            'tender': 'romantic',
            'amorous': 'romantic'
        };
    }

    
    initializeMoodKeywords() {
        return {
            happy: ['smile', 'laugh', 'joy', 'celebrate', 'fun', 'good', 'great', 'awesome', 'fantastic'],
            sad: ['cry', 'tear', 'hurt', 'pain', 'loss', 'grief', 'lonely', 'empty', 'broken'],
            anxious: ['worry', 'fear', 'stress', 'panic', 'nervous', 'scared', 'afraid', 'tense'],
            excited: ['can\'t wait', 'amazing', 'incredible', 'thrilling', 'pumped', 'ready', 'anticipate'],
            relaxed: ['calm', 'peace', 'quiet', 'rest', 'zen', 'chill', 'easy', 'comfortable'],
            energetic: ['power', 'strong', 'ready', 'go', 'action', 'move', 'active', 'dynamic'],
            thoughtful: ['think', 'wonder', 'ponder', 'reflect', 'consider', 'contemplate', 'question'],
            romantic: ['love', 'heart', 'romance', 'date', 'crush', 'partner', 'relationship', 'affection']
        };
    }

    
    analyzeMood(userInput) {
        const normalizedInput = userInput.toLowerCase().trim();
        
        if (this.database[normalizedInput]) {
            return {
                detectedMood: normalizedInput,
                confidence: 100,
                data: this.database[normalizedInput]
            };
        }

        if (this.moodSynonyms[normalizedInput]) {
            const mappedMood = this.moodSynonyms[normalizedInput];
            return {
                detectedMood: mappedMood,
                confidence: 90,
                data: this.database[mappedMood]
            };
        }

        const keywordMatch = this.analyzeByKeywords(normalizedInput);
        if (keywordMatch) {
            return {
                detectedMood: keywordMatch,
                confidence: 75,
                data: this.database[keywordMatch]
            };
        }

     
        const phraseMatch = this.analyzePhrase(normalizedInput);
        if (phraseMatch) {
            return {
                detectedMood: phraseMatch,
                confidence: 70,
                data: this.database[phraseMatch]
            };
        }

      
        return {
            detectedMood: 'thoughtful',
            confidence: 50,
            data: this.database['thoughtful']
        };
    }

    analyzeByKeywords(input) {
        let bestMatch = null;
        let highestScore = 0;

        for (const [mood, keywords] of Object.entries(this.moodKeywords)) {
            let score = 0;
            for (const keyword of keywords) {
                if (input.includes(keyword)) {
                    score++;
                }
            }
            if (score > highestScore) {
                highestScore = score;
                bestMatch = mood;
            }
        }

        return highestScore > 0 ? bestMatch : null;
    }

    analyzePhrase(phrase) {
        const words = phrase.split(' ');
        
      
        for (const word of words) {
            if (this.database[word]) {
                return word;
            }
            if (this.moodSynonyms[word]) {
                return this.moodSynonyms[word];
            }
        }

        return null;
    }

   
    getRecommendations(mood) {
        const analysis = this.analyzeMood(mood);
        
       
        const enhancedData = this.enhanceRecommendations(analysis);
        
        return enhancedData;
    }

  
    enhanceRecommendations(analysis) {
        const data = { ...analysis.data };
        
       
        const confidenceText = this.getConfidenceText(analysis.confidence);
        data.analysis = `${confidenceText}\n\n${data.analysis}`;
        
        return data;
    }

    
    getConfidenceText(confidence) {
        if (confidence >= 90) {
            return "High Confidence Match: I'm very confident about understanding your mood.";
        } else if (confidence >= 70) {
            return "Good Match: I've identified a mood that closely matches what you're feeling.";
        } else {
            return "Interpreted Mood: Based on your input, here's what might resonate with you.";
        }
    }


    getAvailableMoods() {
        return Object.keys(this.database);
    }

   
    getMoodStatistics() {
        const stats = {};
        for (const mood in this.database) {
            stats[mood] = {
                movies: this.database[mood].movies.length,
                books: this.database[mood].books.length,
                music: this.database[mood].music.length,
                activities: this.database[mood].activities.length
            };
        }
        return stats;
    }
}


const aiEngine = new MoodAIEngine(moodDatabase);
