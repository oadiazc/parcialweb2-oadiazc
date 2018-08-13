module.exports = (sequelize, type) => {
    return sequelize.define('profesor', {
        id_profesor: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_profesor: {
            type: type.STRING,
            allowNull: false //para que el campo no se permita vacio
        },
        cedula_profesor: {
            type: type.INTEGER,
            allowNull: false
        },
        telefono_profesor: {
            type: type.INTEGER
        },
        email_profesor: {
            type: type.STRING
            
        },
        
    }, {
        tableName: 'profesor'
    });
}