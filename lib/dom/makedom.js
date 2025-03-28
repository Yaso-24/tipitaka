function makeElement(elName, obj) {
    var el = makeAtt(elName, obj)
    return el;
}

function makeAtt(elName, obj) {
    var el = document.createElement(elName)
    var attNames = Object.keys(obj);
    var txt;
    for (var i = 0; i < attNames.length; i++) {
        if (!(attNames[i] == 'innerHTML' || attNames[i] == 'innerText' || attNames[i] == 'textContent')) {
            el.setAttribute(attNames[i], obj[attNames[i]]);
        } else {
            txt = attNames[i]
            // console.log(txt)
        }
        //  console.log(el)
    }

    switch (txt) {
        case "innerHTML":
            el.innerHTML = obj.innerHTML;
            break;
        case "innerText":
            el.innerText = obj.innerText;
            break;
        case "textContent":
            el.textContent = obj.textContent;
            break;
        default:
            el.textContent = '';
            break;
    }
    return el;
}

// sort array of object by keys
function sortByKey(array, key) {
    return array.sort(function (a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    }
    );
}

//call time function
function getTime() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    return t;
}

//toLocaleDateString() to total time in milisceond
function localDateToTotalTime(localDate) {
    var d = new Date(localDate);
    var t = d.getTime();
    return t;
} 

var miliTime = localDateToTotalTime('02/01/2010')
var miliTime2 = localDateToTotalTime('02/01/2020')
console.log(miliTime)
if(miliTime > miliTime2){
    console.log('miliTime is greater than miliTime2')
}else if(miliTime < miliTime2){
    console.log('miliTime is less than miliTime2')
}



