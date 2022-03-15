//module that concantenate all Editors, this is applicable to all reference type that have Editors.
//based on the apa citation generator on the web, it can be just the Initials or just the Lastname so I implemented that feature.

import { isObjEmpty } from "../../_globalUtils/isObjEmpty.js";

const formatEditors = Editors => {
 let formattedEditors = "";
 let EditorsCount = Editors.length;
 let ctr = 0;

    if (EditorsCount > 1) {
        while (ctr < EditorsCount - 1) {
            //if Editors is 21 or more list Editors up to 19 then add ellipse (three dots) and put the last author.
            if (ctr == 18 && EditorsCount - 1 >= 20) {
                if ( Editors[ctr].Initials != "" && Editors[ctr].Lastname != ""){ 
                    return formattedEditors += ` ... ${Editors[EditorsCount - 1].Initials}, ${Editors[EditorsCount - 1].Lastname}`;
                }
                else if( Editors[ctr].Initials != "") {
                    return formattedEditors += ` ... ${Editors[EditorsCount - 1].Initials}.`;
                }
                else {
                    formattedEditors += `...${Editors[ctr].Lastname}`;
                } 
            }
            
            //concatenate all Editors until before the last author in the array.
            if ( Editors[ctr].Initials != "" && Editors[ctr].Lastname != ""){ 
                formattedEditors += ` ${Editors[ctr].Initials}, ${Editors[ctr].Lastname},`;
            }
            else if( Editors[ctr].Initials != "") {
                formattedEditors += ` ${Editors[ctr].Initials},`;
            }
            else {
                formattedEditors += ` ${Editors[ctr].Lastname},`;
            }
            ctr++;
        }

        //this concatenates the last author in the array and returns it.
        if ( Editors[ctr].Initials != "" && Editors[ctr].Lastname != ""){ 
            return formattedEditors += ` & ${Editors[ctr].Initials}, ${Editors[ctr].Lastname}`;
        }
        else if( Editors[ctr].Initials != "") {
            return formattedEditors += ` & ${Editors[ctr].Initials}.`;
        }
        else {
            return formattedEditors += ` & ${Editors[ctr].Lastname}`;
        }
    }

    //if there is only 1 author in the array.
    else {
        //check first if this single author is an empty string or not. 
        if(isObjEmpty(Editors[0]) != true){
            if ( Editors[ctr].Initials != "" && Editors[ctr].Lastname != ""){ 
                return formattedEditors += ` ${Editors[ctr].Initials}, ${Editors[ctr].Lastname}`;
            }
            else if( Editors[ctr].Initials != "") {
                return formattedEditors += ` ${Editors[ctr].Initials}.`;
            }
            else {
                return formattedEditors += ` ${Editors[ctr].Lastname}`;
            }
        }
        //if this single author contains empty string then it will return empty.
        else return formattedEditors;
    }
}

export { formatEditors };