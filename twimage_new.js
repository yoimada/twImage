(function ()
{
    //javascript:(function(){var s=document.createElement('script');s.src='https://~~.js';document.body.appendChild(s);})()

    a = new Date();
    now = a.getFullYear() + "/" + (a.getMonth() + 1) + "/" + a.getDate() + " " + a.getHours() + ":" + a.getMinutes();
    //title = a.getFullYear() +""+ (a.getMonth() + 1) +""+ a.getDate() + "_" + a.getHours() + ".html";

    var t = new Array();
    //AddArray("<html><head><title>" + title + "</title></head><body>", t);
    AddArray("<html><body><h1>Twitter images - v3.1 </h1><div align='right'>"+now+"</div><div style='background-color:#AFA'><h1>img</h1>", t);

    var arr = document.getElementsByClassName("css-9pa8cd");
    var imgArr = new Array();
    if (arr.length != 0)
    {
        for (var i = 0; i < arr.length; i++)
        {
            var url0 = arr[i].src;
            var img0 = "";
            var img1 = "";

            //exclude
            if (
                (url0.indexOf("abs-0.twimg.com") != -1) ||
                (url0.indexOf("profile_images") != -1) ||
                (url0.indexOf("amplify_video_thumb") != -1) ||
                (url0.indexOf("hashflags") != -1) ||
                (url0.indexOf("semantic_core_img") != -1)
            )
                continue;

            if (url0.indexOf("format=jpg") != -1)
                img0 = url0.replace(/format.+/, "format=jpg&name=orig");
            else if (url0.indexOf("format=png") != -1)
                img0 = url0.replace(/format.+/, "format=png&name=orig");
            else if (url0.indexOf("format=webp") != -1)
            {
                img0 = url0.replace(/format.+/, "format=png&name=orig");
                img1 = url0.replace(/format.+/, "format=jpg&name=orig");
            }
            else
                img0 = url0;
            

            imgArr.push(img0);
            AddArray("<img src=" + img0 + "><BR>", t);
            
            if (!img1)
            {
                imgArr.push(img1);
                AddArray("<img src=" + img1 + "><BR>", t);                
            }
        }
    }

    var k = window.open();
    var d = k.document;
    if (!d) { message.alert("fail to open Window"); }

    AddArray("</div><BR><div style='background-color:#FAA'><h1>list</h1>",t);
    AddArray("<pre>"+imgArr.join("\n")+"</pre>",t);
    AddArray("</div><BR>endl</body></html>", t);
    d.writeln(t.join("\n"));
    d.close();
}
)();
function AddArray(needle, array)
{
    for (i in array)
        if (array[i] == needle)
            return;
    array.push(needle);
}
