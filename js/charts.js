window.onload = function () {

    var paper = Raphael("chart_holder", 960, 300);

    // NAVBAR PANEL

    var navpanel = paper.path("M 20 40 l 0 280 l 220 0 l 0 -280 z");

    navpanel.attr({
       fill: "#E0DAD9",
       "stroke-width": 0,
       "stroke-opacity": 0,
       opacity: 1
    });

    // CREATE NAVBAR FOR CHART


    function navbutton(buttonName,buttonLocation,buttonColor,buttonTitle,buttontextY){
        var butt = paper.path(""+buttonLocation+"");

        butt.attr({
           fill: ""+buttonColor+"",
           "stroke-width": 0,
           "stroke-opacity": 0,
           opacity: 0.5
        });

        butt.node.id = ""+buttonName+"";

        this.buttonName = buttonName;
        this.buttonLocation = buttonLocation;
        this.buttonColor=buttonColor;
        this.buttonTitle=buttonTitle;


        // show text

        var positionText = buttontextY + 20;

        var text = paper.text(40,positionText, ""+buttonTitle+"");
        text.attr({
           'text-anchor': 'right',
           'font-size': 14,
            fill: "#ffffff"
        });


        butt.hover(
            function mouseover(){

                var self = this;

                // get box number from path
                var boxname = buttonName.split("_");

                self.attr({opacity: 1});

                // turn opacity of matching box
                $("#box"+boxname[1]+"_base").css({opacity: 1});
                $("#box"+boxname[1]+"_back").css({opacity: 1});

            },

            function mouseout(){
                // reset opacity
                var self = this;
                self.attr({opacity: 0.5});

                $("#box1_base, #box2_base, #box3_base, #box4_base, #box5_base").css({opacity: 0.5});
                $("#box1_back, #box2_back, #box3_back, #box4_back, #box5_back").css({opacity: 0.25});
            }
        )


    } 

    // NAVBAR BUTTON CALLS

    var butt1 = new navbutton('butt_1','M 30 50 l 0 40 l 200 0 l 0 -40','#D31D29','Photoshop/Illustrator',50);

    var butt2 = new navbutton('butt_2','M 30 100 l 0 40 l 200 0 l 0 -40','#66607F','HTML/CSS',100);

    var butt3 = new navbutton('butt_3','M 30 150 l 0 40 l 200 0 l 0 -40','#0187B7','PHP',150);

    var butt4 = new navbutton('butt_4','M 30 200 l 0 40 l 200 0 l 0 -40','#C63F4F',"JavaScript/JQuery",200);

    var butt5 = new navbutton('butt_5','M 30 250 l 0 40 l 200 0 l 0 -40','#87AA06','Git',250);



    function cube(boxName,startposX,startposY,height,baseColor,topColor,backColor,title){

        // Shows 3D effect of box on right side (280 is the bottom of the graph)

        var back = paper.path("M "+startposX+" 280 l 20 10 l 40 0 l 0 -"+height+" l -20 -10 l 0 "+height+" z");

        back.attr({
           fill: ""+backColor+"",
           "stroke-width": 0,
//           "stroke-opacity": 0,
           opacity: .25
        });

        back.node.id = ""+boxName+"_back";

        // Provides background of the "back" of the box

        var base = paper.path("M "+startposX+" "+startposY+" l 0 "+height+" l 20 10 l 40 0 l 0 -"+height+" l -20 -10 z");

        base.attr({
           fill: ""+baseColor+"",
           "stroke-width": 0,
           "stroke-opacity": 0,
           opacity: .5
        });


        base.node.id = ""+boxName+"_base";

        // Shows top of box

        var top = paper.path("M "+startposX+" "+startposY+" l 20 10 l 40 0 l -20 -10 z");

        top.attr({
           fill: ""+topColor+"",
           "stroke-width": 0,
           "stroke-opacity": 0,
           opacity: 1
        });

        top.node.id = ""+boxName+"_top";


        // Show lines to keep 3D effect when opacity = 1

        var lines = paper.path("M "+startposX+" "+startposY+" m 20 10 l 0 "+height+", M "+startposX+" "+startposY+" m 40 "+height+" l 20 10, M "+startposX+" "+startposY+" m 40 "+height+" l 20 10, M "+startposX+" "+startposY+" m 0 "+height+" l 40 0, M "+startposX+" "+startposY+" m 40 0 l 0 "+height+"");

        lines.attr({
           "stroke-width": 0,
           "stroke-opacity": 0
        });

        lines.node.id = ""+boxName+"_faceline";


        // show text

        var positionText = startposX + 30;

        var text = paper.text(positionText,280, ""+title+"");
        text.attr({
           'text-anchor': 'right',
           'font-size': 12,
            fill: "#ffffff"
        });

        // rotate -90 degrees
        text.transform("...r-90");


        // properties of box to cube

        this.boxName = boxName;
        this.startposX=startposX;
        this.startposY=startposY;
        this.height=height;
        this.baseColor=baseColor;
        this.topColor=topColor;
        this.title=title;
        this.backColor=backColor;


    }


    // BOX CALLS

    var box1 = new cube('box1',440,100,180,'#C63F4F','#D31D29','#7A0909','Photoshop/Illustrator');

    var box2 = new cube('box2',520,80,200,'#817C96','#66607F','#7A0909','HTML/CSS');

    var box3 = new cube('box3',600,200,80,'#1D9ACA','#0187B7','#7A0909','PHP');

    var box4 = new cube('box4',680,130,150,'#D84F5F','#C63F4F','#7A0909',"JavaScript/JQuery");

    var box5 = new cube('box5',760,170,110,'#97BE0D','#87AA06','#7A0909','Git');

    // Remove standard Raphael text style settings
    $("#chart_holder text").removeAttr('style');


   // ---------------------------------------------------  Spend Time Doing Pie Charts ----------------------------------------------- //

    var paper_piechart = Raphael("piecharts", 960, 800);

    function Piechart(posX,posY,pointX,pointY,pieceRadius,pieceColor,fullcircleRadius,fullcircleColor,innercircleRadius,innercircleColor, chartPercentage, chartText){
//        var piece,posX,posY,pointX,pointY,pieceRadius,pieceColor;
//        var fullcircle,fullcircleRadius,fullcircleColor;
//        var innercircle,innercircleRadius,innercircleColor;
        var innercircle, piece,fullcircle;
        var shownumber, showtext;

        fullcircle = paper_piechart.circle(posX, posY, fullcircleRadius);
        fullcircle.attr("fill", fullcircleColor);

        piece = paper_piechart.path("M "+posX+" "+posY+" " + //position from the center of circle x y
            "l -"+pieceRadius+", 0 " + // draw starting line x,y
            "a"+pieceRadius+","+pieceRadius+" 0 0,0 "+pointX+","+pointY+" " + //arc -- starting arc
            "z" // complete the path
        );
        piece.attr("fill",pieceColor);
        piece.attr("stroke-width","0");

        // move based on x,y coords. and rotate 166 degrees
        //piece.transform("t45,-85r166");

        innercircle = paper_piechart.circle(posX, posY, innercircleRadius);
        innercircle.attr("fill", innercircleColor);

        shownumber = paper_piechart.text(posX,posY, chartPercentage);
        shownumber.attr({
           'font-size': 20,
            fill: pieceColor
        });

        showtext = paper_piechart.text(posX+100,posY, chartText);
        showtext.attr({
            'text-anchor': 'start',
            'font-size': 18,
            fill: pieceColor
        });

    }

    var chart1,chart2,chart3,chart4,chart5,chart6,chart7,chart8;

    //chart1 = 30%
    chart1 =new Piechart(100,100,104.8,76,80,'#C63F4F',80,'#1a1a1a',45,'#222','30%','Designing Something Amazing');

    //chart2 = 30%
    chart2 =new Piechart(600,100,104.8,76,80,'#817C96',80,'#1a1a1a',45,'#222','30%','Developing Mind-Blowing Work');

    //chart3 = 15%
    chart3 =new Piechart(100,300,32.8,64.8,80,'#1D9ACA',80,'#1a1a1a',45,'#222','15%','Learning Something Useful');

    // chart = 10%
    chart4 =new Piechart(600,300,1.6,13.6,80,'#97BE0D',80,'#1a1a1a',45,'#222','10%','Being Inspired');

    // chart = 6%
    chart5 =new Piechart(100,500,0.8,8,80,'#C63F4F',80,'#1a1a1a',45,'#222','6%','Travel');

    // chart = 5%
    chart6 =new Piechart(600,500,0.8,8,80,'#817C96',80,'#1a1a1a',45,'#222','5%','Checking E-mail');

    // chart = 2%
    chart7 =new Piechart(100,700,0.8,8,80,'#1D9ACA',80,'#1a1a1a',45,'#222','2%','Reading RSS Feeds & Blogs');

    // chart = 2%
    chart8 =new Piechart(600,700,0.8,8,80,'#97BE0D',80,'#1a1a1a',45,'#222','2%','Catching Up on Social Media');

};
