const SCREEN_CONTINUE = "continue";
const SCREEN_PLAN = "plan";
const SCREEN_START = "start";
let PLANS = [];

document.addEventListener('alpine:init', () => {
  Alpine.data('app', () => ({
	screen: SCREEN_START,

    async init() {
        createInitialConsole(this);
        startTimestamp = new Date();
        PLANS = await loadPlans();
    },

    continue() {

    },
    create() {
        // create empty "cookie"
        // flip display flag to plan
    },
    createContinuation() {

    },

    get isContinueScreen() {
        return this.screen === SCREEN_CONTINUE;
    },
    get isPlanScreen() {
        return this.screen === SCREEN_PLAN;
    },
    get isStartScreen() {
        return this.screen === SCREEN_START;
    }
  }))
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