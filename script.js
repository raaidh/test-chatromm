



   
    document.querySelector(".send").addEventListener("click", function () {
       
        var text = document.querySelector(".textarea2").value;

        var roomtext = document.querySelector(".textarea1").innerHTML;

        document.querySelector(".textarea1").innerHTML = roomtext + "\n" + text;

    });


