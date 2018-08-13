module.exports = (sequelize, type) => {
    return sequelize.define('estudiante', {
        id_estudiante: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cedula_estudiante: {
            type: type.INTEGER,
            allowNull: false
        },
        nombre_estudiante: {
            type: type.STRING,
            allowNull: false //para que el campo no se permita vacio
        },
        telefono_estudiante: {
            type: type.INTEGER
        },
        email_estudiante: {
            type: type.STRING
        },
    }, {
        tableName: 'estudiante'
    });
}