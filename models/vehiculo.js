module.exports = (sequelize, type) => {
    return sequelize.define('vehiculo', {
        id_vehiculo: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipo_vehiculo: {
            type: type.STRING,
            allowNull: false //para que el campo no se permita vacio
        },    
    }, {
        tableName: 'vehiculo'
    });
}