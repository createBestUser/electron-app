// console.log('renderer');
require('./js/windowControls')

const vers = {
    node: 'nodejs: ',
    chrome: 'chromium: ',
    electron: 'electron: ',
    v8: 'v8: '
}

for (const ver in vers) {
    if (vers.hasOwnProperty(ver)) {
        let elem = document.createElement('div')
        elem.innerHTML = vers[ver] + process.versions[ver]
        document.getElementsByClassName('versions')[0].appendChild(elem)
    }
}

const { execFile } = require('child_process')

let exec_path = '/usr/bin/google-chrome'

let exec_params = []

document.getElementById('openRepo').addEventListener('click', e => {
    exec_params.push(e.currentTarget.getAttribute('link_href'))
    execFile(exec_path, exec_params, (err, data) => {
        if (err) {
            console.log(err)
            return;
        }

        console.log(data.toString())
    })
})