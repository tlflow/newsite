window.onload = function () {

    var paper = Raphael("chart_holder", 960, 300);

    // NAVBAR PANEL

    var navpanel = paper.path("M 20 40 l 0 280 l 220 0 l 0 -280 z");

    navpanel.attr({
       fill: "#E0DAD9",
       "stroke-width": 0,
       opacity: 1
    });

    // CREATE NAVBAR FOR CHART

    
    function navbutton(buttonName,buttonLocation,buttonColor,buttonTitle,buttontextY){
        var butt = paper.path(""+buttonLocation+"");

        butt.attr({
           fill: ""+buttonColor+"",
           "stroke-width": 0,
           opacity: .5
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
           opacity: .25
        });

        back.node.id = ""+boxName+"_back";

        // Provides background of the "back" of the box

        var base = paper.path("M "+startposX+" "+startposY+" l 0 "+height+" l 20 10 l 40 0 l 0 -"+height+" l -20 -10 z");

        base.attr({
           fill: ""+baseColor+"",
           "stroke-width": 0,
           opacity: .5
        });


        base.node.id = ""+boxName+"_base";

        // Shows top of box

        var top = paper.path("M "+startposX+" "+startposY+" l 20 10 l 40 0 l -20 -10 z");

        top.attr({
           fill: ""+topColor+"",
           "stroke-width": 0,
           opacity: 1
        });

        top.node.id = ""+boxName+"_top";


        // Show lines to keep 3D effect when opacity = 1

        var lines = paper.path("M "+startposX+" "+startposY+" m 20 10 l 0 "+height+", M "+startposX+" "+startposY+" m 40 "+height+" l 20 10, M "+startposX+" "+startposY+" m 40 "+height+" l 20 10, M "+startposX+" "+startposY+" m 0 "+height+" l 40 0, M "+startposX+" "+startposY+" m 40 0 l 0 "+height+"");

        lines.attr({
           "stroke-width": 0
        });

        lines.node.id = ""+boxName+"_faceline";

        // show text

        var positionText = startposX + 30;

        var text = paper.text(positionText,280, ""+title+"");
        text.attr({
           'text-anchor': 'right',
           'font-size': 14,
            fill: "#ffffff",
            rotation: -90
        });

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


    // JQUERY MouseOver commands

    $("path").hover(
      function overBox() {

            // get box name from path
            var tryme = $(this).attr("id");
            var boxname = tryme.split("_");

            // if user uses navbar (like he should)
            if(boxname[0]=="butt"){
                $(this).css({opacity: 1});

                // turn opacity of matching boxname
                $("#box"+boxname[1]+"_base").css({opacity: 1});
                $("#box"+boxname[1]+"_back").css({opacity: 1});
            }

            // if user mouseover chart items instead still change opacity
            $("#"+boxname[0]+"_base").css({opacity: 1});
            $("#"+boxname[0]+"_back").css({opacity: 1});

      },
      function notoverBox() {

            // get box name from path
            var pathName = $(this).attr("id");
            var boxname = pathName.split("_");

            var realboxname = boxname[0];


            // if user uses navbar (like he should)
            if(boxname[0]=="butt"){
                $(this).css({opacity: .5});

                // turn opacity of matching boxname
                $("#box"+boxname[1]+"_base").css({opacity: .5});
                $("#box"+boxname[1]+"_back").css({opacity: .25});

            }

            // if user mouseover chart items instead still change opacity
            $("#box"+boxname[1]+"_base").css({opacity: .5});
            $("#box"+boxname[1]+"_back").css({opacity: .25});


      }
    );

};
