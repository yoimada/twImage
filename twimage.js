(function (){

//javascript:(function(){var s=document.createElement('script');s.src='https://~~.js';document.body.appendChild(s);})()

var t = new Array();
AddArray("<html><body>",t);
AddArray("<h1>Twitter images - v2.3 </h1>",t);
a = new Date();
now = a.getFullYear() + "/" + (a.getMonth()+1) + "/" + a.getDate() + " " + a.getHours() + ":"+a.getMinutes();
AddArray("<div align='right'>"+ now +"</div>",t);
AddArray("<div style='background-color:#FAA'><h1>pixiv</h1>",t);

/*pixiv*/
arr=document.getElementsByClassName("twitter-timeline-link");
if(arr.length!=0)
{
	for(var i=0;i<arr.length;i++)
	{
		var r=arr[i].getAttribute("title");
		if( r && (
				(r.indexOf("pixiv")!= -1) 
				|| (r.indexOf("twipple")!= -1)
				|| (r.indexOf("twitpic")!= -1)
				|| (r.indexOf("nijie")!= -1)
				|| (r.indexOf("moments")!= -1)
			 )
		)
			AddArray("<a href='"+r+"' target=_blank>"+r+"</a><BR>",t);
	}
}

/*moments*/
AddArray("</div><div style='background-color:#AAF'><h1>moments</h1>",t);
var arr=document.getElementsByClassName("MomentMediaItem-entity--image");
if(arr.length!=0)
{
	for(var i=0;i<arr.length;i++)
	{
		//image
		v=arr[i].getAttribute("src");
        if (v) v=v.replace(":large",":orig");
        if ( v && v.indexOf(":orig") == -1 ) v=v+":orig";

		//link
        //v2 = arr[i].getAttribute("data-media-id");
		AddArray("<a href="+v+" target=_blank><img src="+v+"></a><BR>",t);
	}
}
	
/*RT js-quote-photo*/
AddArray("</div><div style='background-color:#AFF'><h1>RT</h1>",t);
var arr=document.getElementsByClassName("js-quote-photo");
if(arr.length!=0)
{
	for(var i=0;i<arr.length;i++)
	{
		//image
		v=arr[i].getAttribute("data-image-url");
		if(v && v.lastIndexOf(":large")== -1)v+=":orig";

		//link
		//normal
		pare=arr[i].parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("href");
		//image-box
		if(!pare) pare=arr[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("href");

		if(pare)
		{
			AddArray("<a href=https://twitter.com"+pare+" target=_blank><img src="+v+"></a><BR>",t);
		}
		else
		{
			AddArray("<a href="+v+" target=_blank><img src="+v+"></a><BR>",t);
		}
	}
}


/*img*/
AddArray("</div><div style='background-color:#AFA'><h1>img</h1>",t);
var arr=document.getElementsByClassName("js-adaptive-photo");
if(arr.length!=0)
{
	for(var i=0;i<arr.length;i++)
	{
		//image
		v=arr[i].getAttribute("data-image-url");
		if(v && v.lastIndexOf(":large")== -1)v+=":orig";

		//link
		//normal
		pare=arr[i].parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("data-permalink-path");
		//image-box
		if(!pare) pare=arr[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("data-permalink-path");
		if(!pare) pare=arr[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("data-permalink-path");
		if(!pare) pare=arr[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("data-permalink-path");
		if(!pare) pare=arr[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("data-permalink-path");

		if(pare)
		{
			AddArray("<a href=https://twitter.com"+pare+" target=_blank><img src="+v+"></a><BR>",t);
		}
		else
		{
			AddArray("<a href="+v+" target=_blank><img src="+v+"></a><BR>",t);
		}
	}
}

var k=window.open();
var d=k.document;
if(!d){message.alert("fail to open Window");}

AddArray("</div><BR>endl",t);
AddArray("</body></html>",t);
d.writeln(t.join("\n"));
d.close();
}
)();
function AddArray(needle,array)
{
	for( i in array)
		if ( array[i] == needle )
			return;
	array.push(needle);
	return;
}
