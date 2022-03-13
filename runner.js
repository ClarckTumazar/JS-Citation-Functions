import { archiveSourceDetails as x } from "./archiveSource/details.js";
import { citeArchiveSource } from "./archiveSource/citeArchiveSource.js";

console.log(citeArchiveSource(x.Authors, x.Date, x.Title, x.Description, x.Collection, x.Repository));

//TODO:
//recheck preprint Article then try to finish other references
//reference list: Brochure, Data set, Dictionary, PPT
