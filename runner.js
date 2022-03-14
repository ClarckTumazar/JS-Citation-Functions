import { archiveSourceDetails as x } from "./archiveSource/archiveSourceDetails.js";
import { citeArchiveSource } from "./archiveSource/citeArchiveSource.js";

import { preprintArticleDetails as y} from "./preprintArticle/preprintArticleDetails.js";
import { citePreprintArticle } from "./preprintArticle/citePreprintArticle.js";

import { bppDetails as z } from "./Brochure, Pamphlet or Painting Source/BPPDetails.js";
import { citeBpp } from "./Brochure, Pamphlet or Painting Source/citeBrchrPmpltPaintingSource.js"


//prints results of citeArchiveSource function
//console.log(citeArchiveSource(x.Authors, x.Date, x.Title, x.Description, x.Collection, x.Repository));

//print results of citePreprintArticle function
//console.log(citePreprintArticle(y.Authors, y.Date, y.Title, y.Repository, y.Url));

//print results of citeBpp function
console.log(citeBpp(z.Authors, z.Date, z.Title, z.DocType, z.Publisher));








//TODO:
//recheck preprint Article - Done 
//try to finish other references
//reference list: Brochure, Data set, Dictionary, PPT
