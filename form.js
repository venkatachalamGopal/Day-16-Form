var list1=[];
var list2=[];
var list3=[];
var list4=[];
var list5=[];
var list6=[];
var list7=[];
var list8=[];
var list9=[];



var x=0;
var n=1;

function submitform(){
    list1[x]=document.getElementById('fname').value;
    list2[x]=document.getElementById('lname').value;
    list3[x]=document.getElementById('address').value;
    list4[x]=document.getElementById('gender').value;
    list5[x]=document.getElementById('age').value;
    list6[x]=document.getElementById('pincode').value;
    list7[x]=document.getElementById('food').value;
    list8[x]=document.getElementById('state').value;
    list9[x]=document.getElementById('country').value;




    let show=document.getElementById('show');
    let newRow=show.insertRow(n);

    var cell1=newRow.insertCell(0)
    var cell2=newRow.insertCell(1)
    var cell3=newRow.insertCell(2)
    var cell4=newRow.insertCell(3)
    var cell5=newRow.insertCell(4)
    var cell6=newRow.insertCell(5)
    var cell7=newRow.insertCell(6)
    var cell8=newRow.insertCell(7)
    var cell9=newRow.insertCell(8)


    cell1.innerHTML=list1[x];
    cell2.innerHTML=list2[x]
    cell3.innerHTML=list3[x]
    cell4.innerHTML=list4[x]
    cell5.innerHTML=list5[x];
    cell6.innerHTML=list6[x]
    cell7.innerHTML=list7[x]
    cell8.innerHTML=list8[x]
    cell9.innerHTML=list9[x]


    x++;
    n++
}