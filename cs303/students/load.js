$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "github.csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');    
    for (let i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {
            var str ="<tr><td>"+i+"</td>";            
            for (var j=0; j<headers.length; j++) {  
                if(j == 2)             
                    str += "<td><a href='"+data[j]+"' target='_blank'>" + data[j] + "</a></td>";
                else
                    str += "<td>" + data[j] + "</td>";
            }
            str += "</tr>"            
            $('tbody').append(str);
        }
    }
}  