var random = 1;            
var highway;
function del(data)
    {
        document.getElementById(data).remove();   
          document.getElementById('notification').innerHTML="Record Removed Successfully!";
    }

function update(data)
{
    document.getElementById('update_element').style.opacity = "1";
    document.getElementById('update_element').style.visibility = "visible";
    //document.getElementById(data).firstChild.innerHTML="madarpapu";
    //retirving old values
    document.getElementById('name_dup').value = document.getElementById(data).firstChild.innerHTML;
    document.getElementById('age_dup').value = document.getElementById(data).children[1].innerHTML;
    //updating new values
    highway = data;
    
}

function close2()
{
    var data = highway;
    document.getElementById('update_element').style.opacity = "0";
    document.getElementById(data).firstChild.innerHTML=document.getElementById('name_dup').value;
    document.getElementById(data).children[1].innerHTML=document.getElementById('age_dup').value;
    document.getElementById('update_element').style.visibility = "hidden";
    document.getElementById('notification').innerHTML="Record Updated Successfully!";
}

function pagedrop()
{
    document.getElementById('update_element').style.opacity = "0";
    document.getElementById('update_element').style.visibility = "hidden";
}

function Check()
    {
        document.getElementById('navh').style.visibility = "visible";
        document.getElementById('notification').innerHTML=" ";
        document.getElementById('notification').innerHTML="Recorded Added Successfully!";
        var variable = document.getElementById('mytable');
        variable.innerHTML+=    
            "<tr id='"+random+"'>" +
                "<td>" +
                    document.getElementById('Name').value +
                    "</td>" +
                         "<td>" +
                            document.getElementById('age').value +
                             "</td>" +
                                    "<td>"+
                                    '<span id = "editor" onclick='+"update('"+random+"')"+'>✎</span>'+
                                 "<td>" +
                                    '<button id="dell" onclick='+"del('"+random+"')"+'> 🗙 </button>'+
                                        "</td>"  +
                                            "</tr>"
          ;
          random++;
    }


    function closeit()
    {
        document.getElementById('navh').style.visibility = "hidden";
    }