/*
[
{ "question":"Calcium Chloride" , "Correct Answer":"CaCl_2", "Wrong Answer": ["CCl_2", "CaCl", "Ca_2Cl_2", "CaCl_2", "CCl", "Ca_2Cl"], "Score": 1}
]
*/
    function loadJSON(callback) {

        var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
        xobj.open('GET', 'question.json', true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
              if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
              }
        };
        xobj.send(null);
     }
