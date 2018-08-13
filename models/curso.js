module.exports = (sequelize, type) => {
    return sequelize.define('curso', {
        id_curso: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_curso: {
            type: type.STRING,
            allowNull: false //para que el campo no se permita vacio
        },
        tipo_curso: {
            type: type.INTEGER,
        },
    }, {
        tableName: 'curso'
    });
}