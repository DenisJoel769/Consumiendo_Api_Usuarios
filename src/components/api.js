import axios from 'axios'

const apiProductos = {
    productosPopulares(){
        return axios.get ('https://servicios.neunapp.com/api/tienda/productos/lista/')
    },
    filtrarProductos(filtros){
        return axios.get('https://servicios.neunapp.com/api/tienda/productos/lista/'+ filtros) 
    }
}
export default apiProductos