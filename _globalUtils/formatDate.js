//this module formats the date into APA style
//if month and day is not given, year will suffice, else include year, month and day.
//year will be a required field in the UI as much as possible, but I still put the n.d. option as this is what is stated
//in the APA format when source has no date provided.

const formatDate = Date => {

        if (Date.Year != "") {
            if (Date.Month != "" && Date.Day != "") {
                return ` (${Date.Year}, ${Date.Month} ${Date.Day}).`;
            }
            else {
                return ` (${Date.Year}).`;
            }
        }
        else {
            return ` (n.d.).`;
        }
}
export { formatDate }; 