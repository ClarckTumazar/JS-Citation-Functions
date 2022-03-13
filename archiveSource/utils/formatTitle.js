//if no author, title is not italicized, else italicized.
const formatTitle = (Title, Authors) => {
    let formattedTitle = "";
        if (Title != "" && Authors == "") {
            return formattedTitle = `${Title}.`;
        } 
        else if (Title != "") { 
            return formattedTitle = ` <i>${Title}.</i>`; 
        } 
        else {
            return formattedTitle;
        }
}

export { formatTitle };