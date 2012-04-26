window.onload=function(){function c(b,c,d,e,f){var g=a.path(""+c+"");g.attr({fill:""+d+"","stroke-width":0,"stroke-opacity":0,opacity:.5});g.node.id=""+b+"";this.buttonName=b;this.buttonLocation=c;this.buttonColor=d;this.buttonTitle=e;var h=f+20,i=a.text(40,h,""+e+"");i.attr({"text-anchor":"right","font-size":14,fill:"#ffffff"});g.hover(function(){var c=this,d=b.split("_");c.attr({opacity:1});$("#box"+d[1]+"_base").css({opacity:1});$("#box"+d[1]+"_back").css({opacity:1})},function(){var b=this;b.attr({opacity:.5});$("#box1_base, #box2_base, #box3_base, #box4_base, #box5_base").css({opacity:.5});$("#box1_back, #box2_back, #box3_back, #box4_back, #box5_back").css({opacity:.25})})}function i(b,c,d,e,f,g,h,i){var j=a.path("M "+c+" 280 l 20 10 l 40 0 l 0 -"+e+" l -20 -10 l 0 "+e+" z");j.attr({fill:""+h+"","stroke-width":0,opacity:.25});j.node.id=""+b+"_back";var k=a.path("M "+c+" "+d+" l 0 "+e+" l 20 10 l 40 0 l 0 -"+e+" l -20 -10 z");k.attr({fill:""+f+"","stroke-width":0,"stroke-opacity":0,opacity:.5});k.node.id=""+b+"_base";var l=a.path("M "+c+" "+d+" l 20 10 l 40 0 l -20 -10 z");l.attr({fill:""+g+"","stroke-width":0,"stroke-opacity":0,opacity:1});l.node.id=""+b+"_top";var m=a.path("M "+c+" "+d+" m 20 10 l 0 "+e+", M "+c+" "+d+" m 40 "+e+" l 20 10, M "+c+" "+d+" m 40 "+e+" l 20 10, M "+c+" "+d+" m 0 "+e+" l 40 0, M "+c+" "+d+" m 40 0 l 0 "+e+"");m.attr({"stroke-width":0,"stroke-opacity":0});m.node.id=""+b+"_faceline";var n=c+30,o=a.text(n,280,""+i+"");o.attr({"text-anchor":"right","font-size":12,fill:"#ffffff"});o.transform("...r-90");this.boxName=b;this.startposX=c;this.startposY=d;this.height=e;this.baseColor=f;this.topColor=g;this.title=i;this.backColor=h}function p(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,p,q,r;p=o.circle(a,b,g);p.attr("fill",h);n=o.path("M "+a+" "+b+" "+"l -"+e+", 0 "+"a"+e+","+e+" 0 0,0 "+c+","+d+" "+"z");n.attr("fill",f);n.attr("stroke-width","0");m=o.circle(a,b,i);m.attr("fill",j);q=o.text(a,b,k);q.attr({"font-size":20,fill:f});r=o.text(a+100,b,l);r.attr({"text-anchor":"start","font-size":18,fill:f})}var a=Raphael("chart_holder",960,300),b=a.path("M 20 40 l 0 280 l 220 0 l 0 -280 z");b.attr({fill:"#E0DAD9","stroke-width":0,"stroke-opacity":0,opacity:1});var d=new c("butt_1","M 30 50 l 0 40 l 200 0 l 0 -40","#D31D29","Photoshop/Illustrator",50),e=new c("butt_2","M 30 100 l 0 40 l 200 0 l 0 -40","#66607F","HTML/CSS",100),f=new c("butt_3","M 30 150 l 0 40 l 200 0 l 0 -40","#0187B7","PHP",150),g=new c("butt_4","M 30 200 l 0 40 l 200 0 l 0 -40","#C63F4F","JavaScript/JQuery",200),h=new c("butt_5","M 30 250 l 0 40 l 200 0 l 0 -40","#87AA06","Git",250),j=new i("box1",440,100,180,"#C63F4F","#D31D29","#7A0909","Photoshop/Illustrator"),k=new i("box2",520,80,200,"#817C96","#66607F","#7A0909","HTML/CSS"),l=new i("box3",600,200,80,"#1D9ACA","#0187B7","#7A0909","PHP"),m=new i("box4",680,130,150,"#D84F5F","#C63F4F","#7A0909","JavaScript/JQuery"),n=new i("box5",760,170,110,"#97BE0D","#87AA06","#7A0909","Git");$("#chart_holder text").removeAttr("style");var o=Raphael("piecharts",940,800),q,r,s,t,u,v,w,x;q=new p(100,100,104.8,76,80,"#C63F4F",80,"#1a1a1a",45,"#222","30%","Designing Something Amazing");r=new p(600,100,104.8,76,80,"#817C96",80,"#1a1a1a",45,"#222","30%","Developing Mind-Blowing Work");s=new p(100,300,32.8,64.8,80,"#1D9ACA",80,"#1a1a1a",45,"#222","15%","Learning Something Useful");t=new p(600,300,1.6,13.6,80,"#97BE0D",80,"#1a1a1a",45,"#222","10%","Being Inspired");u=new p(100,500,.8,8,80,"#C63F4F",80,"#1a1a1a",45,"#222","6%","Travel");v=new p(600,500,.8,8,80,"#817C96",80,"#1a1a1a",45,"#222","5%","Checking E-mail");w=new p(100,700,.8,8,80,"#1D9ACA",80,"#1a1a1a",45,"#222","2%","Reading RSS Feeds & Blogs");x=new p(600,700,.8,8,80,"#97BE0D",80,"#1a1a1a",45,"#222","2%","Catching Up on Social Media")};