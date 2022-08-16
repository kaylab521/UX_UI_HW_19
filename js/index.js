console.log("your index.js file is loaded correctly");
$("button").on("click", function(){
    console.log("you clicked a button");
    }
);

$("button").on("hover", function() {
    console.log("you hovered over a button");
    }    
);
$("#downloadResume").hover(
    function () {
        $("#downloadResume").css("fontWeight", "bold");
        $("#downloadResume").css("box-shadow", "5px 5px #f322bb");
    },
    function () {
        $("#downloadResume").css("fontWeight", "normal");
        $("#downloadResume").css("box-shadow", "0px 0px");
});
$("#button1").hover(
    function() {
        $("#button1").css("fontWeight", "bold");
        $("#button1").css("box-shadow", "5px 5px #f322bb");
    },
    function () {
        $("#button1").css("fontWeight", "normal");
        $("#button1").css("box-shadow", "0px 0px");
}
);
$("#button2").hover(
    function() {
        $("#button2").css("fontWeight", "bold");
        $("#button2").css("box-shadow", "5px 5px #f322bb");
    },
    function () {
        $("#button2").css("fontWeight", "normal");
        $("#button2").css("box-shadow", "0px 0px");
}
);
$("#button3").hover(
    function() {
        $("#button3").css("fontWeight", "bold");
        $("#button3").css("box-shadow", "5px 5px #f322bb");
    },
    function () {
        $("#button3").css("fontWeight", "normal");
        $("#button3").css("box-shadow", "0px 0px");
}
);

$("#tabs").on("hover", function() {
  console.log("you hovered over the nav bar"); 
} 
);
$("#work").hover(
    function () {
        $("#work").css("color", "#f322bb");
        $("#work").css("fontWeight", "bold");
    },
    function () {
        $("#work").css("color", "#3cf2f3");
        $("#work").css("fontWeight", "normal");
    }
);
$("#about").hover(
    function () {
        $("#about").css("color", "#f322bb");
        $("#about").css("fontWeight", "bold");
    },
    function () {
        $("#about").css("color", "#3cf2f3");
        $("#about").css("fontWeight", "normal");
    } 
); 
$("#contact").hover(
    function () {
        $("#contact").css("color", "#f322bb");
        $("#contact").css("fontWeight", "bold");
    },
    function () {
        $("#contact").css("color", "#3cf2f3");
        $("#contact").css("fontWeight", "normal");
    } 
);
$("#resume").hover(
    function () {
        $("#resume").css("color", "#f322bb");
        $("#resume").css("fontWeight", "bold");
    },
    function () {
        $("#resume").css("color", "#3cf2f3");
        $("#resume").css("fontWeight", "normal");
    }
);


        









