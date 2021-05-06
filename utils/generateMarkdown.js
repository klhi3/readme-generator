// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
     case "MIT":
       return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
     case "MPL":
       return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]";
     default:
      return "";
    } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "(https://opensource.org/licenses/MIT)";
    case "MPL":
      return "(https://opensource.org/licenses/MPL-2.0)";
    default:
     return "";
   } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return renderLicenseBadge(license)+renderLicenseLink(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseSection(data.license)}



`;
}

module.exports = generateMarkdown;
