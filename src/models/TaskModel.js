const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const User = sequelize.models.User;
    return sequelize.define('Task', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
            }
        }
    });
}
