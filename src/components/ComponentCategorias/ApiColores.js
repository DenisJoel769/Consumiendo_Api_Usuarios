import axios from 'axios'

const listaColores = {
    listarColores(){
      return  axios.get('https://servicios.neunapp.com/api/tienda/colores/lista/')
    }
}
export default listaColores