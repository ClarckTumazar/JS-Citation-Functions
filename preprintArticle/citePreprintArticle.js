import { formatAuthors } from "../_globalUtils/formatAuthors.js";
import { formatDate } from "../_globalUtils/formatDate.js";

const citePreprintArticle = (Authors, Date, Title, Repository, Url ) => {
    let finalAuthors = formatAuthors(Authors);
    let finalDate = formatDate(Date);
    let finalTitle = ` <i>${Title}</i>.`;
    let finalRepository = ` ${Repository}.`;
    let finalUrl = ` ${Url}`;

    let finalFormat ="";

    finalFormat = finalAuthors + finalDate + finalTitle + finalRepository + finalUrl;
    return finalFormat;
}

export { citePreprintArticle };

