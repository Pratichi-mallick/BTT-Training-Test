# BTT Training Test

Personal practice quiz for the Singapore Basic Theory Test (BTT), shown at
https://www.pratichimallick.com/btt-practise-test

- `btt.js` – quiz engine (day tabs, scope, tips, quiz with green/red feedback, score).
- `style.css` – page styles.
- `days/dayN.js` – tips and 30 questions (10 easy, 10 medium, 10 hard) for each day.

The Webflow page loads these files from jsDelivr. It asks jsDelivr for the newest
version tag, so pushing a new tag (e.g. `1.0.1`) updates the page without republishing Webflow.

To add a day: create `days/dayN.js`, add `N` to `READY` in `btt.js`, commit, then tag the next version.

Questions are original practice questions written from the official handbook,
*Basic Theory of Driving* (Singapore Traffic Police, updated 2 Jan 2026). They are not official test questions.
