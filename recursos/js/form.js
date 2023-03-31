const miform = document.querySelector('#miformulario');

miform.addEventListener( 'submit', manejadorEnvios);

async function manejadorEnvios(e) {
    e.preventDefault();
    const form = new FormData(this);

    const respuesta = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    } );

    if( respuesta.ok ) {
        this.reset();
        Swal.fire( {
            position: 'center',
            icon: 'success',
            title: 'Gracias por contactarme, te escribiré pronto.',
            showConfirmButton: false,
            timer: 5000
        } )
    }
}