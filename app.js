
const moodInput = document.getElementById('moodInput');
const getRecommendationsBtn = document.getElementById('getRecommendations');
const loading = document.getElementById('loading');
const results = document.getElementById('results');
const moodChips = document.querySelectorAll('.mood-chip');

class UIController {
    constructor() {
        this.initializeEventListeners();
    }


    initializeEventListeners() {
 
        getRecommendationsBtn.addEventListener('click', () => this.handleGetRecommendations());

       
        moodInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleGetRecommendations();
            }
        });

       
        moodChips.forEach(chip => {
            chip.addEventListener('click', () => {
                moodInput.value = chip.dataset.mood;
                this.addChipAnimation(chip);
            });
        });

    
        moodInput.addEventListener('focus', () => {
            moodInput.parentElement.classList.add('focused');
        });

        moodInput.addEventListener('blur', () => {
            moodInput.parentElement.classList.remove('focused');
        });
    }

   
    handleGetRecommendations() {
        const mood = moodInput.value.trim();

        if (!mood) {
            this.showError('Please enter your mood first!');
            return;
        }

        this.showLoading();
       
        setTimeout(() => {
            const recommendations = aiEngine.getRecommendations(mood);
            this.displayResults(recommendations);
            this.hideLoading();
            this.scrollToResults();
        }, 2000);
    }

    showLoading() {
        results.classList.remove('active');
        loading.classList.add('active');
        getRecommendationsBtn.disabled = true;
        getRecommendationsBtn.textContent = '🔄 Processing...';
    }

    hideLoading() {
        loading.classList.remove('active');
        getRecommendationsBtn.disabled = false;
        getRecommendationsBtn.textContent = '✨ Get AI Recommendations';
    }

    displayResults(data) {
        
        this.displayMoodAnalysis(data.analysis);

        this.displayMovies(data.movies);
        this.displayBooks(data.books);
        this.displayMusic(data.music);
        this.displayActivities(data.activities);

        results.classList.add('active');
    }

    displayMoodAnalysis(analysis) {
        const moodAnalysisEl = document.getElementById('moodAnalysis');
        moodAnalysisEl.innerHTML = `
            <h3>🧠 AI Mood Analysis</h3>
            <p>${analysis}</p>
        `;
    }

    displayMovies(movies) {
        const moviesEl = document.getElementById('movies');
        moviesEl.innerHTML = movies.map(movie => this.createRecommendationCard(movie)).join('');
        this.addCardAnimations(moviesEl);
    }

    
    displayBooks(books) {
        const booksEl = document.getElementById('books');
        booksEl.innerHTML = books.map(book => this.createRecommendationCard(book)).join('');
        this.addCardAnimations(booksEl);
    }

   
    displayMusic(music) {
        const musicEl = document.getElementById('music');
        musicEl.innerHTML = music.map(song => this.createRecommendationCard(song)).join('');
        this.addCardAnimations(musicEl);
    }

    displayActivities(activities) {
        const activitiesEl = document.getElementById('activities');
        activitiesEl.innerHTML = activities.map(activity => this.createRecommendationCard(activity)).join('');
        this.addCardAnimations(activitiesEl);
    }

   
    createRecommendationCard(item) {
        return `
            <div class="recommendation-card">
                <div class="card-title">${item.title}</div>
                <div class="card-description">${item.description}</div>
            </div>
        `;
    }

    addCardAnimations(container) {
        const cards = container.querySelectorAll('.recommendation-card');
        cards.forEach((card, index) => {
            card.style.animation = `fadeIn 0.5s ease ${index * 0.1}s both`;
        });
    }

   
    addChipAnimation(chip) {
        chip.style.transform = 'scale(0.95)';
        setTimeout(() => {
            chip.style.transform = 'scale(1)';
        }, 100);
    }

    scrollToResults() {
        setTimeout(() => {
            results.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
    }

    showError(message) {
        alert(message);
        moodInput.focus();
    }
}


class AnalyticsTracker {
    constructor() {
        this.searches = [];
    }

    trackSearch(mood, timestamp = new Date()) {
        this.searches.push({
            mood: mood,
            timestamp: timestamp
        });
    }

    getStats() {
        const moodCounts = {};
        this.searches.forEach(search => {
            moodCounts[search.mood] = (moodCounts[search.mood] || 0) + 1;
        });
        return moodCounts;
    }

    getMostPopularMood() {
        const stats = this.getStats();
        let maxCount = 0;
        let popularMood = null;

        for (const [mood, count] of Object.entries(stats)) {
            if (count > maxCount) {
                maxCount = count;
                popularMood = mood;
            }
        }

        return popularMood;
    }

    getTotalSearches() {
        return this.searches.length;
    }
}


const utils = {
    
    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },

  
    formatDate(date) {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(date);
    },

    getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    },

  
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
};

const uiController = new UIController();
const analytics = new AnalyticsTracker();


const originalHandler = getRecommendationsBtn.onclick;
getRecommendationsBtn.addEventListener('click', () => {
    const mood = moodInput.value.trim();
    if (mood) {
        analytics.trackSearch(mood);
        console.log('📊 Analytics:', {
            totalSearches: analytics.getTotalSearches(),
            stats: analytics.getStats(),
            mostPopular: analytics.getMostPopularMood()
        });
    }
});


console.log(' AI Mood Recommender initialized successfully!');
console.log('Available moods:', aiEngine.getAvailableMoods());
console.log('Database statistics:', aiEngine.getMoodStatistics());

console.log('%cAI Mood Recommender', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with vanilla JavaScript, AI-powered mood analysis, and modern UI/UX', 'color: #764ba2; font-size: 12px;');
console.log('%cCheck out the aiEngine for intelligent mood detection!', 'color: #555; font-size: 11px;');