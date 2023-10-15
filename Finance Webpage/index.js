var amount = document.getElementById("amount");
var description = document.getElementById("description");
var mode = document.querySelectorAll('input[type="radio"]');
var btn = document.querySelector("button");
var selectedMode;
var currentBalance= document.querySelector("a");
var table =document.querySelector("table");
function selectedRadio(){
    for(i=0;i<mode.length;i++){
        if(mode[i].checked){
            selectedMode= mode[i].value;
        }
    }
};
btn.addEventListener("click",function(){
    selectedRadio();
    //console.log(amount.value);
    //console.log(description.value);
    //console.log(selectedMode);
    //console.log(currentBalance.textContent);
    if(selectedMode=='credit'){
        console.log(parseInt(currentBalance.textContent)+parseInt(amount.value)+" credit ");
        currentBalance.textContent= parseInt(currentBalance.textContent)+parseInt(amount.value);
    }else if(selectedMode=='debit'){
        console.log(parseInt(currentBalance.textContent)-parseInt(amount.value)+" debit");
        currentBalance.textContent= parseInt(currentBalance.textContent)-parseInt(amount.value);
    }

    var amtElement= document.createElement("td");
    var amtData = document.createTextNode(parseInt(amount.value));
    //console.log(amtData);
    amtElement.appendChild(amtData);

    var descElement= document.createElement("td");
    var descData = document.createTextNode(description.value);

    descElement.appendChild(descData);

    var modeElement= document.createElement("td");
    var modeData = document.createTextNode(selectedMode);

    modeElement.appendChild(modeData);

    var rowEle =document.createElement("tr");
    rowEle.appendChild(descElement);
    rowEle.appendChild(modeElement);
    rowEle.appendChild(amtElement);
    console.log(rowEle);
    table.appendChild(rowEle);

});
