window.onload = function () {

    var paper = Raphael("circles", 960, 800);

    /*
    // Creates circle at x = 200, y = 200, with radius 100
    var circle1 = paper.circle(150, 150, 50);

    // Sets the fill attribute of the circle to red (#f00)
    circle1.node.id = "circle1";
    circle1.attr("fill", "#f00");
    circle1.attr("stroke", "#999");
    circle1.attr("stroke-width", "30");
    */

    // Creates circle at x = 200, y = 200, with radius 100
    var circle2 = paper.path("M 250 200 A 5 5 0 10 10 5 5 Z");

    circle2.node.id = "circle2";
    circle2.attr("fill", "#f00");
    circle2.attr("stroke", "#999");
    circle2.attr("stroke-width", "10");

    

//    function piecharts(chartName,startposX,startposY,dataColor,remainderColor){
//
//        var back = paper.path("M "+startposX+" 280 l 20 10 l 40 0 l 0 -"+height+" l -20 -10 l 0 "+height+" z");
//
//        back.attr({
//           fill: ""+backColor+"",
//           "stroke-width": 0,
////           "stroke-opacity": 0,
//           opacity: .25
//        });
//
//        back.node.id = ""+boxName+"_back";
//
//        // Provides background of the "back" of the box
//
//        var base = paper.path("M "+startposX+" "+startposY+" l 0 "+height+" l 20 10 l 40 0 l 0 -"+height+" l -20 -10 z");
//
//        base.attr({
//           fill: ""+baseColor+"",
//           "stroke-width": 0,
//           "stroke-opacity": 0,
//           opacity: .5
//        });
//
//
//        base.node.id = ""+boxName+"_base";
//
//        // Shows top of box
//
//        var top = paper.path("M "+startposX+" "+startposY+" l 20 10 l 40 0 l -20 -10 z");
//
//        top.attr({
//           fill: ""+topColor+"",
//           "stroke-width": 0,
//           "stroke-opacity": 0,
//           opacity: 1
//        });
//
//        top.node.id = ""+boxName+"_top";
//
//
//        // Show lines to keep 3D effect when opacity = 1
//
//        var lines = paper.path("M "+startposX+" "+startposY+" m 20 10 l 0 "+height+", M "+startposX+" "+startposY+" m 40 "+height+" l 20 10, M "+startposX+" "+startposY+" m 40 "+height+" l 20 10, M "+startposX+" "+startposY+" m 0 "+height+" l 40 0, M "+startposX+" "+startposY+" m 40 0 l 0 "+height+"");
//
//        lines.attr({
//           "stroke-width": 0,
//           "stroke-opacity": 0
//        });
//
//        lines.node.id = ""+boxName+"_faceline";
//
//
//        // show text
//
//        var positionText = startposX + 30;
//
//        var text = paper.text(positionText,280, ""+title+"");
//        text.attr({
//           'text-anchor': 'right',
//           'font-size': 12,
//            fill: "#ffffff",
//            rotation: -90
//        });
//
//        // rotate -90 degrees
//        text.transform("...r-90");
//
//
//        // properties of box to chart
//
//        this.chartName = boxName;
//        this.startposX=startposX;
//        this.startposY=startposY;
//        this.dataColor=baseColor;
//        this.remainderColor=topColor;
//
//    }
//
//
//    // BOX CALLS
//
//    var chart1 = new piecharts('box1',440,100,180,'#C63F4F','#D31D29','#7A0909','Photoshop/Illustrator');
//
//    var chart2 = new piecharts('box2',520,80,200,'#817C96','#66607F','#7A0909','HTML/CSS');
//
//    var chart3 = new piecharts('box3',600,200,80,'#1D9ACA','#0187B7','#7A0909','PHP');
//
//    var chart4 = new piecharts('box4',680,130,150,'#D84F5F','#C63F4F','#7A0909',"JavaScript/JQuery");
//
//    var chart5 = new piecharts('box5',760,170,110,'#97BE0D','#87AA06','#7A0909','Git');
//
//    // Remove standard Raphael text style settings
//    $("#circles text").removeAttr('style');

};
