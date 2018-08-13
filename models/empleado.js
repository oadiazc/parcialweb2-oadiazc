module.exports = (sequelize, type) => {
    return sequelize.define('empleado', {
        id_empleado: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cedula_empleado: {
            type: type.INTEGER,
            allowNull: false
        },
        nombre_empleado: {
            type: type.STRING,
            allowNull: false //para que el campo no se permita vacio
        },
        telefono_empleado: {
            type: type.INTEGER,
        },
        email_empleado: {
            type: type.STRING
        },
    }, {
        tableName: 'empleado'
    });
}