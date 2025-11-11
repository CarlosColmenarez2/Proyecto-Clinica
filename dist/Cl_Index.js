import Cl_controlador from "./Cl_controlador.js";
import Cl_MClinica from "./Cl_MClinica.js";
import Cl_vClinica from "./Cl_vClinica.js";
export default class Cl_Index {
    constructor() {
        const modelo = new Cl_MClinica();
        const vista = new Cl_vClinica();
        new Cl_controlador(modelo, vista);
    }
}
