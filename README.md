# canon
Bible reading program web app

- Shared by Jami on The Literary Life Discord
- https://ransomfellowship.org/article/bible-reading-program-for-slackers-shirkers/
- https://archive.org/details/ifgodalreadyknow00kell/page/194/mode/2up

A program where you can't get behind

## Plan

Douglas Kelly says it has existed since the Puritans.

- Sunday
    - Read 5 chapters
    - Psalms, Proverbs, Ecclesiastes, Song of Solomon
- Monday
    - 3 chapters
    - Genesis, Exodus, Leviticus, Numbers, Deuteronomy
- Tuesday
    - 3 chapters
    - Joshua, Judges, Ruth, 1 Samuel, 2 Samuel, 1 Kings, 2 Kings
- Wednesday
    - 3 chapters
    - Job, 1 Chronicles, 2 Chronicles, Ezra, Nehemiah, Esther
- Thursday
    - 3 chapters
    - Isaiah, Jeremiah, Lamentations, Ezekiel, Daniel, Hosea, Joel, Amos, Obadiah, Jonah, Micah, Nahum, Habakkuk, Zephaniah, Haggai, Zechariah, Malachi
- Friday
    - 3 chapters
    - Matthew, Mark, Luke, John, Acts
- Saturday
    - 3 chapters
    - Romans, 1 Corinthians, 2 Corinthians, Galatians, Ephesians, Philippians, Colossians, 1 Thessalonians, 2 Thessalonians, 1 Timothy, 2 Timothy, Titus, Philemon, Hebrews, James, 1 Peter, 2 Peter, 1 John, 2 John, 3 John, Jude, Revelation

The sections are not equal lengths. When you finish a section, that day becomes a day to read one of the longest remaining sections.

## Tech
- [Alpine JS](https://alpinejs.dev)
- Checkbox CSS modified from [Jimmy Gillam's Animated CSS3 Checkbox](https://codepen.io/theigmo87/pen/BaZBVb)
- [Color Palette](https://coolors.co/ba0d01-d8bd8a-d8d78f-3c1642-086375)

## To Do
- [x] Basic display
- [x] Save clicks
- [x] Disable unchecked checkboxes except for the next chapter
- [x] Store progress in localstorage
- [x] Basic CSS
- [x] Load progress from localstorage
- [x] Display Psalm 1 instead of Psalms 1
- [x] Don't wrap checkbox labels on mobile
- [x] Bug: too many chapters assigned
- [x] Bug: not displaying Wednesday checkboxes
- [x] Bug: not saving progress
- [x] Display disabled checkboxes as disabled
- [ ] Continue plan (if progress gets cleared) from chapter dropdowns
- [ ] Export current location to code
- [ ] Continue plan from code
- [ ] Switch to longest remaining section after a section is finished
- [ ] About page
- [ ] Mobile CSS
- [ ] Fonts
- [ ] Work offline
- [ ] Uncheck disabled, checked checkboxes; something like: x-effect="if($el.disabled) $el.checked = false"
- [ ] Install offline
- [ ] Create Protestant + Apocrypha version
- [ ] Create Roman Catholic version
- [ ] Create Eastern Orthodox version