const xhr = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09';

xhr.open('GET', url)
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const objects = JSON.parse(xhr.responseText)
        var output = ''
        objects.forEach(object => {
            document.querySelector('.container').appendChild(BlogCards(object))
        });
        console.log(output)
    }
}
xhr.send()

function BlogCards(object) {
    const col = document.createElement('div')
    col.setAttribute('class', 'column')
    const card = document.createElement('div')
    card.setAttribute('class', 'card')

    const h2 = document.createElement('P')
    h2.textContent = object.id
    const h3 = document.createElement('P')
    h3.textContent = object.name
    const Q = document.createElement('P')
    Q.textContent = object.username
    const W = document.createElement('P')
    W.textContent = object.email
    const E = document.createElement('P')
    E.textContent = object.address.street
    const R = document.createElement('P')
    R.textContent = object.address.suite
    const T = document.createElement('P')
    T.textContent = object.address.city
    const Y = document.createElement('P')
    Y.textContent = object.address.zipcode


    card.appendChild(h2)
    card.appendChild(h3)
    card.appendChild(Q)
    card.appendChild(W)
    card.appendChild(E)
    card.appendChild(R)
    card.appendChild(T)
    card.appendChild(Y)
    col.appendChild(card)

    return col

}