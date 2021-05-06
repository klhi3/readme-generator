// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
     case 'MIT':
       return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
     case 'MPL':
       return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]";
     default:
      return "";
    } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {    
    case 'MIT':
      return "(https://opensource.org/licenses/MIT)";
    case 'MPL':
      return "(https://opensource.org/licenses/MPL-2.0)";
    default:
      return "";
   } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let str="";

  for (const i of license) {
      switch (i) {    
        case 'MIT':
        case 'MPL':
          str += renderLicenseBadge(i)+renderLicenseLink(i)+"&nbsp;&nbsp;&nbsp;";
          break;
        default:
          str += "";
        } 
   }
   return str;
}

// render content items 
// from data except (0: github username, 1: title, 2: description, last: license)
// change first letter to Uppercase from key of data and concatenate key
function renderTableOfContent(data){
  const dTmp = Object.keys(data);
  let str = "";
  let strDes = "";

   for (let i=4;i<dTmp.length-1;i++){
     const key = dTmp[i];
     const tmp = key;
     const upperKey = tmp.charAt(0).toUpperCase() + tmp.slice(1);
    //  const value = data[Object.keys(data)[i]];
     str +="* ["+upperKey+"](#"+key+")  \n";

     //Sections
     const value = data[Object.keys(data)[i]];
     strDes += `
     ## ${upperKey}
     ${value} \n\n     
     `;
   }

   //Questions: add github repository and email
   if (data.username) {
      strDes += `
      [Github profile](https://github.com/${data.username})\n
      To reach me with additiona questions : ${data.email}\n     
      `; 
   }

   return str+"\n\n"+strDes;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  renderTableOfContent(data);

  return `# ${data.title}
${renderLicenseSection(data.license)}
 
## Description  
${data.description}   
  
## Table of Content
${renderTableOfContent(data)} 



`;
}

module.exports = generateMarkdown;
