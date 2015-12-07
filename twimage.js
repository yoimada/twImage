(function (){

//javascript:(function(){var s=document.createElement('script');s.src='https://~~.js';document.body.appendChild(s);})()

var t = new Array();
AddArray("<html><body>",t);
AddArray("<h1>Twitter images - v2.1 </h1>",t);
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
			 )
		)
			AddArray("<a href='"+r+"' target=_blank>"+r+"</a><BR>",t);
	}
}

/*link data-expanded-url*/
arr=document.getElementsByClassName("data-expanded-url");
if(arr.length!=0)
{
	for(var i=0;i<arr.length;i++)
	{
		var r=arr[i].getAttribute("title");
		if( r )
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
		//link
		pare=arr[i].parentNode.parentNode.parentNode.parentNode.getAttribute("href");
		//img
		var ch=arr[i].children;
		for(var j=0;j<ch.length;j++)
		{
			v=ch[j].getAttribute("src");
			if(v && v.lastIndexOf(":large")== -1)v+=":orig";

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
}

/*RT js-quote-photo*/
AddArray("</div><div style='background-color:#BDB'><h1>RT</h1>",t);
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

/*RT Open link u-block*/
AddArray("</div><div style='background-color:#DBB'><h1>RT</h1>",t);
var arr=document.getElementsByClassName("u-block");
if(arr.length!=0)
{
	for(var i=0;i<arr.length;i++)
	{
		//image
		v=arr[i].getAttribute("src");
		if ( !v ) continue;
		//link
		pare=arr[i].parentNode.parentNode.parentNode.parentNode.getAttribute("href");

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
