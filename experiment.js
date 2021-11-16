const experiment = (date1, date2) => {

    const firstTimeStamp = Date.parse(convertDateFormat(date1));
    const secondTimeStamp = Date.parse(convertDateFormat(date2));

    //Convert into date Object
    const firstDateObj = new Date(firstTimeStamp);
    const secondDateObj = new Date(secondTimeStamp);

    if(!validate(firstDateObj))
    {
        return {
            type: "error",
            message: "First Date must be between 01/01/1901 and 31/12/2999"
        };
    }

    if(!validate(secondDateObj))
    {
        return {
            type: "error",
            message: "Second Date must be between 01/01/1901 and 31/12/2999"
        };
    }
    
    //Get time difference from Two Date Objects
    const differenceInTimestamp = secondDateObj.getTime() - firstDateObj.getTime();

    //Convert timestamp into days
    const differenceInDays = ((differenceInTimestamp / (1000 * 3600 * 24)) - 1); //Minus 1 because there are no fully elapsed days between dates 

    return differenceInDays;
   
}

//We convert date from DD/MM/YYYY to MM/DD/YYYY to become a valid parameter for Date.parse()
const convertDateFormat = (date) => { 
    var dateSplit = date.split(/\//);
    return [ dateSplit[1], dateSplit[0], dateSplit[2] ].join('/');
}

//Validate date must be between 01/01/1901 and 31/12/2999
const validate = (date) => {
    const startDate = new Date(convertDateFormat("01/01/1901"));
    const endDate = new Date(convertDateFormat("31/12/2999"));
    return (date.getTime() <= endDate.getTime() && date.getTime() >= startDate.getTime()) ? true : false;
}


module.exports = experiment;