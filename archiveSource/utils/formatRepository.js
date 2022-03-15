//City can be accepted even without the repository name.
//when given a repository name the city must also be included.

const formatRepository = Repository => {
    let formattedRepository = "";
    if (Repository.Name != "" && Repository.City != ""){ 
        return formattedRepository = ` ${Repository.Name}, ${Repository.City}.`;
    } 
    else if (Repository.City != "") {
        return formattedRepository = ` ${Repository.City}.`;
    }
    else {
        return formattedRepository;
    }
    
}

export { formatRepository };