const citePreprintArticle = (Authors, Date, Title, Repository, Url ) => {
    let authorsCount = Authors.length;
    let ctr = 0;
    let formattedAuthors = "";
    let finalFormat ="";

    
    if (ctr < authorsCount - 1){
        while(ctr < authorsCount - 1) {
            formattedAuthors += `${Authors[ctr].Lastname}, ${Authors[ctr].MInitial}, `;
            ctr++; 
            console.log(ctr);
        }
        formattedAuthors += `& ${Authors[ctr].Lastname}, ${Authors[ctr].MInitial}`;
    }
    else if (ctr === 1) {
        formattedAuthors = `${Authors[ctr].Lastname}, ${Authors[ctr].MInitial}`;
    }
    else {
        formattedAuthors = "N.A";
    }

    finalFormat = `${formattedAuthors} (${Date}). ${Title}. ${Repository}. ${Url}`;
    return finalFormat;

  
}

const preprintArticleDetails = {
    Authors: [
                { 
                    Lastname: "Hampton",
                    MInitial: "S."
                },
                { 
                    Lastname: "Tumazar",
                    MInitial: "L."
                },
                { 
                    Lastname: "Javier",
                    MInitial: "S."
                },
                { 
                    Lastname: "Catura",
                    MInitial: "M."
                }
            ],
    Date: "2017",
    Title: "Autism and bilingualism: A qualitative interview study of parents’ perspectives and experiences",
    Repository: "PsyarXiv",
    Url: "https://doi.org/10.31234/osf.io/76xfs"
}

let x = preprintArticleDetails;


let y = citePreprintArticle(x.Authors, x.Date, x.Title, x.Repository, x.Url);

console.log(y);