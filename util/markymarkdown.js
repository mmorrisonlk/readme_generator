function markyMarkdown(data) {
    return`
    # ${data.projectTitle}

    ## Description
    ${data.description}

    ## Table of Contents
        * [Installation](#Installation)
        * [Usage](#usage)
        * [License](#license)
        * [Contribution](#contribution)
        * [Tests](#tests)
        * [Contact](#contact)
    
    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Contribution
    ${data.contribution}

    ## Tests
    ${data.testingInfo}

    ## License
    ${data.license}

    ## Contact Information
    github.com/${data.github}
    ${data.emailContact}

`}

module.exports = markyMarkdown;