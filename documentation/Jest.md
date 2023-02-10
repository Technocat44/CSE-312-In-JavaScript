# Writing Test Cases with Jest

---

### Step 1

- npm install jest

#### Key Point

Jest is going to look for any files in the project that end with <something>.test.js

### Step 2

- Go to Test directory and create a new file and make sure the name of the file ends in test.js

### Step 3

- Before we even code anything, we should set up how to run the file.
- In Node/package.json under the scripts section, we are going to add a new script for npm to run the jest command This will execute the jest test runner.
- The line we want to enter is this: `"test":"jest --watchAll --verbose"`. We can also add the `"--coverage"` argument here to see how much of our code we are testing.
- `"--watchAll"` will watch our code in the background and re-run the test anytime the code changes.
- to run test in command line run `npm run test`. The test should fail if we haven't written any yet.

### Step 4

- Add types to the project to give us intellisense for all the matchers built into jest.
- in command line run `npm install @types/jest --save-dev`.
- Create a jsconfig.json file that has type acquisition property for jest. This will provide VS Code with intellisense for everything we code in jest.

#### Optional

In VS Code install the extension wallaby,js. This tool allows you to see the results of the test right in the file so you don't have to look in the terminal. Note: this is a paid extension.