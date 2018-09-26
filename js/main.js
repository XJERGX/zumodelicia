window.onscroll = (e) => {
    const scroll = window.scrollY
    const header = document.querySelector( '#navbar' )

    if ( scroll > 100 )
    {
        header.classList.remove( 'bg-transparent' )
        header.classList.add( 'bg-warning' )
    } else {
        header.classList.remove( 'bg-warning' )
        header.classList.add( 'bg-transparent' )
    }
}

document.querySelectorAll( '.navbar .nav-link' ).forEach( enlace => {
    enlace.addEventListener( 'click', ( e ) => {
        e.preventDefault()
        document.querySelector( enlace.getAttribute( 'href' ) ).scrollIntoView({
            behavior: 'smooth',
            block   : 'start'
        })
    })
})

button = document.querySelector( '#botonHero' )
button.addEventListener( 'click', ( e ) => {
    e.preventDefault()
    document.querySelector( button.getAttribute( 'href' ) ).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

brand = document.querySelector( '.navbar-brand' )
brand.addEventListener( 'click', ( e ) => {
    e.preventDefault()
    document.querySelector( brand.getAttribute( 'href' ) ).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})