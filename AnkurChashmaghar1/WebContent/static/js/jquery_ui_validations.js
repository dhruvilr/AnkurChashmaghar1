function getRemovedLineBreakerString(stringToReplace){
    stringToReplace = stringToReplace.replace(/(\r\n|\n|\r)/gm," ");
    return stringToReplace;
}


function isNumeric(stringvalue) {
    if (stringvalue == null || !stringvalue.toString().match(/^[-]?\d*\.?\d*$/)){
        return false;
    }
    return true;
}

function isInteger(stringvalue) {
    if(!/^\d+$/.test(stringvalue.toString())) {
        return false;
    }
    return true;
}

function hasWhiteSpace(s) { 
    // Check for white space
    var reWhiteSpace =/\s+/g;
    if (reWhiteSpace.test(s)) {
        return false;
    }
    return true;
}


function isBlank(stringvalue,fieldvalue){      
    if(stringvalue==null || stringvalue=="undefined" || stringvalue.length==0){        
        //$("#msg").html('');
        return [false,fieldvalue+" can not be Blank."];
    } else {
        return [true,''];
    }
}

function checkLength(stringvalue, fieldvalue, length){    
    if(stringvalue.length>length){
        //$("#msg").html('');

        return [false,fieldvalue+" length can not be more than "+length+"."];
    } else {
        return [true,''];
    }
}
function checkisNumeric(stringvalue,fieldvalue) {
    if (stringvalue == null || !stringvalue.toString().match(/^[-]?\d*\.?\d*$/)){
        return [false,fieldvalue+" should be numeric."];
    }
        return [true,''];
 
}

function checkComboSelection(comboboxId,comboboxName){
    var getComboBoxID=$("#"+comboboxId).val();
    if(getComboBoxID==-1){
        $("#"+comboboxId).focus();
        return [false,"Please select "+comboboxName+"."];
    }else{
        return [true,''];
    }
}
function isAlphaNumeric(a,fieldvalue) {
    if (a == null || a == "") {
        return [false,fieldvalue+" can not be null."];
    } else if (!a.match(/^[A-Za-z0-9^\s]*$/)) {
        return [false,fieldvalue+" should be Alpha numeric."];
    } else {
        return [true,''];
    }
}
   



