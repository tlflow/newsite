/*******

	***	Anchor Slider by Cedric Dugas   ***
	*** Http://www.position-absolute.com ***
	
	Never have an anchor jumping your content, slide it.

	Don't forget to put an id to your anchor !
	You can use and modify this script for any project you want, but please leave this comment as credit.
	
*****/$(document).ready(function(){$("a.anchorLink").anchorAnimate()});jQuery.fn.anchorAnimate=function(a){a=jQuery.extend({speed:1100},a);return this.each(function(){var b=this;$(b).click(function(c){c.preventDefault();var d=window.location.href,e=$(b).attr("href");console.log(b);var f=$(e).offset().top;$("html:not(:animated),body:not(:animated)").animate({scrollTop:f},a.speed,function(){window.location.hash=e});return!1})})};