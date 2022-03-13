//this functions put brackets and a period to the description to fit the APA format.

const formatDescription = (Description) => {
    let formattedDescription = "";
    if (Description != ""){
        return formattedDescription = ` [${Description}].`;
    } 
    else {
        return formattedDescription;
    }
}

export { formatDescription };