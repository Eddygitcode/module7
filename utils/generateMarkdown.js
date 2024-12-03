import {writeFile} from "fs";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None") return;

  return `![${license}](https://img.shields.io/badge/License-${license}-blue)`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let output = `
# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)
- [Contributors](#contributors)
- [Tests](#tests)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributors
${data.contributors}

## Tests
${data.test}

## Questions
If you have any questions about the project, I can be contacted at the following:
[${data.email}]("mailto:${data.email}")
[Github]("https://github.com/${data.github}")`

writeFile('ReadMe2.md', output, error => {
  if (error) throw error;
  console.log('ReadMe2.md was created');
})
}

export default generateMarkdown;
