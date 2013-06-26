$(document).ready(function(){
    var jsonExample = function(){
        // For this case, url is local
        var url = "js/data.json";
        // Asking for a JS in an async way
        var dfd = $.getJSON(url);

        // Callback for done handler
        var processJSON = function(data){
            console.log(data);
            var table = "";
            var counter = 0;
            var tdTag = "";
            var tdEnd = "</td>";
            data.users.map(function(element){
                if (counter%2 == 0)
                    tdTag = "<td class='fancy-td-1 fancy-background-1'>";
                else
                    tdTag = "<td class='fancy-td-1 fancy-background-2'>";

                table += "<tr>";
                table += tdTag + element.name + tdEnd;
                table += tdTag + element.lastName + tdEnd;
                table += tdTag + element.age + tdEnd;
                table += "</tr>";
                counter++;
            });
            $("#users-table").append(table);
        };
        // Callback for fail handler
        function errorJSON(error){
            console.log(error);
        };
        // This is an async pattern in JavaScript
        // Defferred, see more: http://joseoncode.com/2011/09/26/a-walkthrough-jquery-deferred-and-promise/
        dfd.done( processJSON );
        dfd.fail( errorJSON );

        console.log("End of code");
    };

    jsonExample();
});