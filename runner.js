import { archiveSourceDetails as x } from "./archiveSource/archiveSourceDetails.js";
import { citeArchiveSource } from "./archiveSource/citeArchiveSource.js";

import { preprintArticleDetails as y} from "./preprintArticle/preprintArticleDetails.js";
import { citePreprintArticle } from "./preprintArticle/citePreprintArticle.js";

//prints results of citeArchiveSource function
//console.log(citeArchiveSource(x.Authors, x.Date, x.Title, x.Description, x.Collection, x.Repository));

//print results of citePreprintArticle function
console.log(citePreprintArticle(y.Authors, y.Date, y.Title, y.Repository, y.Url));
//TODO:
//recheck preprint Article then try to finish other references
//reference list: Brochure, Data set, Dictionary, PPT
