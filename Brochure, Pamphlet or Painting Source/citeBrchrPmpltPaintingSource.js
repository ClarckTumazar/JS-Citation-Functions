import { formatAuthors } from "../_globalUtils/formatAuthors.js"
import { formatDate } from "../_globalUtils/formatDate.js"

const citeBrochurePamphletorPainting = (Authors, Year, Title, DocType, Publisher) => {
    let finalAuthor = formatAuthors(Authors);
    let finalDate = formatDate(Year);
    let finalTitle = ` <i>${Title}</i>`;
    let finalDocType = ` [${DocType}].`;
    let finalPublisher = ` ${Publisher}.`;
    let finalFormat = "";

    if ( finalAuthor != "") {
        return finalFormat = finalAuthor + finalDate + finalTitle + finalDocType + finalPublisher;
    }
    else {
        return finalFormat = finalPublisher + finalDate + finalTitle + finalDocType + finalPublisher;
    }
}

export { citeBrochurePamphletorPainting as citeBpp };

