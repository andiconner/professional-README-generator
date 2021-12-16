// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const license = ["MIT", "GPLv3", "GPL"]

function renderLicenseBadge(confirmLicense, license){
  if (!confirmLicense) {
    return "";
  }else if(license == 'MIT') {
  return `![MIT license](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license == 'GPLv3') {
  return `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license == 'GPL') {
  return `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } 
  
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(confirmLicense, license) {
    if (!confirmLicense) {
        return "";
    }else if (license == 'MIT') {
    return `<a href="https://opensource.org/licenses/MIT">MIT website</a>`;
    }else if (license == 'GPLv3') {
    return `<a href="https://gplv3.fsf.org/">GPLv3 website</a>`;
    }else if (license == 'GPL') {
      return `<a href="https://opensource.org/licenses/gpl-license">GPL website</a>`;
      }else {
        return license;
      }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// create the license section
function renderLicenseSection(confirmLicense, license) {
  if (!confirmLicense) {
      return "";
  }
  return `## License`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `
# ${data.projectTitle}

## Description 

${data.description}


## Table of Contents (Optional)

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Test](#test)
* [Questions](#questions)


## Installation

${data.installation}

## Usage 

${data.usage}

## Contributing

${data.contribution}


${ renderLicenseSection(data.confirmLicense, data.license) }
${ renderLicenseBadge(data.confirmLicense, data.license)}</br>
${ renderLicenseLink(data.confirmLicense, data.license) }



## Test

${data.test}

## Questions
If you have any questions about the repo, please send an email to ${data.email}. You can find more of my work at ${data.github}


`;
}

module.exports = generateMarkdown;
