document.addEventListener('alpine:init', () => {
    Alpine.data('app', () => ({
        async init() {
            this.plans = loadPlans();
            
            const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
            const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
            const currentDate = new Date();
            this.today = days[currentDate.getDay()];
            this.todayLong = `${this.today}, ${months[currentDate.getMonth()]} ${currentDate.getDate()}`;
            this.version = 'protestant';
        },

        chaptersRead: [],
        plans: {},
        progress: {},
        today: '',
        todayLong: '',
        version: '',

        chapterClick(e) {
            // console.log(e);
            // localStorage.setItem(this.today, Math.max(...this.chaptersRead));
        },
        continuePlan() {
            Alpine.store('screens').current = 'continue';
        },
        createPlan() {
            Alpine.store('screens').current = 'plan';
            localStorage.setItem("version", this.version);
        },
        createContinuation() {
            // save selections into localstorage
        },

        get currentProgress() {
            this.progress[this.today] = Math.max(...this.chaptersRead);
            return this.progress;
        },
        get dayCompletionPercentages() {
            // {"Wednesday":"5009","Tuesday":"6024","Thursday":"16003","Sunday":"3007","Saturday":"21021","Monday":"4033","Friday":"4027"}
        },
        get planDay() {
            // day gets today unless day is complete, when it gets the day with the most remaining chapters
            let currentPlanDay = this.plans[this.version].find(d => d.day === this.today);
            // console.log(currentPlanDay);
            let lastComplete = 0; // todo: get last complete

            // create array with plan books + chapters
            let chapters = [];
            currentPlanDay.books.forEach(book => {
                for(let i = 0; i < book.chapters; i++) {
                    let chapter = {
                        id: (book.id * 1000) + i + 1,
                        book: book.title,
                        number: i + 1
                    };
                    chapters.push(chapter);
                }
            });
            // slice array starting at last complete, ending at last complete + 1 + dailyChapters
            return chapters.slice(lastComplete, lastComplete + currentPlanDay.dailyChapters);
        }
    }));

    Alpine.store('screens', {
        current: 'start',

        items: ['start', 'continue', 'plan'],
    });
});

function loadPlans() {
    return {
        "protestant": [
            {
                "day": "Sunday",
                "dailyChapters": 5,
                "books": [{
                    "id": 19,
                    "title": "Psalms",
                    "chapters": 150
                }, {
                    "id": 20,
                    "title": "Proverbs",
                    "chapters": 31
                }, {
                    "id": 21,
                    "title": "Ecclesiastes",
                    "chapters": 12
                }, {
                    "id": 22,
                    "title": "Song of Solomon",
                    "chapters": 8
                }]
            }, 
            {
                "day": "Monday",
                "dailyChapters": 3,
                "books": [{
                    "id": 1,
                    "title": "Genesis",
                    "chapters": 50
                }, {
                    "id": 2,
                    "title": "Exodus",
                    "chapters": 40
                }, {
                    "id": 3,
                    "title": "Leviticus",
                    "chapters": 27
                }, {
                    "id": 4,
                    "title": "Numbers",
                    "chapters": 36
                }, {
                    "id": 5,
                    "title": "Deuteronomy",
                    "chapters": 34
                }]
            }, 
            {
                "day": "Tuesday",
                "dailyChapters": 3,
                "books": [{
                    "id": 6,
                    "title": "Joshua",
                    "chapters": 24
                }, {
                    "id": 7,
                    "title": "Judges",
                    "chapters": 21
                }, {
                    "id": 8,
                    "title": "Ruth",
                    "chapters": 4
                }, {
                    "id": 9,
                    "title": "1 Samuel",
                    "chapters": 31
                }, {
                    "id": 10,
                    "title": "2 Samuel",
                    "chapters": 24
                }, {
                    "id": 11,
                    "title": "1 Kings",
                    "chapters": 22
                }, {
                    "id": 12,
                    "title": "2 Kings",
                    "chapters": 25
                }]
            }, 
            {
                "day": "Wednesday",
                "dailyChapters": 3,
                "books": [{
                    "id": 18,
                    "title": "Job",
                    "chapters": 42
                }, {
                    "id": 13,
                    "title": "1 Chronicles",
                    "chapters": 29
                }, {
                    "id": 14,
                    "title": "2 Chronicles",
                    "chapters": 36
                }, {
                    "id": 15,
                    "title": "Ezra",
                    "chapters": 10
                }, {
                    "id": 16,
                    "title": "Nehemiah",
                    "chapters": 13
                }, {
                    "id": 17,
                    "title": "Esther",
                    "chapters": 10
                }]
            }, 
            {
                "day": "Thursday",
                "dailyChapters": 3,
                "books": [{
                    "id": 23,
                    "title": "Isaiah",
                    "chapters": 66
                }, {
                    "id": 24,
                    "title": "Jeremiah",
                    "chapters": 52
                }, {
                    "id": 25,
                    "title": "Lamentations",
                    "chapters": 5
                }, {
                    "id": 26,
                    "title": "Ezekiel",
                    "chapters": 48
                }, {
                    "id": 27,
                    "title": "Daniel",
                    "chapters": 12
                }, {
                    "id": 28,
                    "title": "Hosea",
                    "chapters": 14
                }, {
                    "id": 29,
                    "title": "Joel",
                    "chapters": 3
                }, {
                    "id": 30,
                    "title": "Amos",
                    "chapters": 9
                }, {
                    "id": 31,
                    "title": "Obadiah",
                    "chapters": 1
                }, {
                    "id": 32,
                    "title": "Jonah",
                    "chapters": 4
                }, {
                    "id": 33,
                    "title": "Micah",
                    "chapters": 7
                }, {
                    "id": 34,
                    "title": "Nahum",
                    "chapters": 3
                }, {
                    "id": 35,
                    "title": "Habakkuk",
                    "chapters": 3
                }, {
                    "id": 36,
                    "title": "Zephaniah",
                    "chapters": 3
                }, {
                    "id": 37,
                    "title": "Haggai",
                    "chapters": 2
                }, {
                    "id": 38,
                    "title": "Zechariah",
                    "chapters": 14
                }, {
                    "id": 39,
                    "title": "Malachi",
                    "chapters": 4
                }]
            }, 
            {
                "day": "Friday",
                "dailyChapters": 3,
                "books": [{
                    "id": 40,
                    "title": "Matthew",
                    "chapters": 28
                }, {
                    "id": 41,
                    "title": "Mark",
                    "chapters": 16
                }, {
                    "id": 42,
                    "title": "Luke",
                    "chapters": 24
                }, {
                    "id": 43,
                    "title": "John",
                    "chapters": 21
                }, {
                    "id": 44,
                    "title": "Acts",
                    "chapters": 28
                }]
            }, 
            {
                "day": "Saturday",
                "dailyChapters": 3,
                "books": [{
                    "id": 45,
                    "title": "Romans",
                    "chapters": 16
                }, {
                    "id": 46,
                    "title": "1 Corinthians",
                    "chapters": 16
                }, {
                    "id": 47,
                    "title": "2 Corinthians",
                    "chapters": 13
                }, {
                    "id": 48,
                    "title": "Galatians",
                    "chapters": 6
                }, {
                    "id": 49,
                    "title": "Ephesians",
                    "chapters": 6
                }, {
                    "id": 50,
                    "title": "Philippians",
                    "chapters": 4
                }, {
                    "id": 51,
                    "title": "Colossians",
                    "chapters": 4
                }, {
                    "id": 52,
                    "title": "1 Thessalonians",
                    "chapters": 5
                }, {
                    "id": 53,
                    "title": "2 Thessalonians",
                    "chapters": 3
                }, {
                    "id": 54,
                    "title": "1 Timothy",
                    "chapters": 6
                }, {
                    "id": 55,
                    "title": "2 Timothy",
                    "chapters": 4
                }, {
                    "id": 56,
                    "title": "Titus",
                    "chapters": 3
                }, {
                    "id": 57,
                    "title": "Philemon",
                    "chapters": 1
                }, {
                    "id": 58,
                    "title": "Hebrews",
                    "chapters": 13
                }, {
                    "id": 59,
                    "title": "James",
                    "chapters": 5
                }, {
                    "id": 60,
                    "title": "1 Peter",
                    "chapters": 5
                }, {
                    "id": 61,
                    "title": "2 Peter",
                    "chapters": 3
                }, {
                    "id": 62,
                    "title": "1 John",
                    "chapters": 5
                }, {
                    "id": 63,
                    "title": "2 John",
                    "chapters": 1
                }, {
                    "id": 64,
                    "title": "3 John",
                    "chapters": 1
                }, {
                    "id": 65,
                    "title": "Jude",
                    "chapters": 1
                }, {
                    "id": 66,
                    "title": "Revelation",
                    "chapters": 22
                }]
            }
        ]
    };
}