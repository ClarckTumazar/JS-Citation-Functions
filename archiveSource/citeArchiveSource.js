//Archive Source can be cited without author, title or Description, Collection.
//Archive Source without author must have title.
//Archive Source without title must have description and author. if with title, description can be ignored. 
//Archive source will have no collection details if copy is in possesion of author.

import { formatAuthors } from "../_globalUtils/formatAuthors.js";
import { formatDate } from "../_globalUtils/formatDate.js";
import { formatCollection } from "./utils/formatCollection.js";
import { formatTitle } from "./utils/formatTitle.js";
import { formatDescription } from "./utils/formatDescription.js";
import { formatRepository } from "./utils/formatRepository.js";

const citeArchiveSource = (Authors, Date, Title, Description, Collection, Repository) => {

    let finalAuthors = formatAuthors(Authors);
    let finalDate = formatDate(Date);
    let finalTitle = formatTitle(Title, Authors);
    let finalDescription = formatDescription(Description);
    let finalCollection = formatCollection(Collection);
    let finalRepository = formatRepository(Repository);

    let finalFormat = ""; 
    if (Authors != "") {
        finalFormat = finalAuthors + finalDate + finalTitle + finalDescription + finalCollection + finalRepository;
    }
    else {
        //if no author, title is found at the start of the citation.
        finalFormat = finalTitle + finalDate + finalDescription + finalCollection + finalRepository;
    }
    return finalFormat;
}

export { citeArchiveSource };