//function that checks if an object is empty or not without checking all the properties.
export const isObjEmpty = (Collection) => { 
    return Object.values(Collection).every(x => x === null || x === "");
}

