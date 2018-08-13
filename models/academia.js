module.exports = (sequelize, type) => {
    return sequelize.define('academia', {
        id_academia: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_academia: {
            type: type.STRING,
            allowNull: false //para que el campo no se permita vacio
        },
        correo_academia: {
            type: type.STRING,
            allowNull: false
        },
        telefono_academia: {
            type: type.STRING,
            allowNull: false
        }
    }, {
        tableName: 'academia'
    });
}