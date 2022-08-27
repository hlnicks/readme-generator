// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === 'ISC') {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;
  } else if (license === 'IBM') {
    return `[![License: IBM](https://img.shields.io/badge/License-IPL_1.0-blue.svg)`;
  } else {
    return `[![License: SIL](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)`;
  }
}


// MIT', 'ISC', 'IBM', 'SIL

// function that returns the license link
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  if (license === 'MIT') {
    return `[License: MIT](https://opensource.org/licenses/MIT)`;
  } else if (license === 'ISC') {
    return `
    [License: ISC](https://opensource.org/licenses/ISC)`;
  } else if (license === 'IBM') {
    return `[License: IBM](https://opensource.org/licenses/IPL-1.0)`;
  } else {
    return `[License: SIL](https://opensource.org/licenses/OFL-1.1)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// create a function to generate markdown for README
function generateMarkdown(data) {
  var readme = data;
  return `
  # ${readme.title}

  ## Description
  ${readme.description}

  ## Table of Contents
  - [Installation](#install)
  - [Usage](#usage)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${readme.steps}

  ## Usage
  ${readme.usage}

  ## How to Contribute
  ${readme.contribution}

  ## Tests
  Use ${readme.test} to test the functionality of the application.

  ## Questions
  Direct any questions or comments to ${readme.email}. To see more projects, visit ${readme.name}'s profile at the following link:
  - [Github Repository](https://github.com/${readme.name})
`;
}

module.exports = generateMarkdown;
