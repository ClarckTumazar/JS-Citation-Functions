//this functions put brackets and a period to the description to fit the APA format.

const formatDescription = Description => {
    if (Description != ""){
        return ` [${Description}].`;
    } 
    else return "";
}

export { formatDescription };