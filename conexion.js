const Sequelize = require('sequelize');
const EstudianteModel = require('./models/estudiante');
const EmpleadoModel = require('./models/empleado');
const CursoModel = require('./models/curso');
const VehiculoModel = require('./models/vehiculo');
const ProfesorModel = require('./models/profesor');
const AcademiaModel = require('./models/academia');
const claseModel = require('./models/clase');

const sequelize = new Sequelize('Bdacademia', 'postgres', 'ceresanserma2018', {
    dialect: 'postgres',
});

const estudiante = EstudianteModel(sequelize, Sequelize)
const empleado = EmpleadoModel(sequelize, Sequelize)
const curso = CursoModel(sequelize, Sequelize)
const vehiculo = VehiculoModel(sequelize, Sequelize)
const profesor = ProfesorModel(sequelize, Sequelize)
const academia = AcademiaModel(sequelize, Sequelize)


curso.belongsTo(academia) // se crea la llave foranea de 1 a muchos 1 :n 
academia.belongsTo(empleado)

const clase = sequelize.define("clase", {
    id_clase: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_clase: {
        type: Sequelize.DATE
    },
    fk_curso: {
        type: Sequelize.INTEGER,
        references: {
            model: "curso",
            key: "id_curso"
        }
    },
    fk_vehiculo: {
        type: Sequelize.INTEGER,
        references: {
            model: "vehiculo",
            key: "id_vehiculo"
        }
    },
    fk_profesor: {
        type: Sequelize.INTEGER,
        references: {
            model: "profesor",
            key: "id_profesor"
        }
    },
    fk_estudiante: {
        type: Sequelize.INTEGER,
        references: {
            model: "estudiante",
            key: "id_estudiante"
        }
    },
})

sequelize.sync({
        force: false
    })
    .then(() => {
        console.log('Datebase & tablets created')
    })

module.exports = {
    estudiante,
    profesor,
    academia,
    empleado,
    curso,
    vehiculo
}

// laboratorio.create({
//     nombre_laboratorio: 'laboratorio diaz',
//     telefono_laboratorio: '887',
//     email_laboratorio: "contactenos@ld.com"

// })

// cliente.create({
//     nombre_cliente: 'andres diaz',
//     telefono_cliente: '88677',
//     email_cliente: "contactenos@gmail.com",
//     cedula_cliente: "1059709494",
//     categoria_cliente: "2",
//     contraseña_cliente: "admin"

// })
// empleado.create({
//     nombre_empleado: 'andres diaz',
//     telefono_empleado: '88677',
//     email_empleado: "contactenos@gmail.com",
//     cedula_empleado: "1059709494",
//     categoria_empleado: "2",
//     contraseña_empleado: "admin"

// })
// procedimiento.create({
//     nombre_procedimiento: 'andres diaz',
//     categoria_procedimiento: "2"
// })
// resultado.create({
//     nombre_resultado: 'andres diaz',
//     categoria_resultado: "2"
// })
// // Post.findAll({
// //     where: {
// //         authorId: 12,
// //         status: 'active'
// //     }
// // })