const reactElement = {
    type: 'a',
    props: {
        'href': 'https://www.google.com',
        'target': '_blank'
    },
    children: 'Click here to go to Google'
}

function customRender(reactelement, container){
    /*
    const domElement = document.createElement(reactelement.type)
    domElement.innerHTML = reactelement.children
    domElement.setAttribute('href', reactelement.props.href)
    domElement.setAttribute('target', reactelement.props.target)
    container.appendChild(domElement)
    */

    //VERSION 2
    const domElement = document.createElement(reactelement.type)
    domElement.innerHTML = reactelement.children
    for(const prop in reactelement.props){
        if(prop === 'children') continue
        domElement.setAttribute(prop, reactelement.props[prop])
    }
    container.appendChild(domElement)
}
const container = document.getElementById('root')  

customRender(reactElement, container)