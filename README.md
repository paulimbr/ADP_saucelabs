Hello, welcome to my project!
In order to run the tests you should have installed the following dependencies:

Dependencies:
- Visual Studio Code (VSCode): You need a code editor to write and run your Playwright project. While you can use any code editor, VSCode is recommended because it provides a built-in debugger for Playwright.
- Node.js and npm: Playwright is a Node.js library, so you need to have Node.js and npm (which comes with Node.js) installed on your machine. You can download Node.js from the official website: https://nodejs.org
- Playwright: You need to install Playwright, so at VSCode you'll access the "Extensions" section by clicking on the right side menu or by pressing "Ctrl+Shift+X". In the top extension menu will be a filter that you should fill in with "Playwright test for VSCode" keep in mind that you should install the microsoft verified one.

Now that you have all the apps needed its time to download the project from Github:
- Access https://github.com/paulimbr/ADP_saucelabs using your preferred browser.
- Click on the "CODE" button and download it. So unpack it on your desired project folder at your Computer.

Adding the Project to VSCode:
- Go to Menu "File" > "Open Folder" menu option to navigate to and select your Playwright project's directory.

Running the tests:
- Navigate through terminal window located in the botton VSCode page.
- Type the following command to run the tests: npx playwright test <hit enter>. Tests will start to be performed and at its finished the report will open or can be open by clicking at http://localhost:9323 that will be placed on terminal window.

  * Note that one test will fail for all browsers as it compare the Standard user with Visual user that has various problems.
