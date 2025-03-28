function bold() {
    var bld = document.querySelectorAll('.bld')

    for (var i = 0; i < bld.length; i++) {
        var txt = bld[i].innerHTML
        bld[i].insertAdjacentHTML('afterend', `<b>${txt}</b>`)
        bld[i].remove()

        if (i == bld.length - 1) {
            paranum()
        }

    }
    if (bld.length === 0) {
        paranum()
        // console.log(bld.length)
    }
}

// function bodytext() {
//     var btxt = document.querySelectorAll('.bodytext')
//     for (var i = 0; i < btxt.length; i++) {
//         var txt = btxt[i].innerHTML
//         btxt[i].className = 'bt'

//         btxt[i].insertAdjacentHTML('afterend', `bt_${txt}` + "_<br>")
//         btxt[i].remove()
//         if (i == btxt.length - 1) {

//         }

//     }
// }

function saveData() {
    localStorage.setItem('daaa', JSON.stringify(document.querySelector('#loaddata').innerHTML))
}


function paranum() {
    var pnum = document.querySelectorAll('.paranum')
    var aPara = document.querySelectorAll('a[name]')

    console.log("2 tag para lenth => " + (pnum.length == aPara.length))


    console.log("paranum => " + pnum.length)
    console.log("apara => " + aPara.length)
    var aParaOnly = []
    for (var i = 0; i < aPara.length; i++) {
        if (aPara[i].getAttribute('name').includes('para')) {
            aParaOnly.push(aPara[i].getAttribute('name'))
            aPara[i].remove()
        }
    }
    console.log("p " + pnum.length)
    console.log("ap onlly " + aParaOnly.length)
    console.log(pnum.length == aParaOnly.length)
    //console.log(aParaOnly)


    for (var k = 0; k < pnum.length; k++) {
        var txt = pnum[k].innerHTML
        //pnum[k].insertAdjacentHTML('afterend', `bt_${txt}</br>`)
        //pnum[k].remove()
        var aparanum = aParaOnly[k].replace('para', '')
        var convertPnum = numberReplace(bToe, pnum[k].textContent)
        if (aparanum == convertPnum.trim()) {
            pnum[k].insertAdjacentHTML('afterend', `<a class="pn" id="p${convertPnum}">${txt}</a>`)
            pnum[k].remove()
            console.log("para match => " + true)
        } else {
            console.log(aparanum + "not match" + pnum[k].textContent)
        }



    }
    // allel()



}



// var doc = document.querySelector('.kk')
// console.log(doc)
//paranum()

// var all = document.querySelectorAll('.title, .hangnum, .subhead, .subsubhead, .centered, .gatha, .gatha0, .gatha1, .gatha2, .gatha3, .gathalast, .unindented, .indent')



function allel() {
    var all = document.querySelectorAll('p')
    for (var i = 0; i < all.length; i++) {
        var key = all[i].getAttribute('class')
        switch (key) {
            case 'title':
                var txt = all[i].innerHTML

                set('tl')
                all[i].className = 'tl'
                break;
            case 'subhead':

                set('sh')
                all[i].className = 'sh'
                break;
            case 'subsubhead':
                set('ssh')
                all[i].className = 'ssh'
                break;
            case 'centered':

                set('ct')
                all[i].className = 'ct'
                break;
            case 'gatha':
                set('g')
                all[i].className = 'g'
                break;
            case 'gatha0':

                set('g0')
                all[i].className = 'g0'
                break;

            case 'gatha1':
                set('g1')
                all[i].className = 'g1'
                break;
            case 'gatha2':

                set('g2')
                all[i].className = 'g2'
                break;
            case 'gatha3':
                set('g3')
                all[i].className = 'g3'
                break;
            case 'gathalast':
                set('gl')
                all[i].className = 'gl'
                break;
            case 'unindented':
                set('uit')
                all[i].className = 'uit'
                break;
            case 'indent':

                set('it')
                all[i].className = 'it'
                break;
            case 'bodytext':

                set('bt')
                all[i].className = 'bt'
                break;
            case 'hangnum':

                set('hn')
                all[i].className = 'hn'
                break;

            default:


                // first replace

                // var txt = all[i].innerHTML
                // var classNa
                // if (all[i].hasAttribute('class')) {
                //     classNa = all[i].getAttribute('class')
                // } else {
                //     classNa = '#'
                // }
                // all[i].insertAdjacentHTML('afterend', `<b>${classNa}_${txt}` + "_$<br></b>")
                // all[i].remove()


                break;
        }

        function set(att) {

            // first replace
            // all[i].className = att
            // var txt = all[i].innerHTML
            // all[i].insertAdjacentHTML('afterend', `${att}_${txt}` + "_$<br>")
            // all[i].remove()


        }

        if (i == all.length - 1) {
            // document.getElementById('loaddatacopy').innerHTML = maintext
            // document.write(document.getElementById('loaddata').innerHTML)

        }
    }


}


function chapterCheck() {
    var chapter = document.querySelectorAll('.chapter')
    var chaptertxt = document.querySelectorAll('.chaptxt')
    var script = document.querySelector('script[src="chaptertoggle.js"]')
    script.remove()
    document.getElementById('table_main').remove()

    for (let i = 0; i < chapter.length; i++) {
        const element = chapter[i];
        const elementtx = chapter[i];

        if (chapter.length == chaptertxt.length) {
            console.log('chapter and chaptext have')

        } else {
            console.log(`chapter index ${i} not match chaptertxt index ${i}`)
            console.log(chapter.length + " " + chaptertxt.length)
        }
    }

    bold()

}


function setToInner() {
    var chapter = document.querySelectorAll('.chapter')
    var chapTxt = document.querySelectorAll('.chaptxt')
    var formetTxt = document.getElementById('formettxt')

    for (var i = 0; i < chapter.length; i++) {
        if (chapTxt.length == chapter.length) {
            var section = makeElement('section', {
                class: 'chapter',
                id: 'ch_' + (i + 1),
                innerHTML: makeElement('h1', {
                    class: 'ch-h',
                    textContent: chapter[i].textContent
                }).outerHTML
            }).outerHTML



            formetTxt.insertAdjacentHTML('beforeend', section)
            var sectionId = document.getElementById('ch_' + (i + 1))
            sectionId.insertAdjacentHTML('beforeend', makeElement('div', {
                class: 'chaptxt',
                id: 'cht_' + (i + 1),
                innerHTML: chapTxt[i].innerHTML
            }).outerHTML)
        }
    }

    document.getElementById('loaddata').innerHTML = ''
    // titleIn('cht', 'title')
    //newTitle()
}

// new title consize

function newTitle() {




    var cht = document.querySelectorAll('.chaptxt')
    console.log(cht)
    for (var i = 0; i < cht.length; i++) {
        setById('cht_' + (i + 1))
    }

    function setById(parent) {


        var child = document.getElementById(parent).querySelectorAll('.title')
        // uid set for detect 
        child.forEach(function (el, i) {
            el.id = 'tl_' + (i + 1);
            var uid = el.id
            el.insertAdjacentHTML('afterend', `<h2 class="title" id="${uid}">${el.innerHTML}</h2>\n<div class="titletxt"  id="${uid}txt"></div>`)
            el.remove()
            console.log(uid + el.textContent)
        })

        var para = document.getElementById(parent).querySelectorAll('.title, p')

        var titleName;
        for (var i = 0; i < para.length; i++) {
            if (para[i].getAttribute('class') == 'title') {
                titleName = para[i].id
            } else {
                try {
                    var ttxt = document.getElementById(parent).querySelector(`#${titleName}txt`)
                    ttxt.insertAdjacentHTML('beforeend', para[i].outerHTML)
                    para[i].remove()
                } catch (error) {

                }
            }
        }

        /// console.log(child)
    }


    var newTitleClass = document.querySelectorAll('.title')
    var newTitletxt = document.querySelectorAll('.titletxt')

    newTitleClass.forEach(function (el, i) {
        el.id = 'tl_' + (i + 1);
        newTitletxt[i].id = 'tlt_' + (i + 1);
        console.log(i)
    })


    // newSubHead()
    newSubHeadChapter()

}

function newSubHead() {
    var tl = document.querySelectorAll('.title')
    //console.log(tl)
    for (var i = 0; i < tl.length; i++) {
        setById('tlt_' + (i + 1))
    }

    function setById(parent) {


        var child = document.getElementById(parent).querySelectorAll('.subhead')
        // uid set for detect 
        child.forEach(function (el, i) {
            el.id = 'subh_' + (i + 1);
            var uid = el.id
            el.insertAdjacentHTML('afterend', `<h3 class="subhead" id="${uid}">${el.innerHTML}</h3>\n<div class="subheadtxt" id="${uid}txt"></div>`)
            el.remove()
            console.log(uid)
        })

        var para = document.getElementById(parent).querySelectorAll('.subhead, p')

        var titleName;
        for (var i = 0; i < para.length; i++) {
            if (para[i].getAttribute('class') == 'subhead') {
                titleName = para[i].id
            } else {
                try {
                    var ttxt = document.getElementById(parent).querySelector(`#${titleName}txt`)
                    ttxt.insertAdjacentHTML('beforeend', para[i].outerHTML)
                    para[i].remove()
                } catch (error) {

                }
            }
        }

        /// console.log(child)
    }

    var newSubheadClass = document.querySelectorAll('.subhead')
    var newSubheadtxt = document.querySelectorAll('.subheadtxt')


    // if (newSubheadClass.length == newSubheadtxt.length) {
    //     console.log('subhead and subheadtxt length' + true)
    // } else {
    //     console.log('subhead length' + newSubheadClass.length)
    //     console.log('subheadtxt length' + newSubheadtxt.length)

    // }

    // newSubheadClass.forEach(function (el, i) {
    //     el.id = 'sh_' + (i + 1);
    //    // newSubheadtxt[i].id = 'sht_' + (i + 1);
    //     //console.log(i)
    // })

    // var newSubheadtxt = document.querySelectorAll('.subheadtxt')

    // newSubheadtxt.forEach(function (el, i) {
    //     //el.id = 'sh_' + (i + 1);
    //     el.id = 'sht_' + (i + 1);
    //     //console.log(i)
    // })

    newSubHead()
}

function newSubHeadChapter() {
    var tl = document.querySelectorAll('.chaptxt')
    // console.log(tl)
    for (var i = 0; i < tl.length; i++) {
        setById('cht_' + (i + 1))
    }

    function setById(parent) {


        var child = document.getElementById(parent).querySelectorAll('.subhead')
        // uid set for detect 
        //console.log(child)
        child.forEach(function (el, i) {
            el.id = 'subh_' + (i + 1);
            var uid = el.id
            el.insertAdjacentHTML('afterend', `<h3 class="subhead" id="${uid}">${el.innerHTML}</h3>\n<div class="subheadtxt" id="${uid}txt"></div>`)
            el.remove()
            console.log(uid)
        })

        var para = document.getElementById(parent).querySelectorAll('.subhead, p')

        var titleName;
        for (var i = 0; i < para.length; i++) {
            if (para[i].getAttribute('class') == 'subhead') {
                titleName = para[i].id
            } else {
                try {
                    var ttxt = document.getElementById(parent).querySelector(`#${titleName}txt`)
                    ttxt.insertAdjacentHTML('beforeend', para[i].outerHTML)
                    para[i].remove()
                } catch (error) {

                }
            }
        }

        /// console.log(child)
    }

    var newSubheadClass = document.querySelectorAll('.subhead')
    var newSubheadtxt = document.querySelectorAll('.subheadtxt')


    // if (newSubheadClass.length == newSubheadtxt.length) {
    //     console.log('subhead and subheadtxt length' + true)
    // } else {
    //     console.log('subhead length' + newSubheadClass.length)
    //     console.log('subheadtxt length' + newSubheadtxt.length)

    // }

    newSubheadClass.forEach(function (el, i) {
        el.id = 'sh_' + (i + 1);
        // newSubheadtxt[i].id = 'sht_' + (i + 1);
        //console.log(i)
    })



    newSubheadtxt.forEach(function (el, i) {
        //el.id = 'sh_' + (i + 1);
        el.id = 'sht_' + (i + 1);

        if (el.innerHTML == '') {
            el.remove()
        }
        //console.log(i)
    })

    var newSubheadClass = document.querySelectorAll('.subhead')
    var newSubheadtxt = document.querySelectorAll('.subheadtxt')


    if (newSubheadClass.length == newSubheadtxt.length) {
        console.log('subhead and subheadtxt length' + true)
    } else {
        console.log(newSubheadClass)
        console.log(newSubheadtxt)

    }
}
// title setting
function titleIn(chaptxt, title) {
    var chaptxt = document.querySelectorAll(`.${chaptxt}`)


    //  chaptxt[0].getAttribute('classname')
    function setInTitle(mainElmns) {

    }

    var mainObj = {};

    var noTitle = true;
    var titleTxbBody;

    // old element querying
    var mainElmns = chaptxt
    for (var i = 0; i < mainElmns.length; i++) {
        var child = mainElmns[i];
        var sibling = child.querySelectorAll('p')

        // console.log(child)

        for (var j = 0; j < sibling.length; j++) {
            if (sibling[j].className == 'title') {


                var titleBody = makeElement('div', {
                    id: sibling[j].id ? sibling[j].id : '',
                    class: 'tl',
                    innerHTML: makeElement('h2', {
                        innerHTML: sibling[j].textContent
                    }).outerHTML
                }).outerHTML

                sibling[j].insertAdjacentHTML('afterend', titleBody)
                sibling[j].remove()
                //console.log(titleBody)
                titleTxbBody = document.getElementById(sibling[j].id)
                //console.log(titleTxbBody)
            } else {
                if (noTitle) {
                    child.insertAdjacentHTML('afterbegin', makeElement('div', {
                        id: 'ntl_' + (i + 1),
                        class: 'ntl'
                    }).outerHTML)
                    noTitle = false
                    var ntl = document.getElementById('ntl_' + (i + 1))
                    console.log(ntl)

                    // ntl.insertAdjacentHTML('afterbegin', sibling[j].outerHTML)
                    // sibling[j].remove()

                }
                try {
                    titleTxbBody.insertAdjacentHTML('beforeend', sibling[j].outerHTML)
                    sibling[j].remove()
                } catch (error) {
                    noTitle = true
                    ntl.insertAdjacentHTML('beforeend', sibling[j].outerHTML)
                    sibling[j].remove()
                }
            }
        }

    }

}