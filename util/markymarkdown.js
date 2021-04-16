function markyMarkdown(data) {
    return`
    # Title
    ${data.projectTitle}

    # Description

    ## Table of Contents
        * [Installation](#installation)
        * [Usage](#usage)
        * [License](#license)
        * [Contribution](#contribution)
        * [Tests](#tests)
        * [Contact](#contact)
    
    # Installation

    //Optional Table of Contents (Links between the sections)
//Installation? (Needs to be a Header in the ReadME)
//Usage (Needs to be a Header in the ReadME)
//License (Liscense choose from a list) Adds a badge near the top of the readme that explains what license its unter
//Contributing (Needs to be a Header in the ReadME)
//Tests (Needs to be a Header in the ReadME)
//Submit Questions (Adds Github account link and Email to submit questions for)
`;
}

module.exports = markyMarkdown;