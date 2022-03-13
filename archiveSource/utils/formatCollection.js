//function that checks if an object is empty or not without checking all the properties.
const isEmpty = (Collection) => { 
        return Object.values(Collection).every(x => x === null || x === "");
    }

//The more details the user can provide the better. 
//Collection name can be omitted if the source is not from a collection.
//The entire collection and its details can also be empty.

const formatCollection = (Collection) => {
    //concatenating all collection details into a single variable.
    let formattedCollection = "";

        if (isEmpty(Collection) != true) {
            if (Collection.Name != "") {
                formattedCollection += ` ${Collection.Name}`;
            }
            if (Collection.Details != "") {
                formattedCollection += ` (${Collection.Details}).`;
            }
            else {
                formattedCollection += '.';
            }
            return formattedCollection;
        }
        else {
            return formattedCollection = "";
        }
}

export { formatCollection };
