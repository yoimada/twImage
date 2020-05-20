(function ()
{
    //javascript:(function(){var s=document.createElement('script');s.src='https://~~.js';document.body.appendChild(s);})()

    var t = new Array();
    AddArray("<html><body>", t);
    AddArray("<h1>Twitter images - v3.0 </h1>", t);
    a = new Date();
    now = a.getFullYear() + "/" + (a.getMonth() + 1) + "/" + a.getDate() + " " + a.getHours() + ":" + a.getMinutes();
    AddArray("<div align='right'>" + now + "</div>", t);
    AddArray("<div style='background-color:#AFA'><h1>img</h1>", t);

    var arr = document.getElementsByClassName("css-9pa8cd");
    if (arr.length != 0)
    {
        for (var i = 0; i < arr.length; i++)
        {
            var url0 = arr[i].src;
            var img0 = "";
            if ((url0.indexOf("abs-0.twimg.com") != -1) || (url0.indexOf("profile_images") != -1) )
                continue;
            if (url0.indexOf("format=jpg") != -1)
                img0 = url0.replace(/format.+/, "format=jpg&name=orig");
            else if (url0.indexOf("format=png") != -1)
                img0 = url0.replace(/format.+/, "format=png&name=orig");
            else
                img0 = url0;
            AddArray("<img src=" + img0 + "><BR>", t);
        }
    }

    var k = window.open();
    var d = k.document;
    if (!d) { message.alert("fail to open Window"); }

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
    return;
}