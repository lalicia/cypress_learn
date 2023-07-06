# Real World Testing with Cypress Blog

A Next.js Blog for the [Real World Testing with Cypress Curriculum](https://github.com/cypress-io/cypress-realworld-testing-blog).

## Installation

Instructions originally came for yarn but I favour npm, so I researched whether I could/how to switch this over. Using [this](https://ncoughlin.com/posts/switching-yarn-npm/) article I was able to make the change - essentially:

- delete `node_modules` (there were none, I'd just cloned the repo)
- delete the `yarn.lock`
- npm install to bring in the packages and create your `node_modules` and `package-lock.json`:

```bash
npm install
```

Start the local dev server.

```bash
npm run dev
```

While the dev server is running, in a separate terminal window, run the following command to launch Cypress.

```bash
npm run cypress:open
```

NB. when I tried to use the `cypress:open` script I got an error, and to remedy this I had to specifically reinstall Cypress with npm:

```bash
npm install cypress --save-dev
```

## Pratice Tests & Answers

The practice tests are located in `cypress/e2e/Practice` - these are what I worked through.

The answers are located in `cypress/e2e/Answers` - these are the answers provided by Cypress.

## Further Notes

I found that sometimes I wasn't writing the tests as they were written in the Answer file, but I was still able to write passing tests, so this demonstrates that there's flexibility in how you achieve the outcome of a passing test.

I really enjoyed the debugging tests sections - that was fun :)

There's some kind of bug with the netword-requests tests that means an error is thrown with intercept - I got around this by commenting out a line at the top of the file. I also reported this on github on an existing issue thread.

I do not understand why sometimes it's `.eq` command and sometimes it's `"eq"` in the brackets of the command... As of right now I can't find an answer for this either.
