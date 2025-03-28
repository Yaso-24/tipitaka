

var tablemain = document.getElementById('table_main')
var loaddata = document.querySelector('#loaddata')
var homepage = document.getElementById('homepage')
var cover = document.getElementById('cover')
var outclick = document.getElementById('outClick')
var swiperight = document.getElementById('swiperight')
var more = document.getElementById('more')

let compareid = document.getElementById('compareid')
let comparepanel = document.getElementById('comparepanel')
let homeid = document.getElementById('homeid')
let homemenu = document.getElementById('homemenu')
var dichead = document.getElementById('dic-head')
// compareid.addEventListener('click', ()=>{
//     comparepanel.style.display = 'block'
//     compareid.setAttribute('id', 'closecompare')
//     compareid.setAttribute('onclick', 'closecompare()')
// })
// let closecompare = ()=>{
//     compareid.setAttribute('id', 'compareid')
//     compareid.removeAttribute('onclick')
//     comparepanel.style.display = 'none'
// }

try {
    let togglecom = false;
    const toggleframe = () => {
        if (togglecom) {
            comparepanel.style.display = 'none';

        } else {
            comparepanel.style.display = 'block';
            if (!comparepanel.querySelector('#frame')) {
                comparepanel.innerHTML = '<iframe id="frame" src="./compare.html"></iframe>'
            }

        }
        togglecom = !togglecom;
    }
    compareid.addEventListener('click', toggleframe, false);

    let toggle = true;
    const togglehomemenu = () => {
        if (toggle) {
            //homemenu.style.display = 'none';
            homepage.style.display = 'block'
            loaddata.style.display = 'none'
        } else {
            // homemenu.style.display = 'block';
            homepage.style.display = 'none'
            loaddata.style.display = 'block'

        }
        toggle = !toggle;
    }
    homeid.addEventListener('click', togglehomemenu, false);
} catch (error) {

}

var palibooks = document.getElementById('palibooks')
var banglabooks = document.getElementById('banglabooks')
var englishbooks = document.getElementById('englishbooks')
var pitakaName = document.querySelectorAll('.pitakaName')
var pitakaName2 = document.querySelectorAll('.pitakaName2')

var palibooks = document.querySelector('#palibooks')
var palichild = palibooks.querySelectorAll('li')
var banglabooks = document.querySelector('#banglabooks')
var bnchild = banglabooks.querySelectorAll('li')
var englishbooks = document.querySelector('#englishbooks')
var enchild = englishbooks.querySelectorAll('li')



const homepagebooks = (booklistname) => {
    var bdbooks = booklistname.outerHTML
    bdbooks.toString()
    bdbooks = bdbooks.replace(/<hr>/gi, '')
    bdbooks = bdbooks.replace(/<br>/gi, '')

    const replaceobj = {
        bookName_panel: 'homebookName_panel',
        booklabelopen2: "homebooklabelopen2",
        pitakaName2: 'homepitakaName2'


    }
    bdbooks = bdbooks.replace(/bookName_panel|booklabelopen2|pitakaName2/gi, function (matched) {
        return replaceobj[matched];
    });
    cover.innerHTML = bdbooks
}

if (window.localStorage.getItem('homepitakaid') === null || undefined || '') {
    homepagebooks(banglabooks)
} else {
    let bookkey = window.localStorage.getItem('homepitakaid')
    if (bookkey === 'homebengali') {
        homepagebooks(banglabooks)
    }
    if (bookkey === 'homepali') {
        homepagebooks(palibooks)
    }
    if (bookkey === 'homeenglish') {
        homepagebooks(englishbooks)
    }
}

var homebookName_panel = document.querySelector('.homebookName_panel')
var homebookName_panel_child_li = homebookName_panel.querySelectorAll('li')
var homebookName_panel_child = homebookName_panel.querySelectorAll('.pitakaName, .homepitakaName2')

const setbookIcon = (elm) => {
    elm.forEach((pcl) => {
        pcl.insertAdjacentHTML('afterbegin', '<i class="material-icons"> &#xe86d; </i>')
    })
}
setbookIcon(palichild)
setbookIcon(bnchild)
setbookIcon(enchild)
setbookIcon(homebookName_panel_child_li)

const setfolderIcon = (elm) => {
    elm.forEach((pcl) => {
        pcl.insertAdjacentHTML('afterbegin', '<i class="material-icons"> &#xe2c7; </i>')
    })
}
setfolderIcon(pitakaName)
setfolderIcon(pitakaName2)
setfolderIcon(homebookName_panel_child)

function selectLangu(evnt, langu) {
    var langucontent = document.getElementsByClassName('bookName_panel')
    for (var i = 0; i < langucontent.length; i++) {
        langucontent[i].style.display = "none";
    }
    var language = document.getElementsByClassName('language')
    for (var i = 0; i < language.length; i++) {
        language[i].className = language[i].className.replace(' languActive', '')
    }
    var selectlanguage = document.getElementsByClassName('select_language')
    document.getElementById(langu).style.display = "block";
    //selectlanguage.style.display = ''
    evnt.currentTarget.className += " languActive";
}

function booklabelopen(evt, clasname) {
    var i, pitakaName;

    pitakaName = document.getElementsByClassName("pitakaName");
    for (i = 0; i < pitakaName.length; i++) {
        pitakaName[i].className = pitakaName[i].className.replace(" active", '');
    }
    var panel = document.querySelectorAll(`.${clasname}`)
    for (var i = 0; i < panel.length; i++) {
        panel[i].classList.toggle('show')
    }
    evt.currentTarget.className += " active";
}
function booklabelopen2(evt, classname) {
    var i, pitakaName2;

    pitakaName2 = document.getElementsByClassName("pitakaName2");
    for (i = 0; i < pitakaName2.length; i++) {
        pitakaName2[i].className = pitakaName2[i].className.replace(" active2", '');
    }
    var panel = document.querySelectorAll(`.${classname}`)
    for (var i = 0; i < panel.length; i++) {
        panel[i].classList.toggle('show')
    }
    evt.currentTarget.className += " active2";
}

function homebooklabelopen2(evt, classname) {
    var i, homepitakaName2;

    homepitakaName2 = document.getElementsByClassName("homepitakaName2");
    for (i = 0; i < homepitakaName2.length; i++) {
        homepitakaName2[i].className = homepitakaName2[i].className.replace(" homepitakaName2", '');
    }
    var panel = document.querySelectorAll(`.${classname}`)
    for (var i = 0; i < panel.length; i++) {
        panel[i].classList.toggle('showhome')
    }
    evt.currentTarget.className += " homepitakaName2";
}


var some = function () {
    var dn1 = 'hey iam dn1'
    dn1 += script = `<script> just call data with argument </script>`
    return dn1
}

var mula_1_1 = [1, 2]
var arr = [mula_1_1]
//Click the openbook(evt, classid) to invoke bookdata filename by appenndchild a script element.
function book(event, filename) {
    homepage.style.display = 'none'
    loaddata.style.display = 'block'
    loaddata.scrollIntoView(true)
    var imprtbook = document.createElement('script')
    var useragent = navigator.userAgent.toLowerCase()
    


        imprtbook.src = `./bookdata/${filename}.js`
        loaddata.appendChild(imprtbook)
        //console.log('not android')

    


    var li = document.getElementsByTagName('li')
    for (var i = 0; i < li.length; i++) {
        li[i].className = li[i].className.replace(' activebook', '')
    }
    event.currentTarget.className += ' activebook'
    sidebar.style.display = 'none'
    outclick.style.display = 'none'
    if (filename = mula_1_1) {
        console.log(arr)
    }
}



var loaddata = document.querySelector('#loaddata')
loaddata.addEventListener('click', () => {
    // table_main.style.display = "none"
    morehide()
})


function searchhelper() {

    // insert chaphead to chapter before
    var chap = document.querySelectorAll('.chapter')
    var chaptxtt = document.querySelectorAll('.chaptxt')
    //var chaphead = document.querySelectorAll('.chaphead')

    chaptxtt.forEach(function (el, i) {
        var child = el.querySelector('.chaphead')
        if (child) {
            //console.log(child)
            chap[i].insertAdjacentHTML('beforebegin', child.outerHTML)
            child.remove()
        }

    })

}

function bookhelper() {
    var booknameid = document.getElementById('booknameid')
    var nikaya = document.querySelector('.nikaya')
    var bookname = document.querySelector('.bookname')
    var content = document.getElementById('content')
    var chapter = document.querySelectorAll('.chapter')
    var title = document.querySelectorAll('.title')
    var subhead = document.querySelectorAll('.subhead')
    var subsubhead = document.querySelectorAll('.subsubhead')
    var chapTossubhead = document.querySelectorAll('.chapter, .title ')
    var chaptxt = document.querySelectorAll('.chaptxt')
    var allcontent = document.querySelectorAll('.chapter, .subhead, .title, .subsubhead')

    var allchild = loaddata.querySelectorAll('.chapter, .chaptxt, .title, .subhead, .subsubhead, .end')
    // css property set margin-top 50px programaticaly
    var centered = document.querySelectorAll('.centered')
    try {
        if (document.querySelector('.namo').getAttribute('class') === 'namo') {
            centered[0].setAttribute('class', 'centered')
        } else {
            centered[0].setAttribute('id', 'namo')
        }
    } catch (error) {

    }
    // setup custom attribute
    function setcustomatt(selector, att, attvalue) {
        for (var i = 0; i < selector.length; i++) {
            selector[i].setAttribute(`${att}`, `${attvalue}`)
        }
    }
    setcustomatt(chapter, "chapter", "ct")
    setcustomatt(title, "title", "tt")
    setcustomatt(chaptxt, "chaptxt", "ctt")
    setcustomatt(subhead, "subhead", "sh")
    setcustomatt(subsubhead, "subsubhead", "ssh")

    var filter = []; // filter item set in table of content and set onclick attribute for eyetaggle()
    for (var i = 0; i < allchild.length; i++) {
        if (allchild[i].getAttribute('chapter')) {
            allchild[i].classList.add('txt' + (i + 1))
            allchild[i].setAttribute('id', `txt${i}`)
            allchild[i].setAttribute('onclick', `chapteropen(event, "txt${i}"), subclick('txt${i}'), 
      toggleeye("visblid${i}", "visblidoff${i}") `)

            filter.push(`</section><li name='txt${i}' class="content_chapter" onclick="chapopen('txt${i}'), 
      subclick('txt${i}')">` + allchild[i].textContent + `</li>`)

            allchild[i].insertAdjacentHTML("beforeend", `<i id=visblid${i} class="material-icons visible">visibility</i> 
      <i id=visblidoff${i} class="material-icons visibleoff">visibility_off</i>`)

        }
        if (allchild[i].getAttribute('chaptxt')) {
            allchild[i].classList.add('txt' + (i - 1))
            var txt = allchild[i].textContent
            var substr = txt.substring(0, 200)
            //console.log(substr)// for summary testing
            // summary.push(substr)
            // filter.push(` <a style="display: none;">` + allchild[i].getAttributeNames('chaptxt') + "</a>")
            filter.push(`<section class="content_chaptxt" onclick="chapopen('txt${(i - 1)}')">`)
        }
        if (allchild[i].getAttribute('title')) {
            allchild[i].classList.add('txt' + i)
            allchild[i].addEventListener('click', function () {

            })
            filter.push(`<li class="content_title" onclick="subclick('txt${i}')">` + allchild[i].textContent + `</li>`)
        }
        if (allchild[i].getAttribute('subhead')) {
            allchild[i].classList.add('txt' + i)
            allchild[i].addEventListener('click', function () {

            })
            filter.push(`<li class="content_subhead" onclick="subclick('txt${i}')">` + allchild[i].textContent + `</li>`)
        }
        if (allchild[i].getAttribute('end')) {
            filter.push(`</section>`)
        }
        if (allchild[i].getAttribute('chapter')) {
            // do somthing
        } else {
            //console.log('normal : ' + allchild[i].textContent)
        }
    }

    var tablemain = document.getElementById('table_main')
    //console.log(tablemain)
    var table_name = document.getElementById('table_name')

    var inputdiv = document.createElement('div')
    inputdiv.setAttribute('id', 'inputdiv')
    var inputbox = document.createElement('input')
    inputbox.setAttribute('id', 'titlesearch')
    inputbox.setAttribute('onkeyup', 'titlesearch()')
    inputbox.setAttribute('placeholder', 'Search...')
    inputdiv.appendChild(inputbox)
    table_name.insertAdjacentElement('beforeend', inputdiv)

    var createtablecontent = document.createElement('div')
    var createnode = document.createTextNode(' ')
    createtablecontent.setAttribute('id', 'table_of_content')
    createtablecontent.appendChild(createnode)
    tablemain.appendChild(createtablecontent)
    var table_of_content = document.getElementById('table_of_content')
    setTimeout(() => {
        table_of_content.innerHTML = filter.join('')
    }, 200)
    setTimeout(() => {
        let tablechap = table_of_content.querySelectorAll('li')
        for (var i = 0; i < tablechap.length; i++) {
            if (tablechap[i].getAttribute('class') === "content_chapter") {
                //tablechap[i].setAttribute('onclick', `${tablechap[i].getAttribute('onclick')}, toggleeye("visblid${i}", "visblidoff${i}")` )
            }
        }
    }, 1000)

    setTimeout(() => {
        try {
            //'<i class=" material-icons">chevron_right</i>' +
            booknameid.innerHTML = bookname.textContent
            document.getElementById('titlename').innerHTML = bookname.textContent
            //console.log(bookname.textContent)
        } catch (error) {
            console.log('error')
        }
    }, 200)

    //bangla set att onclick for fnote
    var noteref = document.querySelectorAll('.ftnRef')
    for (var i = 0; i < noteref.length; i++) {
        noteref[i].setAttribute('onclick', `fnote("ftn${i + 1}")`)
    }
    getsetting('applanguid', 'applangu')
    getsetting('themeid', 'theme')
    getsetting('wordid', 'word')

    chaptxt = undefined

    console.log(chaptxt)



}// bookhelper end

// toggle visivilty chapter eye icon.
const toggleeye = (eyeopenid, eyecloseid) => {
    document.querySelector(`#${eyeopenid}`).classList.toggle('off')
    document.querySelector(`#${eyecloseid}`).classList.toggle('on')
}

const titlesearch = () => {
    var input, filter, ul, li, a, i;
    input = document.getElementById("titlesearch");
    filter = input.value.toUpperCase();
    div = document.getElementById("table_of_content");
    li = div.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";

        } else {
            li[i].style.display = "none";
        }
    }
}

function user() {
    var useragent = navigator.userAgent.toLowerCase()
    if (useragent.indexOf('android') > -1) {
        //menuid.style.display = 'none'
        //contentMenu.style.display = 'none'
    }
}
user()
// from android control
outclick.addEventListener('click', function () {
    try {
        sidebar.style.display = 'none'
        this.style.display = 'none'
        morehide(); tablehide()
    } catch (error) { }
})
function menushow() {
    sidebar.style.display = 'block'
    outclick.style.display = 'block'

    try {
        // console.log(chapter[0].textContent)
        morehide(); tablehide()
    } catch (error) {

    }
}
function tableshow() {
    sidebar.style.display = 'none'
    outclick.style.display = 'block'
    try {
        document.getElementById('table_main').style.display = "block"

    } catch (error) {
        //alert('Hey dear i am Table of content button! Please open any book.')
        outclick.style.display = 'none'
    }
}
function moreshow() {
    try {
        menuhide(),
            more.style.display = 'block'
        outclick.style.display = 'block'
    } catch (error) {
        console.log(error)

    }
}
function menuhide() {
    sidebar.style.display = 'none'
    outclick.style.display = 'none'

}
function tablehide() {
    document.getElementById('table_main').style.display = 'none'

}
function morehide() {
    more.style.display = 'none'

}
function settingPanelhide() {
    document.getElementById('settingPanel').style.display = 'none'
}
function tpsearchhide() {
    document.getElementById('searchPanel').style.display = 'none'
}


const themefun = (header, headtxt, panel, booktxt) => {
    var allpanel = document.querySelectorAll('body, #cover, .pitakasum, .bookName_panel, .bookName_panel2, .pitakaName,  #table_main, #inputdiv, #loaddata, #dicPanel, #more, #settingPanel, #homemenu')
    for (var i = 0; i < allpanel.length; i++) {
        allpanel[i].style.background = panel
        allpanel[i].style.color = booktxt
    }
    var allheader = document.querySelectorAll('#main-navbar, #appname, a, .navleft, .navright, #compareid, #tableid, #moreid, #setting_title, #dic-head, .select_language, #table_name')
    for (var i = 0; i < allheader.length; i++) {
        allheader[i].style.background = header
        allheader[i].style.color = headtxt
    }
}
let isShow = true
function setsetting(key, query) {
    var radios = document.querySelectorAll(`.${query}`)
    for (var i = 0; i < radios.length; i++) {
        radios[i].addEventListener('click', () => {
            localStorage.setItem(`${key}`, event.target.value)

        })
        var attval = radios[i].getAttribute('value')
        if (attval === 'day-light') {
            radios[i].addEventListener('click', () => {
                themefun(themename.default, txtcolor.default, themename.default, txtcolor.default)
            })
        }

        if (attval === 'night') {
            radios[i].addEventListener('click', () => {
                themefun(themename.night, txtcolor.night, themename.night_lite, txtcolor.night_lite)
            })
        }
        if (attval === 'chocolate') {
            radios[i].addEventListener('click', () => {
                themefun(themename.chocolate, txtcolor.default, themename.chocolate_lite, txtcolor.default)
            })
        }
        if (attval === 'orange') {
            radios[i].addEventListener('click', () => {
                themefun(themename.orange, txtcolor.default, themename.orange_lite, txtcolor.default)
            })
        }
        if (attval === 'teal') {
            radios[i].addEventListener('click', () => {
                themefun(themename.teal, txtcolor.default, themename.teal_lite, txtcolor.default)
            })
        }
        if (attval === 'brown') {
            radios[i].addEventListener('click', () => {
                themefun(themename.brown, txtcolor.default, themename.brown_lite, txtcolor.default)
            })
        }
        if (attval === 'show') {
            radios[i].addEventListener('click', () => {
                isShow = true
                // console.log(isShow)
            })
        }
        if (attval === 'none') {
            radios[i].addEventListener('click', () => {
                isShow = false
                //console.log(isShow)
            })
        }

        if (attval === 'pali') {
            radios[i].addEventListener('click', () => {
                console.log('pl')
                selectLangu(event, 'palibooks')
                document.querySelectorAll('.language')[0].classList.add('languActive')

            })
        }
        if (attval === 'bengali') {
            radios[i].addEventListener('click', () => {
                console.log('bn')
                selectLangu(event, 'banglabooks')
                document.querySelectorAll('.language')[1].classList.add('languActive')

            })
        }
        if (attval === 'english') {
            radios[i].addEventListener('click', () => {
                console.log('en')
                selectLangu(event, 'englishbooks')
                document.querySelectorAll('.language')[2].classList.add('languActive')

            })
        }

        if (attval === 'homebengali') {
            radios[i].addEventListener('click', () => {
                homepagebooks(banglabooks)
            })

        }
        if (attval === 'homepali') {
            radios[i].addEventListener('click', () => {
                homepagebooks(palibooks)
            })
        }
        if (attval === 'homeenglish') {
            radios[i].addEventListener('click', () => {
                homepagebooks(englishbooks)
            })
        }
        if (attval === 'appbengali') {
            radios[i].addEventListener('click', () => {
                languagechange(0)
            })
        }
        if (attval === 'appenglish') {
            radios[i].addEventListener('click', () => {
                languagechange(1)

            })
        }
    }
}
setsetting('applanguid', 'applangu')
setsetting('themeid', 'theme')
setsetting('wordid', 'word')
setsetting('pitakaid', 'pitaka')
setsetting('homepitakaid', 'homepitaka')
//console.log(window.localStorage.getItem('homepitakaid'))

function getsetting(key, query) {
    var radio = document.querySelectorAll(`.${query}`)
    var val = localStorage.getItem(`${key}`)
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].value == val) {
            radio[i].checked = true;
        }
    }

    var id = window.localStorage.getItem(`${key}`)
    if (id == "day-light") {
        // console.log('day-light')
        localStorage.removeItem(`${id}`)
    }
    if (id == "night") {
        themefun(themename.night, txtcolor.night, themename.night_lite, txtcolor.night_lite)
    }
    if (id == 'chocolate') {

        themefun(themename.chocolate, txtcolor.default, themename.chocolate_lite, txtcolor.default)
    }
    if (id == 'orange') {
        themefun(themename.orange, txtcolor.default, themename.orange_lite, txtcolor.default)
    }
    if (id == 'teal') {
        themefun(themename.teal, txtcolor.default, themename.teal_lite, txtcolor.default)
    }
    if (id == 'brown') {
        themefun(themename.brown, txtcolor.default, themename.brown_lite, txtcolor.default)
    }

    if (id == "show") {
        isShow = true
    }
    if (id == "none") {
        isShow = false
    }
    if (id == "pali") {
        //console.log('pali')
        document.querySelectorAll('.language')[0].classList.add('languActive')
        document.getElementById('palibooks').style.display = "block"
    }
    if (id == "bengali") {
        //console.log('bengali')
        document.querySelectorAll('.languActive')[0].setAttribute('class', 'language')
        document.querySelectorAll('.language')[1].classList.add('languActive')
        document.getElementById('banglabooks').style.display = "block"


    }
    if (id == "english") {
        //console.log('english')
        document.querySelectorAll('.languActive')[0].setAttribute('class', 'language')
        document.querySelectorAll('.language')[2].classList.add('languActive')
        document.getElementById('englishbooks').style.display = "block"
    }


}
getsetting('applanguid', 'applangu')
getsetting('themeid', 'theme')
getsetting('wordid', 'word')
getsetting('pitakaid', 'pitaka')
getsetting('homepitakaid', 'homepitaka')


var save = document.getElementById('save')
save.addEventListener('click', () => {
    var fontval = document.getElementById('font').value

    if (fontval <= 30 && fontval >= 10) {
        localStorage.setItem('fontid', fontval)
        var body = document.querySelector('body')
        body.style.fontSize = `${fontval}px`
    } else {
        alert('Font size range is mim=10px to max=30px require.')
    }
})

const getfontsize = () => {
    var ls = window.localStorage.getItem('fontid')
    var fontinput = document.getElementById('font')
    fontinput.setAttribute('value', `${ls}`)
    if (ls === null || undefined || '') {
        fontinput.setAttribute('value', '16')
    }
    document.querySelector('body').style.fontSize = ls + "px"
}
getfontsize()

var defaultfont = document.getElementById('defaultfont')
defaultfont.addEventListener('click', () => {
    localStorage.setItem('fontid', '16')
    var body = document.querySelector('body')
    body.style.fontSize = `16px`
    var fontinput = document.getElementById('font')
    fontinput.setAttribute('value', '16')
})

var more = document.getElementById('more')
var morechild = more.querySelectorAll(".more_item")
var settingPanel = document.getElementById('settingPanel')
var searchPanel = document.getElementById('searchPanel')
for (var i = 0; i < morechild.length; i++) {
    var id = morechild[i].getAttribute('id')
    if (id === 'setting')
        morechild[i].addEventListener('click', () => {
            settingPanel.style.display = 'block'
        })
    if (id === 'dictionary')
        morechild[i].addEventListener('click', () => {
            // window.open("./dictionarynew.html");
            // console.log( window.innerHeight)
            // var height = 250;
            // var width = 550;
            // var top = window.innerHeight - height;
            // var left = window.innerHeight - width;
            // window.open(
            //   './dictionarynew.html',
            //   '_blank',
            //   'location=yes,height=' + height + ',width=' + width + ',top=' + top + ',left=' + left + ',scrollbars=yes,status=yes'
            // );
            window.open(`./dictionarynew.html`, '_blank', "left=550, toolbar=no, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=600")
        })
    if (id === 'tpsearch')
        morechild[i].addEventListener('click', () => {
            searchPanel.style.display = 'block'
        })
    if (id === 'bookmark')
        morechild[i].addEventListener('click', () => {
            alert('bookmark Coming soon!')
        })
    if (id === 'note')
        morechild[i].addEventListener('click', () => {
            alert('note Coming soon!')
        })
    if (id === 'help')
        morechild[i].addEventListener('click', () => {
            Help.help();
        })
    if (id === 'update')
        morechild[i].addEventListener('click', () => {
            UpdateApp.updateapp();

        })
    if (id === 'share')
        morechild[i].addEventListener('click', () => {
            Share.share();
        })
    if (id === 'rate')
        morechild[i].addEventListener('click', () => {
            Rate.rate();
        })
    if (id === 'ourapp')
        morechild[i].addEventListener('click', () => {
            OurApp.ourapp();
        })
    if (id === 'notification')
        morechild[i].addEventListener('click', () => {
            Notification.notification();
        })
    if (id === 'about')
        morechild[i].addEventListener('click', () => {
            About.about();
        })
}

var setback = document.querySelectorAll('#setback')

for (var i = 0; i < setback.length; i++) {
    setback[i].addEventListener('click', () => {
        settingPanel.style.display = 'none'
        searchPanel.style.display = 'none'
        sidebar.style.display = 'none'

    })
}


function fnote(id) {
    var footnote = document.querySelectorAll('.ftn')
    var notetxt = document.querySelectorAll('.notetxt')
    var notehead = document.querySelectorAll('.notehead')
    var targetid = document.getElementById(`${id}`)
    for (var i = 0; i < notehead.length; i++) {
        notehead[i].remove()
    }
    for (var i = 0; i < footnote.length; i++) {
        footnote[i].style.display = "none"
    }
    targetid.insertAdjacentHTML("afterbegin", `<p class="notehead"> টীকা <span onclick="noteclose()" ><i id="noteclose" class="material-icons">close</i></span></p>`)
    targetid.style.display = "block"

}
function noteclose() {
    var footnote = document.querySelectorAll('.ftn')
    for (var i = 0; i < footnote.length; i++) {
        footnote[i].style.display = "none"
    }
}


let toggledicpanel = false;
const toggledic = () => {
    if (toggledicpanel) {
        var dicpanel = document.getElementById('dicPanel')
        dicpanel.style.display = 'none'
    } else {
        var dicpanel = document.getElementById('dicPanel')
        dicpanel.style.display = 'block'

    }
    toggledicpanel = !toggledicpanel;
}

loaddata.addEventListener('dblclick', toggledic, false);

//From Tipitaka activity on distoryed
function back() {
    dictionarydataclear()

}
function dictionarydataclear() {
    window.localStorage.removeItem('savedata')
    window.localStorage.removeItem('saveState')
}


let getbook = []
const getbookfun = (query) => {
    for (let i = 0; i < query.length; i++) {
        if (query[i].getAttribute('onclick')) {
            getbook.push(query[i].getAttribute('onclick'))
        }
    }
    //console.log(getbook.join(', '))
}
//getbookfun(palichild)

const getallbooks = () => {
    let allbook = document.getElementById('allbook')
    let script = document.createElement('script')
    for (let i = 0; i < getbook.length; i++) {
        script.src = `bookdata/mula_1_1.js`
    }

    document.head.appendChild(script)
}



const bookmarkclick = () => {
    try {
        if (document.querySelector('.bookname').innerText === 'পারাজিকপাল়ি') {
            alert('fj')

        }
    } catch (error) {

    }
}


var elb = document.querySelectorAll('.pitakaName, li')

function make(el, cb) {
    var elarr = []
    for (var i = 0; i < el.length; i++) {
        var ar = el[i].textContent.split(' ')
        //var t = cb()
        ar.splice(0, 3)
        elarr.push(ar)
    }
    //console.log(elarr)
    window.localStorage.setItem('book', JSON.stringify(elarr))
    return elarr;
}

make(elb, '')
// make(elb, function(ar){
//   var nar
//   ar.splice(0, 2)
//   for(var i =0; i < ar.length; i++){

//   }
// })

var q = ' সময়েv'
var str = 'bt_ ১. সময়েv সে সময়ে ভগবান বুদ্ধ পঞ্চশত ভিক্ষু সমন্বিত সময়ে মহতী সময়েv ভিক্ষুসংঘের সঙ্গে বৈরঞ্জ নামক সময়ে স্থানের নলেরুপুচিমন্দমূলে[2] অবস্থান করছিলেন। তখন বৈরঞ্জ নামক ব্রাহ্মণ শুনলেন যে, “শাক্যকুল হতে প্রব্রজিত শাক্যপুত্র শ্রমণ গৌতম পঞ্চশত ভিক্ষু সমন্বিত মহাভিক্ষুসংঘের সঙ্গে বৈরঞ্জের নলেরুপুচিমন্দমূলে অবস্থান করছেন। সেই ভগবান গৌতমের এরূপ কল্যাণকীর্তি সময়েv(যশকীর্তি) অভ্যুত্থিত (প্রচারিত) হয়েছে : ‘তিনি ভগবান, অর্হৎ, সম্যকসম্বুদ্ধ, বিদ্যাচরণসম্পন্ন, সুগত, লোকবিদ, অনুত্তর, দম্যপুরুষ সারথি, দেবমনুষ্যের শাস্তা, বুদ্ধ ভগবান।’ তিনি দেবলোক, মারলোক, ব্রহ্মলোক, শ্রমণ-ব্রাহ্মণ, প্রজাবর্গ এবং সকল দেবমনুষ্যগণসহ এসব লোক স্বয়ং অভিজ্ঞা দ্বারা সাক্ষাৎ করে এগুলোর প্রকৃত স্বরূপ প্রকাশ করেন। তিনি সময়েv ধর্মোপদেশ প্রদান সময়েv  করেন যা আদিতে কল্যাণকর, মধ্যে কল্যাণকর, পর্যাবসানে (অন্তে) কল্যাণকর। তিনি অর্থ-ব্যঞ্জনযুক্ত, সমগ্র পরিপূর্ণ এবং পরিশুদ্ধ ব্রহ্মচর্যই প্রকাশ করেন। তাদৃশ অর্হতের দর্শন লাভ করা উত্তম। সময়েv”'

var str1 = `২৪. সে সময়ে বৈশালীর সময়েv নিকটবর্তী কলন্দক নামক এক গ্রাম ছিল। সেখানে কলন্দপুত্র সুদিন্ন নামে এক শ্রেষ্ঠীপুত্র ছিলেন। কলন্দপুত্র সুদিন্ন বহুসংখ্যক সহায়কগণের সঙ্গে কোনো এক করণীয় কার্যোপলক্ষে বৈশালীতে গমন করেছিলেন। তখন ভগবান মহতী পরিষদের দ্বারা পরিবেষ্টিত হয়ে উপবিষ্ট অবস্থায় ধর্মদেশনা করছিলেন। সেই মহতী পরিষদে ভগবানকে ধর্মদেশনা করতে দেখে কলন্দপুত্র সুদিন্নের মনে এরূপ চিন্তা উদয় হলো : “যদি তাই হয়, তাহলে আমিও ধর্মদেশনা শ্রবণ করব।”`

var str3 = `২৫, অতঃপর কলন্দপুত্র সুদিন্ন শীঘ্রই সময়ে পরিষদ হতে উঠে যেখানে ভগবান সেখানে উপস্থিত হলেন; সময়ে উপস্থিত হয়ে ভগবানকে সময়েv অভিবাদন করে একান্তে বসলেন। একান্তে উপবিষ্ট সুদিন্ন ভগবানকে এরূপ বললেন, “ভন্তে, ভগবান কর্তৃক দেশিত ধর্ম আমি যেই প্রকারে উপলব্ধি সময়েv করতে সমর্থ হয়েছি, তাতে আমার মনে হয় এই একান্ত পরিপূর্ণ, পরিশুদ্ধ, শঙ্খলিখিত ব্রহ্মচর্য গৃহে বাস করে প্রতিপালন করা সুখকর নহে। ভন্তে, আমার ইচ্ছা হয়েছে যে, কেশ-শ্মশ্রূ মুণ্ডন করে কাষায়-বস্ত্র পরিধানপূর্বক আগার হতে অনাগারিক প্রব্রজ্যা সময়েv গ্রহণ করতে। ভন্তে আমাকে প্রব্রজ্যা প্রদান করুন। সময়েv”`
var total_str = [str, str1, str3]

// var p = str.indexOf(q)
// var lp = str.lastIndexOf(q)
// var ql = q.length

// console.log(p)
// console.log(lp)

// var preIn = p - 50;
// console.log('pre ' + preIn)
// var nxtIn = p + ql + 50
// console.log('nxt ' + nxtIn)

// var line = str.substring(preIn, nxtIn)
// if (str.includes(q)) {
//   //console.log(line)
// }


function getline(str, index, bookName, paraNum) {
    var preIn = index - 30;
    // console.log('pre ' + preIn)
    var nxtIn = index + 30
    /// console.log('nxt ' + nxtIn)

    var line = str.substring(preIn, nxtIn)

    if (str.includes(q)) {
        line = line.split(' ')
        console.log(line)
        var isShift = line[0]
        var isPop = line.length - 1
        var isFirst = str.startsWith(line[0])
        var isLast = str.endsWith(line[line.length - 1])
        console.log(isLast)
        //  var isLast = str.length - 20
        if (!isFirst) {
            line.shift();
        }
        // console.log(line[isPop])


        //console.log(line.join(' '))
        // document.getElementById('kalpataru').insertAdjacentHTML('beforebegin', ` <li style="font-size: 12px"> ${bookName} : ${line.join(' ').replace(q, `<mark>${q}</mark>`)} (${++paraNum})</li>`)
    }

}

function index(element, paraArray, bookName, paraNum) {
    var indices = [];
    var array = paraArray
    var idx = array.indexOf(element);
    while (idx != -1) {
        indices.push(idx);

        getline(array, idx, bookName, paraNum)

        idx = array.indexOf(element, idx + 1);
    }
    console.log(indices)
    return indices
}

for (var i = 0; i < total_str.length; i++) {
    index(q, total_str[i], "parajika", i)
}
//index(q, str)
//console.log(window.localStorage)

var p = document.querySelectorAll('.bodytext')

function tagReplace(className, tagName){
    const tags = document.querySelectorAll(`.${className}`)

    tags.forEach((el) => {
       /// console.log(el)

        el.insertAdjacentHTML('afterend', `<${tagName} style="text-align: center;">${el.textContent}</${tagName}>`)
        el.remove()
    })
}


