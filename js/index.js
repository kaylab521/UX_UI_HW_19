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
        $("#work").css("fontWeight", "bold");
        $("#line1").fadeIn();
    },
    function () {
        $("#work").css("fontWeight", "normal");
        $("#line1").fadeOut();
    }
);
$("#about").hover(
    function () {
        $("#about").css("fontWeight", "bold");
        $("#line2").fadeIn();
    },
    function () {
        $("#about").css("fontWeight", "normal");
        $("#line2").fadeOut();
    } 
); 
$("#contact").hover(
    function () {
        $("#contact").css("fontWeight", "bold");
        $("#line3").fadeIn();
    },
    function () {
        $("#contact").css("fontWeight", "normal");
        $("#line3").fadeOut();
    } 
);
$("#resume").hover(
    function () {
        $("#resume").css("fontWeight", "bold");
        $("#line4").fadeIn();
    },
    function () {
        $("#resume").css("fontWeight", "normal");
        $("#line4").fadeOut();
    }
);

$("#allProjects").on("hover", function(){
    console.log("you hovered over view all projects");
});

$("#allProjects").hover (
    function (){
        $("#allProjects").css("fontWeight", "bold");
        $("#allProjects").css("color", "#f322bb");
    },
    function (){
        $("#allProjects").css("fontWeight", "normal");
        $("#allProjects").css("color", "#33f2f3");
    }
);

$(".skills").on("click", function () {
    $(".heading").on("click", function () {
        $(".heading").click("flexcontainer", function (){
            $(".flexContainer").on("slideDown", function() {
                (".flexContainer").slideDown(slow);
            });    
        });
    });
});

        









