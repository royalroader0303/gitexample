//document.write("내용");
//출력 명령문
//<br> 줄바꿈

// 2단~ 9단 (세로)
/*
for(var i=2; i<=9; i++){
    document.write("<div>");
    document.write("<h2>" + i + "단</h2>")

    for(var j=1;j<=9;j++){
        document.write(i + "*" + j + "="+ i*j + "<br>");
    }
    document.write("<br>");
}
*/


//2~5단 (가로)
document.write("<tr>");
for(var dan2=2; dan2<=5; dan2++){
	document.write("<th> "+dan2+" 단 </th>");
}
document.write("</tr>");


document.write("<tr>");
for (var a=2; a<=5; a++) {  //시작 2 행 안에서 아래 반복문 모두 실행후 만족안할때 다시 3 부터~
   // document.write("<td>"+a+"단<br>");
    document.write("<td>");
    for (let b=1; b<=9; b++) {
        document.write("<br>"+a + "*" + b + "="+ a*b + "<br>");
    }
    document.write("</td>");
}
document.write("</tr>");


//6~9단
document.write("<tr>");
for(var dan6=6; dan6<=9; dan6++){
    document.write("<th> "+dan6+" 단 </th>");
}	
document.write("</tr>");

document.write("<tr>");
for (let c=6; c<=9; c++) {
  //  document.write("<td>"+c+"단<br>");
    document.write("<td>");
    for (let d=1; d<=9; d++) {
        document.write("<br>"+ c + "*" + d + "="+ c*d+ "<br>");
    }
    document.write("</td>");
   
}
document.write("</tr>");  
