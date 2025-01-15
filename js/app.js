document.addEventListener('alpine:init', () => {
    Alpine.data('app', () => ({
        async init() {
            let plans = await loadPlans();
            Alpine.store('plans', plans);
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

        get isContinueScreen() {
            return this.screen === SCREEN_CONTINUE;
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