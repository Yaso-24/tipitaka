// setTimeout(() => {
//     if (navigator.onLine) {
//         var notify = document.getElementById('notify')
//         var notify_frame = document.createElement('iframe')
//         notify_frame.setAttribute('src', `https://tipitakanotifyapp.blogspot.com/?m=1`)
//         notify.appendChild(notify_frame)
        
//     }
// }, 9000)
// var update_notify = window.localStorage.getItem('update')


// const getupdate = () => {
//     try {
//         var bnupdate = `<div onclick="updateApp()" style="color: red;" id="update" class="more_item"><i class="more_item_ic material-icons">&#xe923;</i> নতুন সংস্করণ অ্যাপ </div>`
//         var enupdate = `<div onclick="updateApp()" style="color: red;" id="update" class="more_item"><i class="more_item_ic material-icons">&#xe923;</i> New Version App Available</div>`
//             var language = window.localStorage.getItem('applanguid')
//             if (language === 'appbengali') {
//                 morechild[0].insertAdjacentHTML('beforebegin', `${bnupdate}`)
//             } else if (language === 'appenglish') {
//                 morechild[0].insertAdjacentHTML('beforebegin', `${enupdate}`)
//             } else {
//                 morechild[0].insertAdjacentHTML('beforebegin', `${enupdate}`)
//             }
        
//     } catch (error) {}
// }

// const updateApp = () => {
//     UpdateApp.updateapp();
// }