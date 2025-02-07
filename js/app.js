document.addEventListener('alpine:init', () => {
    Alpine.data('app', () => ({
        async init() {
            let plans = await loadPlans();
            Alpine.store('plans', plans);

            const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
            this.selectedDay = days[(new Date()).getDay()];
        },

        chaptersRead: [],
        selectedDay: 'Sunday',

        chapterClick(e) {
            let selectedDay = e.target.id.split('-')[0];
            let selectedIndex = parseInt(e.target.id.split('-')[1]);
            
            let selectedDayChapters = [];
            for (let i = 0; i <= selectedIndex; i++) {
                selectedDayChapters.push(`${selectedDay}-${i}`);
            }
            
            let chapters = Array.from(this.chaptersRead).filter(c => !c.startsWith(selectedDay));            
            this.chaptersRead = chapters.concat(selectedDayChapters);
        },
        continuePlan() {
            Alpine.store('screens').current = 'continue';
        },
        createPlan() {
            Alpine.store('screens').current = 'plan';
            // create empty "cookie"
        },
        createContinuation() {
            // save selections into cookie
        },

        get lastChaptersRead() {
            return Object.fromEntries(
                this.chaptersRead
                    .map(x => x.split('-'))
                    .sort( (a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] < b[0])
            );
        },
        get selectedPlanDay() {
            return Alpine.store('plans').protestant.find(d => d.day === this.selectedDay);
        }
    }));

    Alpine.store('screens', {
        current: 'start',

        items: ['start', 'continue', 'plan'],
    });
});

async function loadPlans() {
    const url = 'https://canon.koser.us/data/plans.json';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Load bible.json: ${response.status}`);
        }
    
        const text = await response.text();
        return JSON.parse(text);
    } catch (error) {
        console.error(error.message);
        return [];
    }
}