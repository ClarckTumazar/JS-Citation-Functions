//module that concantenate all authors, this is applicable to all reference type that have authors.
//if authors is 20 or less list them all
//if authors is 21 or more list authors up to 19 then add ellipse (three dots) and put the last author.
import { isObjEmpty } from "./isObjEmpty.js";

const formatAuthors = (Authors) => {
 let formattedAuthors = "";
 let authorsCount = "";
 let ctr = 0;

    if (authorsCount > 1) {
        while (ctr < authorsCount - 1) {
            if (ctr == 18 && authorsCount - 1 >= 20) {
                return formattedAuthors += `... ${Authors[authorsCount - 1].Lastname}, ${Authors[authorsCount - 1].Initials}`;
            }
            formattedAuthors += `${Authors[ctr].Lastname}, ${Authors[ctr].Initials}, `;
            ctr++;
        }
        return formattedAuthors += `& ${Authors[ctr].Lastname}, ${Authors[ctr].Initials}`;
    }
    else {
        if(isObjEmpty(Authors[0]) != true){
            return formattedAuthors = `${Authors[ctr].Lastname}, ${Authors[ctr].Initials}`;
        }
        else {
            return formattedAuthors;
        }
    }
}

export { formatAuthors };