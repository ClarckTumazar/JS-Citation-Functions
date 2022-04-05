import { archiveSourceDetails as x } from "./archiveSource/archiveSourceDetails.js";
import { citeArchiveSource } from "./archiveSource/citeArchiveSource.js";

import { preprintArticleDetails as y} from "./preprintArticle/preprintArticleDetails.js";
import { citePreprintArticle } from "./preprintArticle/citePreprintArticle.js";

import { bppDetails as z } from "./Brochure, Pamphlet or Painting Source/BPPDetails.js";
import { citeBpp } from "./Brochure, Pamphlet or Painting Source/citeBrchrPmpltPaintingSource.js"

import { datasetDetails as d } from "./datasetSource/datasetDetails.js";
import { citeDataset } from "./datasetSource/citeDataset.js";

import { dictOrEncycloDetails as a } from "./dictionaryorEncyclopedia/DictorEncycloDetails.js";
import { citeDictOrEncyclo } from "./dictionaryorEncyclopedia/citeDictOrEncyclo.js";

//prints results of citeArchiveSource function
//console.log(citeArchiveSource(x.Authors, x.Date, x.Title, x.Description, x.Collection, x.Repository));

//print results of citePreprintArticle function
//console.log(citePreprintArticle(y.Authors, y.Date, y.Title, y.Repository, y.Url));

//print results of citeBpp function
//console.log(citeBpp(z.Authors, z.Date, z.Title, z.DocType, z.Publisher));

//print results of citeDataset function
//console.log(citeDataset(d.Authors, d.Date, d.Title, d.Website, d.UrlorDoi));

console.log(citeDictOrEncyclo(a));






//TODO:
//recheck preprint Article - Done 
//try to finish other references
//reference list: Brochure(Done), Data set(Done), Dictionary, PPT
