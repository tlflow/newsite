window.onload = function () {

    var paper = Raphael("piecharts", 960, 800);

    function Piechart(posX,posY,pointX,pointY,pieceRadius,pieceColor,fullcircleRadius,fullcircleColor,innercircleRadius,innercircleColor){
        var piece,posX,posY,pointX,pointY,pieceRadius,pieceColor;
        var fullcircle,fullcircleRadius,fullcircleColor;
        var innercircle,innercircleRadius,innercircleColor;

        fullcircle = paper.circle(posX, posY, fullcircleRadius);
        fullcircle.attr("fill", fullcircleColor);

        piece = paper.path("M "+posX+" "+posY+" " + //position from the center of circle x y
            "l -"+pieceRadius+", 0 " + // draw starting line x,y
            "a"+pieceRadius+","+pieceRadius+" 0 0,0 "+pointX+","+pointY+" " + //arc -- starting arc
            "z" // complete the path
        );
        piece.attr("fill",pieceColor);
        piece.attr("stroke-width","0");

        // move based on x,y coords. and rotate 166 degrees
        //piece.transform("t45,-85r166");

        innercircle = paper.circle(posX, posY, innercircleRadius);
        innercircle.attr("fill", innercircleColor);
    }

    var chart1,chart2,chart3,chart4,chart5,chart6,chart7,chart8;

    //chart1 = 30%
    chart1 =new Piechart(100,100,104.8,76,80,'#C63F4F',80,'#1a1a1a',45,'#999');

    //chart2 = 30%
    chart2 =new Piechart(500,100,104.8,76,80,'#817C96',80,'#1a1a1a',45,'#999');

    //chart3 = 15%
    chart3 =new Piechart(100,300,32.8,64.8,80,'#1D9ACA',80,'#1a1a1a',45,'#999');

    // chart = 10%
    chart4 =new Piechart(500,300,1.6,13.6,80,'#D84F5F',80,'#1a1a1a',45,'#999');

    // chart = 6%
    chart5 =new Piechart(100,500,.8,8,80,'#E8A240',80,'#1a1a1a',45,'#999');

    // chart = 5%
    chart6 =new Piechart(500,500,.8,8,80,'#97BE0D',80,'#1a1a1a',45,'#999');

    // chart = 2%
    chart7 =new Piechart(100,700,.8,8,80,'#97BE0D',80,'#1a1a1a',45,'#999');

    // chart = 2%
    chart8 =new Piechart(500,700,.8,8,80,'#97BE0D',80,'#1a1a1a',45,'#999');

//    // Remove standard Raphael text style settings
//    $("#circles text").removeAttr('style');

};
