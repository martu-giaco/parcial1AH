import Capsula from '../models/CapsulaModel.js'

const newCapsula = async( request, response ) =>{
    const {nombre, cupsize, intensidad, sabor} = request.body;
    const capsula = new Capsula({nombre, cupsize, intensidad, sabor});
    const data = await capsula.save();
    response.status(201).json({ msg:"capsula creada", data});
}

const listCapsulas = async (request, response) =>{
    const capsulas = await Capsula.find();
    response.json(capsulas);
}

const getCapsulaById = async (request, response) => {
    const id = request.params.id;
    const capsula = await Capsula.findById(id);
    if( capsula){
        response.status(200).json({data: capsula});
    } else {
        response.status(404).json({msg: 'capsula no encontrada'});
    }
}

const deleteCapsulaById = async( request, response) =>{
    const id = request.params.id;
    const capsula = await Capsula.findByIdAndDelete(id);
    if ( capsula ){
        response.status(200).json({msg:'Capsula Eliminada'});
    } else {
        response.status(404).json({msg: 'Capsula no encontrada'});
    }
}

const updateCapsulaById = async( request, response) =>{
    const id = request.params.id;
    const body = request.body;

    const capsula = await Capsula.findByIdAndUpdate(id, body);
    if ( capsula ){
        response.status(200).json({msg:'Capsula Actualizada'});
    } else {
        response.status(404).json({msg: 'Capsula no encontrada'});
    }
}

const getCapsulaByNombre = async (request, response) => {
    const nombre = request.params.nombre;
    const capsula = await Capsula.find({});
    if( capsula){
        response.status(200).json({data: capsula});
    } else {
        response.status(404).json({msg: 'capsula no encontrada'});
    }
}

export { 
    newCapsula, listCapsulas, 
    getCapsulaById, deleteCapsulaById, updateCapsulaById 
};

const pets = await Pet.find({});

        // Se filtra todas las mascotas con el mismo nombre
        const petsFiltered = pets.filter( p => p.name.toLowerCase() === name.toLowerCase() );

        if (petsFiltered.length === 0) {
            return res.status(404).json({ msg: "No se encontraron mascotas con ese nombre." });
        }