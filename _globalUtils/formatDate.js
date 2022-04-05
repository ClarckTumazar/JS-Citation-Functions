//this module formats the date into APA style
//if month and day is not given, year will suffice, else include year, month and day.
//year will be a required field in the UI as much as possible, but I still put the n.d. option as this is what is stated
//in the APA format when source has no date provided.

const formatDate = date => {

        if (date.Year != "") {
            if (date.Month != "" && date.Day != "") {
                return ` (${date.Year}, ${date.Month} ${date.Day}).`;
            }
            else {
                return ` (${date.Year}).`;
            }
        }
        else {
            return ` (n.d.).`;
        }
}
export { formatDate }; 