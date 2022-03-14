//The more details the user can provide the better. 
//Collection name can be omitted if the source is not from a collection.
//The entire collection and its details can also be empty.
import { isObjEmpty } from "../../_globalUtils/isObjEmpty.js";

const formatCollection = (Collection) => {
    //concatenating all collection details into a single variable.
    let formattedCollection = "";

        if (isObjEmpty(Collection) != true) {
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
