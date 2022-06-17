var t1=document.getElementById('add');
var res=document.getElementById('res');

function btn(){
    var s=String(t1.value);


    res.innerHTML+=`<ol><input type="checkbox">${s}</input><ol>`;
}