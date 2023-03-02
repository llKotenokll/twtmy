//Javier Eduardo Balderas García

//archivo auxiliar del SW, para pasar la lógica d euna función

//Guardar en el caché dinámico
function actualizaCacheDinamico ( dynamicCache, req, res ) {

    if ( res.ok ) {

        return caches.open( dynamicCache ).then( cache => {
            cache.put( req, res.clone() );
            return res.clone();
        });

    } else {
        return res;
    }
}