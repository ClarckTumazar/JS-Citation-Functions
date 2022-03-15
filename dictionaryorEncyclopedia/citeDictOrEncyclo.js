import { formatAuthors } from "../_globalUtils/formatAuthors.js";
import { formatDate } from "../_globalUtils/formatDate.js";
import { formatEdPage } from "./utils/formatEdPage.js";
import { formatEditors } from "./utils/formatEditors.js";

const citeDictOrEncyclo = (Authors, Year, Term, Editors, SourceTitle, Edition, Page, Url) => {
    let finalAuthor = formatAuthors(Authors);
    let finalDate = formatDate(Year);
    let finalTerm = ` ${Term}`;
    let finalEditors = formatEditors(Editors);
    let finalSourceTitle = ` <i>${SourceTitle}</i>`;
    let finalEdPage = formatEdPage(Edition, Page);
    let finalUrl = ` ${Url}`;

    if (finalAuthor != "") {
        return finalAuthor + finalDate + finalTerm + " In" + finalEditors + finalSourceTitle + finalEdPage + finalUrl;
    }
    else {
        return finalTerm + finalDate + " In" + finalEditors + finalSourceTitle + finalEdPage + finalUrl;
    }

}

export { citeDictOrEncyclo };