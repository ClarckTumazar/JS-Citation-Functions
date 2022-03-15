import { isObjEmpty } from "../../_globalUtils/isObjEmpty.js";

// formats and concantenate edition and page into a single variable.
const formatEdPage = (Edition, Page) => {
   if (isObjEmpty(formatEdPage) != true) {
        if(Edition != "" && Page != "") {
            return ` (${Edition} ed., ${Page}).`;
        }
        else if (Edition != "") {
            return ` (${Edition} ed.)`;
        }
        else {
            return ` (${Page})`;
        }
    }
    else return "";
}

export { formatEdPage };
