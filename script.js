$(document).ready(function(){

var Code2College_Students = ["Andrea", "Vanessa", "Marlene", "Cindy", "Sophie", "Natalia", "Selena", "Yazmeen"];

$("#studentButton").click(function(){
    var student = Math.floor(Math.random()*Code2College_Students.length);
    $("#studentDisplay").html(Code2College_Students[student]);
});

$("#teacherButton").click(function(){
    var Code2College_Educators = ["Chris", "Jon", "Matt", "Stephanie"];
    var teacher = Math.floor(Math.random()*Code2College_Educators.length);
    $("#teacherDisplay").html(Code2College_Educators[teacher]);
});

$("#namie").val();

$("#add").click(function(){
    Code2College_Students.push($("#namie").val());
    console.log(Code2College_Students)
});
//able to add any student you want

});