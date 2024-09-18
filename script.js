import Color from "https://colorjs.io/dist/color.js"

const r = document.querySelector( ':root' )

const colorA = new Color( 'blue' )
const colorB = new Color( 'pink' )
let pointerDown

const update = ( e ) => {
  const x = Math.abs( e.pageX / ( e.view.innerWidth / 2 ) )
  const y = Math.abs( e.pageY / ( e.view.innerHeight / 2 ) )

  const mixedColorA = colorA.mix( 'cyan', x )
  const mixedColorB = colorB.mix( 'magenta', y )

  console.log( x, y )

  r.style.setProperty( '--colorA', mixedColorA.toString( { format: 'hex' } ) )
  r.style.setProperty( '--colorB', mixedColorB.toString( { format: 'hex' } ) )
}

window.addEventListener( 'pointerdown', ( e ) => {
  pointerDown = true
  update( e )
} )

window.addEventListener( 'pointermove', ( e ) => {
  if ( pointerDown ) {
    update( e )
    e.preventDefault()
    e.stopImmediatePropagation()
  }
}, { passive: false } )

window.addEventListener( 'touchmove', ( e ) => {
  e.preventDefault()
  e.stopImmediatePropagation()
}, { passive: false } )

window.addEventListener( 'pointerup', () => {
  pointerDown = false
} )
