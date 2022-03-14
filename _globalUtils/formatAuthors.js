//module that concantenate all authors, this is applicable to all reference type that have authors.
//if authors is 20 or less list them all
//if authors is 21 or more list authors up to 19 then add ellipse (three dots) and put the last author.

const formatAuthors = (Authors) => {
 let formattedAuthors = "";
 let authorsCount = Authors.length;
let ctr = 0;
    if (ctr < authorsCount - 1) {
        while (ctr < authorsCount - 1) {
            if (ctr == 18 && authorsCount - 1 >= 20) {
                formattedAuthors += `... ${Authors[authorsCount - 1].Lastname}, ${Authors[authorsCount - 1].Initials}`;
                break;
            }
            formattedAuthors += `${Authors[ctr].Lastname}, ${Authors[ctr].Initials}, `;
            ctr++;
        }
        formattedAuthors += `& ${Authors[ctr].Lastname}, ${Authors[ctr].Initials}`;
    }
    else if (authorsCount === 1) {
        formattedAuthors = `${Authors[ctr].Lastname}, ${Authors[ctr].Initials}`;
    }
    else {
        formattedAuthors = "N.A";
    }

    return formattedAuthors;
    }

export { formatAuthors };