let main = document.querySelector('.main')
let api = 'https://6821ee75b342dce8004c674e.mockapi.io/12/link'

async function get() {
    try {
        let res = await fetch(api)
        let data = await res.json()
        getData(data)
    } catch (error) {
        console.error(error)
    }
}

function getData(data) {
    data.forEach(e => {
        let div = document.createElement('div')

        let name = document.createElement('h1')
        name.innerHTML = e.name

        div.append(name)
        main.append(div)
    })
}

get()