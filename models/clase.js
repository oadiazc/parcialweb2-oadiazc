module.exports = (sequelize, type) => {
    return sequelize.define('clase', {
        id_clase: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_clase: {
            type: type.STRING,
            allowNull: false //para que el campo no se permita vacio
        },
    }, {
        tableName: 'clase'
    });
}