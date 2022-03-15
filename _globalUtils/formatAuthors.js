//module that concantenate all authors, this is applicable to all reference type that have authors.
//based on the apa citation generator on the web, it can be just the lastname or just the initials so I implemented that feature.

import { isObjEmpty } from "./isObjEmpty.js";

const formatAuthors = Authors => {
 let formattedAuthors = "";
 let authorsCount = Authors.length;
 let ctr = 0;

    if (authorsCount > 1) {
        while (ctr < authorsCount - 1) {
            //if authors is 21 or more list authors up to 19 then add ellipse (three dots) and put the last author.
            if (ctr == 18 && authorsCount - 1 >= 20) {
                if ( Authors[ctr].Lastname != "" && Authors[ctr].Initials != ""){ 
                    return formattedAuthors += `... ${Authors[authorsCount - 1].Lastname}, ${Authors[authorsCount - 1].Initials}`;
                }
                else if( Authors[ctr].Lastname != "") {
                    return formattedAuthors += `... ${Authors[authorsCount - 1].Lastname}.`;
                }
                else {
                    formattedAuthors += `...${Authors[ctr].Initials}`;
                } 
            }
            
            //concatenate all authors until before the last author in the array.
            if ( Authors[ctr].Lastname != "" && Authors[ctr].Initials != ""){ 
                formattedAuthors += `${Authors[ctr].Lastname}, ${Authors[ctr].Initials}, `;
            }
            else if( Authors[ctr].Lastname != "") {
                formattedAuthors += `${Authors[ctr].Lastname}, `;
            }
            else {
                formattedAuthors += `${Authors[ctr].Initials}, `;
            }
            ctr++;
        }

        //this concatenates the last author in the array and returns it.
        if ( Authors[ctr].Lastname != "" && Authors[ctr].Initials != ""){ 
            return formattedAuthors += `& ${Authors[ctr].Lastname}, ${Authors[ctr].Initials}`;
        }
        else if( Authors[ctr].Lastname != "") {
            return formattedAuthors += `& ${Authors[ctr].Lastname}.`;
        }
        else {
            return formattedAuthors += `& ${Authors[ctr].Initials}`;
        }
    }

    //if there is only 1 author in the array.
    else {
        //check first if this single author is an empty string or not. 
        if(isObjEmpty(Authors[0]) != true){
            if ( Authors[ctr].Lastname != "" && Authors[ctr].Initials != ""){ 
                return formattedAuthors += `${Authors[ctr].Lastname}, ${Authors[ctr].Initials}`;
            }
            else if( Authors[ctr].Lastname != "") {
                return formattedAuthors += `${Authors[ctr].Lastname}.`;
            }
            else {
                return formattedAuthors += `${Authors[ctr].Initials}`;
            }
        }
        //if this single author contains empty string then it will return empty.
        else return formattedAuthors;
    }
}

export { formatAuthors };