$(document).ready(function(){
    $("#btn1").click(function(){
        alert("Text: "+$("p").text());
    })
    $("#btn2").click(function(){
        alert("Text: "+$("p").html());
    })
})