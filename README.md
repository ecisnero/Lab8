# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

    - In a Github action when code is pushed to the repository.

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

    - I would not use a unit test to test the "message" feature of a messaging application. The message feature isn't an individual component that can be unit tested. It encompasses several components that interact with each other in order to allow a user to write a message, then send it, and finally be recieved by a secondary user.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

    - I would use a unit test to test the "max-message length". This is a single small component whose sole purpose is to restrict the message's length. Unit testing is easily implementable with input messages of different lengths.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

    -The test will still run, but we won't see the browser UI being accessed by Puppeteer.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

    - First you would need `import { router } from './router.js';` in the script. Second you place `router.setState('settings', false);` inside of the beforeAll callback right after the timeout.