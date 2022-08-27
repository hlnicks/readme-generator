// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

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
