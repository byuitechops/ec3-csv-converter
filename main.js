/********************************************************************
 * Require Dependancies Here
*********************************************************************/
const dsv = require('d3-dsv');

/********************************************************************
 * This will check for and remove the Byte-Order-Mark if it exists
 * in the given CSV document Note: BOM can be referenced by:
 * '\ufeff' in utf8, and shows up as 'ef bb bf' in buffer form
*********************************************************************/
const removeBOM = function(stringWithBOM){
    // Insert Code to remove BOM
    console.log('Here is the removeBOM Function');
    return 'csv without bom';
}

/********************************************************************
 * This will use d3-dsv to turn the csv into a json object.
*********************************************************************/
const parseCSV = function(csvToParse){
    //Parse csv into json for further use
    console.log('Here is the parseCSV Function');
    return ['parsed csv'];
}

/********************************************************************
 * csvReducer takes the parsed csv and edits it based on the given
 * function and the options specified
*********************************************************************/
const csvReducer = function(csvToReduce, options, reducerFunction){
    // Choose what to do here based on options
    console.log('Here is the csvReducer Function');
    csvToReduce.reduce(reducerFunction, options.initAcc);
    return ['reduced csv'];
}

/********************************************************************
 * editCSV 
*********************************************************************/
const editCSV = function(reducedValue, initialCSV, options, reducerFunction){
    // Choose what to do here based on options
    console.log('Here is the editCSV Function');
    return '\'Editted CSV Here\'';
}

/********************************************************************
 * 
*********************************************************************/
// ***By adding another signature, we could give the user the option to 
// access to the methods without auto-getnerating the usual end-result
class ModifiedCSV {
    constructor(initialCSV, options, reducerFunction){
        if(initialCSV){
            this.newCSV = this.removeBOM(initialCSV);
            this.parsedCSV = this.parseCSV(this.newCSV);
            this.reducedValue = this.csvReducer(this.parsedCSV, options, reducerFunction);
            this.newCSV = this.editCSV(this.reducedValue, this.newCSV, options, reducerFunction);
        }
    }
    // methods
    removeBOM(stringWithBOM){return removeBOM(stringWithBOM);}
    parseCSV(csvToParse){return parseCSV(csvToParse);}
    csvReducer(csvToReduce, options, reducerFunction){return csvReducer(csvToReduce, options, reducerFunction);}
    editCSV(reducedValue, initialCSV, options, reducerFunction){return editCSV(reducedValue, initialCSV, options, reducerFunction);} 
    // getters
    getObject(){return this.reducedValue;}
    getCSV(){return this.newCSV;}
}

/********************************************************************
 * BELOW: Experimenting and templating options parameter :BELOW
*********************************************************************/
var optionsStyle2 = 
{
    verifyHeaders:[], // Check/Verify: Do these headers exist? empty = dont check
    headersOut:[], // Which headers should exist in the outputted csv
    initAcc:[], // What is accumulator should be used on the reduce
    run:
    {
        reduce: false,
        // insert more options here for methods to reduce
    }
}
/********************************************************************
 * ABOVE: Experimenting and templating options parameter :ABOVE
*********************************************************************/

/********************************************************************
 * a new class (or object) created based on the given parameters would be the export
*********************************************************************/
module.exports = (initialCSV, options, reducerFunction) => {
    // the whole class could be returned, which would include its methods
    // but otherwise just its ModifiedCSV.getObject and ModifiedCSV.getCSV values
    // could be returned as an object.
    return new ModifiedCSV(initialCSV, options, reducerFunction);
}