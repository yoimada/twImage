(function (){

//javascript:(function(){var s=document.createElement('script');s.src='https://~~.js';document.body.appendChild(s);})()

var t = new Array();
AddArray("<html><body>",t);
AddArray("<h1>Twitter images - v1.0.5 </h1>",t);
AddArray("<div style='background-color:#FAA'><h1>pixiv</h1>",t);

/*pixiv*/
arr=document.getElementsByClassName("twitter-timeline-link");
if(arr.length!=0)
{
	for(var i=0;i<arr.length;i++)
	{
		var r=arr[i].getAttribute("title");
		if( r && ((r.indexOf("pixiv")!= -1) || (r.indexOf("twipple")!= -1)))
			AddArray("<a href='"+r+"' target=_blank>"+r+"</a><BR>",t);
	}
}

/*RT*/
AddArray("</div><div style='background-color:#AFF'><h1>imageBox</h1>",t);

var arr=document.getElementsByClassName("multi-photo");
if(arr.length!=0)
{
	for(var i=0;i<arr.length;i++)
	{
		var ch=arr[i].children;
		for(var j=0;j<ch.length;j++)
		{
			v=ch[j].getAttribute("src");
			//if(v && v.lastIndexOf(":large")== -1)v+=":large";
			if(v && v.lastIndexOf(":large")== -1)v+=":orig";
			AddArray("<a href="+v+" target=_blank><img src="+v+"></a><BR>",t);
		}
	}
}

/*img*/
AddArray("</div><div style='background-color:#AFA'><h1>img</h1>",t);
var arr=document.getElementsByClassName("media-thumbnail");
if(arr.length!=0)
{
	for(var i=0;i<arr.length;i++)
	{
		v=arr[i].getAttribute("data-resolved-url-large");
		//if(v && v.lastIndexOf(":large")== -1)v+=":large";
		if(v && v.lastIndexOf(":large")== -1)v+=":orig";

		if(arr[i].getAttribute("href"))
		{
			AddArray("<a href=https:"+arr[i].getAttribute("href")+" target=_blank><img src="+v+"></a><BR>",t);
		}
		else
		{
			AddArray("<a href="+v+" target=_blank><img src="+v+"></a><BR>",t);
		}
	}
}

AddArray("</div><div style='background-color:#AAF'><h1>hidden</h1>",t);
var k=window.open();
var d=k.document;
if(!d){message.alert("fail to open Window");}

/*hidden*/
var arr=document.getElementsByClassName("has-cards");
if(arr.length!=0)
{
	var g=d.createElement("div");
	g.setAttribute("style","visibility:hidden");
	d.body.insertBefore(g,null);
	for(var i=0;i<arr.length;i++)
	{
		var s=d.createElement("div");
		s.innerHTML=arr[i].getAttribute("data-expanded-footer");
		g.appendChild(s);
	}
	var u=g.getElementsByClassName("media-thumbnail");
	if(u.length!=0)
	{
		for(var j=0;j<u.length;j++)
		{
			v=u[j].getAttribute("data-url");
			//if(v && v.lastIndexOf(":large")== -1)v+=":large";
			if(v && v.lastIndexOf(":large")== -1)v+=":orig";
			AddArray("<a href=https:"+u[j].getAttribute("href")+" target=_blank><img src="+v+"></a><BR>",t);
		}
	}
	g.innerHTML="";
}
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
