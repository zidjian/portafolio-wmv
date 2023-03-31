// const buttons = document.querySelectorAll('a.btn');

// buttons.forEach( btn => {
//     btn.addEventListener( 'mouseenter', function( e ) {
//         let x = e.clientX - e.target.offsetLeft;
//         let y = e.clientY - e.target.offsetTop;

//         console.log(e.clientY, '-', e.target.offsetTop);

//         let replicas = document.createElement( 'replica' );
//         replicas.style.left = x + 'px';
//         replicas.style.top = y + 'px';
//         this.appendChild(replicas);

//         setTimeout( () => {
//             replicas.remove();
//         }, 1000 );
//     } )
// });